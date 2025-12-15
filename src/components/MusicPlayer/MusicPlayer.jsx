import { useState, useRef, useEffect } from 'react'
import styles from './MusicPlayer.module.css'

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio('/music.mp3')
    audioRef.current.loop = true
    audioRef.current.volume = 0.5

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <button 
      className={styles.playButton}
      onClick={togglePlay}
      aria-label={isPlaying ? 'Pause' : 'Play'}
    >
      {isPlaying ? '⏸' : '▶'}
    </button>
  )
}

export default MusicPlayer

