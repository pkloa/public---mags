import styles from './IntroPage.module.css'

function IntroPage({ onEnter, fading }) {
  return (
    <div 
      className={`${styles.intro} ${fading ? styles.fadeOut : ''}`} 
      onClick={onEnter}
    >
      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          <video 
            src={import.meta.env.BASE_URL + 'cd—final intro.mp4'} 
            className={styles.vinylLabel}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
    </div>
  )
}

export default IntroPage

