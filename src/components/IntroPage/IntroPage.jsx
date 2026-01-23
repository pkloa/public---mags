import { useEffect, useRef } from 'react'
import styles from './IntroPage.module.css'

function IntroPage({ onEnter, fading }) {
  const videoRef = useRef(null)

  useEffect(() => {
    // Programmatically play video for mobile browsers
    const video = videoRef.current
    if (video) {
      video.play().catch(() => {
        // Autoplay was prevented, try again on user interaction
        const playOnInteraction = () => {
          video.play()
          document.removeEventListener('touchstart', playOnInteraction)
        }
        document.addEventListener('touchstart', playOnInteraction)
      })
    }
  }, [])

  return (
    <div 
      className={`${styles.intro} ${fading ? styles.fadeOut : ''}`} 
      onClick={onEnter}
    >
      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          <video 
            ref={videoRef}
            src={import.meta.env.BASE_URL + 'cd—final intro.mp4'} 
            className={styles.vinylLabel}
            autoPlay
            loop
            muted
            playsInline
            webkit-playsinline="true"
            preload="auto"
            disableRemotePlayback
          />
        </div>
      </div>
    </div>
  )
}

export default IntroPage

