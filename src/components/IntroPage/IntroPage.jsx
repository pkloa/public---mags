import styles from './IntroPage.module.css'

function IntroPage({ onEnter, fading }) {
  return (
    <div 
      className={`${styles.intro} ${fading ? styles.fadeOut : ''}`} 
      onClick={onEnter}
    >
      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          <img 
            src={import.meta.env.BASE_URL + 'cd—final intro.gif'} 
            alt="Public Magazines" 
            className={styles.vinylLabel}
          />
        </div>
      </div>
    </div>
  )
}

export default IntroPage

