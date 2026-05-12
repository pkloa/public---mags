import { useCallback, useEffect, useRef, useState } from 'react'
import styles from './Miniplayer.module.css'

function formatTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00'
  const total = Math.floor(seconds)
  const m = Math.floor(total / 60)
  const s = (total % 60).toString().padStart(2, '0')
  return `${m}:${s}`
}

function PrevIcon() {
  return (
    <svg
      className={styles.skipSvg}
      width="11"
      height="8"
      viewBox="0 0 14 10"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="0" y="0" width="2" height="10" fill="currentColor" />
      <polygon points="14,0 14,10 4,5" fill="currentColor" />
    </svg>
  )
}

function NextIcon() {
  return (
    <svg
      className={styles.skipSvg}
      width="11"
      height="8"
      viewBox="0 0 14 10"
      aria-hidden="true"
      focusable="false"
    >
      <polygon points="0,0 0,10 10,5" fill="currentColor" />
      <rect x="12" y="0" width="2" height="10" fill="currentColor" />
    </svg>
  )
}

function Miniplayer({
  track,
  audioRef,
  isPlaying,
  hasPrev,
  hasNext,
  onTogglePlay,
  onPrev,
  onNext,
  onClose,
}) {
  const windowRef = useRef(null)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [position, setPosition] = useState({
    left: null,
    top: null,
    right: 20,
    bottom: 20,
  })
  const [dragging, setDragging] = useState(false)
  const dragStateRef = useRef(null)

  // Sync elapsed/duration from the shared audio element.
  useEffect(() => {
    const el = audioRef?.current
    if (!el) return

    const syncTime = () => setCurrentTime(el.currentTime || 0)
    const syncDuration = () =>
      setDuration(Number.isFinite(el.duration) ? el.duration : 0)

    syncTime()
    syncDuration()

    el.addEventListener('timeupdate', syncTime)
    el.addEventListener('loadedmetadata', syncDuration)
    el.addEventListener('durationchange', syncDuration)

    return () => {
      el.removeEventListener('timeupdate', syncTime)
      el.removeEventListener('loadedmetadata', syncDuration)
      el.removeEventListener('durationchange', syncDuration)
    }
  }, [audioRef, track?.n])

  const onDragStart = useCallback((e) => {
    if (typeof window !== 'undefined' && window.innerWidth <= 768) return
    if (e.button !== 0) return
    // Don't initiate drag from any interactive control.
    if (e.target.closest('button')) return

    const winEl = windowRef.current
    if (!winEl) return

    const rect = winEl.getBoundingClientRect()
    dragStateRef.current = {
      offsetX: e.clientX - rect.left,
      offsetY: e.clientY - rect.top,
      width: rect.width,
      height: rect.height,
    }
    setPosition({
      left: rect.left,
      top: rect.top,
      right: null,
      bottom: null,
    })
    setDragging(true)
    e.preventDefault()
  }, [])

  useEffect(() => {
    if (!dragging) return

    const handleMove = (e) => {
      const state = dragStateRef.current
      if (!state) return
      const nextLeft = e.clientX - state.offsetX
      const nextTop = e.clientY - state.offsetY
      const maxLeft = window.innerWidth - state.width
      const maxTop = window.innerHeight - state.height
      setPosition({
        left: Math.max(0, Math.min(maxLeft, nextLeft)),
        top: Math.max(0, Math.min(maxTop, nextTop)),
        right: null,
        bottom: null,
      })
    }

    const stopDragging = () => {
      setDragging(false)
      dragStateRef.current = null
    }

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseup', stopDragging)
    window.addEventListener('mouseleave', stopDragging)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseup', stopDragging)
      window.removeEventListener('mouseleave', stopDragging)
    }
  }, [dragging])

  if (!track) return null

  const style = {}
  if (position.left != null) style.left = `${position.left}px`
  if (position.top != null) style.top = `${position.top}px`
  if (position.right != null) style.right = `${position.right}px`
  if (position.bottom != null) style.bottom = `${position.bottom}px`

  const artistLine = track.artists
    ? track.artists
    : track.feat
    ? `Feat. ${track.feat}`
    : ''

  return (
    <div
      ref={windowRef}
      className={`${styles.window} ${dragging ? styles.dragging : ''}`}
      style={style}
      role="dialog"
      aria-label="Music miniplayer"
      onMouseDown={onDragStart}
    >
      <button
        type="button"
        className={styles.closeBtn}
        aria-label="Close miniplayer"
        onClick={onClose}
      >
        <span aria-hidden="true">×</span>
      </button>

      <div className={styles.meta}>
        <span className={styles.title} title={track.title}>
          {track.title}
        </span>
        {artistLine && (
          <span className={styles.artists} title={artistLine}>
            {artistLine}
          </span>
        )}
      </div>

      <span className={styles.time} aria-label="Elapsed and total time">
        {formatTime(currentTime)}
        <span className={styles.timeSep} aria-hidden="true"> / </span>
        {duration > 0 ? formatTime(duration) : track.duration || '0:00'}
      </span>

      <div className={styles.controls}>
        <button
          type="button"
          className={styles.controlBtn}
          onClick={onPrev}
          disabled={!hasPrev}
          aria-label="Previous track"
        >
          <PrevIcon />
        </button>
        <button
          type="button"
          className={`${styles.controlBtn} ${styles.controlBtnPrimary}`}
          onClick={onTogglePlay}
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          <span
            className={isPlaying ? styles.pauseIcon : styles.playTriangle}
            aria-hidden="true"
          />
        </button>
        <button
          type="button"
          className={styles.controlBtn}
          onClick={onNext}
          disabled={!hasNext}
          aria-label="Next track"
        >
          <NextIcon />
        </button>
      </div>
    </div>
  )
}

export default Miniplayer
