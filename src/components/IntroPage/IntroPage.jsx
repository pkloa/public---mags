import styles from './IntroPage.module.css'

function IntroPage({ onEnter, fading }) {
  return (
    <div 
      className={`${styles.intro} ${fading ? styles.fadeOut : ''}`} 
      onClick={onEnter}
    >
      <div className={styles.content}>
        <img 
          src={import.meta.env.BASE_URL + 'vinyl-label.gif'} 
          alt="Public Magazines" 
          className={styles.vinylLabel}
        />
      </div>
    </div>
  )
}

export default IntroPage

