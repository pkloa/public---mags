import { useCallback, useMemo, useRef, useState } from 'react'
import { PlayerContext } from './playerContext'

const PLAYER_VOLUME = 0.25

// iPod-style shuffle helpers. Module scope so React's purity rule isn't
// tripped — Math.random is only invoked from event handlers.
function shuffleArray(arr) {
  const a = arr.slice()
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

/**
 * Pop the next track number from the shuffle queue. When the queue is empty,
 * reshuffles all tracks into a new cycle (so every track plays exactly once
 * per cycle). If the freshly shuffled queue would replay `currentN` first,
 * swap it deeper into the queue to prevent back-to-back repeats at boundaries.
 *
 * Returns null when there is 0 or 1 track total.
 */
function takeShuffleNext(queueRef, allNs, currentN) {
  if (allNs.length <= 1) return null
  if (!queueRef.current || queueRef.current.length === 0) {
    const next = shuffleArray(allNs)
    if (currentN != null && next[0] === currentN && next.length > 1) {
      const swapIdx = 1 + Math.floor(Math.random() * (next.length - 1))
      ;[next[0], next[swapIdx]] = [next[swapIdx], next[0]]
    }
    queueRef.current = next
  }
  return queueRef.current.shift() ?? null
}

function trackListEqual(a, b) {
  if (a.length !== b.length) return false
  return a.every((t, i) => {
    const n = b[i]
    return (
      t.n === n.n &&
      t.title === n.title &&
      t.duration === n.duration &&
      t.artists === n.artists &&
      t.feat === n.feat &&
      t.audio === n.audio &&
      t.audioFile === n.audioFile
    )
  })
}

export default function PlayerProvider({ children }) {
  const audioRef = useRef(null)
  /** Bumps on each new load+play so stale `play()` rejections (e.g. AbortError) can't clear UI. */
  const playSeqRef = useRef(0)
  /** iPod-style shuffle queue: track numbers still to play in the current cycle. */
  const shuffleQueueRef = useRef([])

  const [tracks, setTracksState] = useState([])
  const [playingN, setPlayingN] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [miniplayerOpen, setMiniplayerOpen] = useState(false)
  // Stack of previously-played track numbers; powers the "previous" button so
  // prev walks actual listening history rather than a sequential index.
  const [playHistory, setPlayHistory] = useState([])

  /**
   * Set / replace the active track list. Identity-stable updates are a no-op
   * so callers can safely invoke this from a render-driven effect.
   */
  const setTracks = useCallback((nextTracks) => {
    setTracksState((prev) => {
      if (prev === nextTracks) return prev
      if (trackListEqual(prev, nextTracks)) return prev

      const sameTrackNumbers =
        prev.length === nextTracks.length &&
        prev.every((t, i) => t.n === nextTracks[i].n)
      if (!sameTrackNumbers) {
        shuffleQueueRef.current = []
      }
      return nextTracks
    })
  }, [])

  /**
   * Load + play a track. If the same track is already loaded, toggle pause/play.
   * `pushHistory: false` is used by `prev()` so walking back doesn't pollute the stack.
   */
  const playTrack = useCallback(
    (track, pushHistory = true) => {
      if (!track?.audio) return
      const el = audioRef.current
      if (!el) return

      el.volume = PLAYER_VOLUME

      if (playingN === track.n) {
        if (el.paused) {
          el.play().catch((err) => {
            if (err?.name === 'AbortError') return
          })
        } else {
          el.pause()
        }
        return
      }

      if (pushHistory && playingN != null) {
        setPlayHistory((h) => [...h, playingN])
      }

      if (shuffleQueueRef.current.length > 0) {
        shuffleQueueRef.current = shuffleQueueRef.current.filter(
          (n) => n !== track.n
        )
      }

      playSeqRef.current += 1
      const playSeq = playSeqRef.current

      el.src = track.audio
      setPlayingN(track.n)
      setMiniplayerOpen(true)
      el.play().catch((err) => {
        if (playSeq !== playSeqRef.current) return
        if (err?.name === 'AbortError') return
        setPlayingN(null)
        setMiniplayerOpen(false)
      })
    },
    [playingN]
  )

  const currentTrack = useMemo(
    () =>
      playingN != null
        ? tracks.find((t) => t.n === playingN) || null
        : null,
    [tracks, playingN]
  )

  const togglePlay = useCallback(() => {
    if (currentTrack) playTrack(currentTrack)
  }, [currentTrack, playTrack])

  const next = useCallback(() => {
    if (tracks.length === 0) return
    const allNs = tracks.map((t) => t.n)
    const nextN = takeShuffleNext(shuffleQueueRef, allNs, playingN)
    if (nextN == null) return
    const nextTrack = tracks.find((t) => t.n === nextN)
    if (nextTrack) playTrack(nextTrack, true)
  }, [tracks, playingN, playTrack])

  /**
   * Restart current if >3s in; otherwise pop the most recent track off
   * the history stack and play that without re-pushing onto history.
   */
  const prev = useCallback(() => {
    const el = audioRef.current
    if (el && el.currentTime > 3) {
      el.currentTime = 0
      return
    }
    if (playHistory.length === 0) {
      if (el) el.currentTime = 0
      return
    }
    const prevN = playHistory[playHistory.length - 1]
    setPlayHistory((h) => h.slice(0, -1))
    const prevTrack = tracks.find((t) => t.n === prevN)
    if (prevTrack) playTrack(prevTrack, false)
  }, [playHistory, tracks, playTrack])

  const close = useCallback(() => {
    const el = audioRef.current
    if (el) {
      el.pause()
      el.removeAttribute('src')
      el.load?.()
    }
    setPlayingN(null)
    setIsPlaying(false)
    setMiniplayerOpen(false)
    setPlayHistory([])
    playSeqRef.current = 0
    shuffleQueueRef.current = []
  }, [])

  // Auto-advance on natural end via the shuffle helper.
  const handleEnded = useCallback(() => {
    setIsPlaying(false)
    if (tracks.length === 0) return
    const allNs = tracks.map((t) => t.n)
    const nextN = takeShuffleNext(shuffleQueueRef, allNs, playingN)
    if (nextN == null) return
    const nextTrack = tracks.find((t) => t.n === nextN)
    if (nextTrack) playTrack(nextTrack, true)
  }, [tracks, playingN, playTrack])

  const value = useMemo(
    () => ({
      audioRef,
      tracks,
      setTracks,
      playingN,
      isPlaying,
      miniplayerOpen,
      currentTrack,
      hasPrev: playHistory.length > 0,
      hasNext: tracks.length > 1,
      playTrack,
      togglePlay,
      next,
      prev,
      close,
    }),
    [
      tracks,
      setTracks,
      playingN,
      isPlaying,
      miniplayerOpen,
      currentTrack,
      playHistory.length,
      playTrack,
      togglePlay,
      next,
      prev,
      close,
    ]
  )

  return (
    <PlayerContext.Provider value={value}>
      {children}
      <audio
        ref={audioRef}
        preload="none"
        playsInline
        style={{
          position: 'absolute',
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          border: 0,
        }}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={handleEnded}
      />
    </PlayerContext.Provider>
  )
}
