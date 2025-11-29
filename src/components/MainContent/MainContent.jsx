import styles from './MainContent.module.css'
import ImageGallery from '../ImageGallery/ImageGallery'

function MainContent({ content }) {
  if (!content) {
    return null
  }

  return (
    <div className={styles.mainContent}>
      <ImageGallery images={content.images} />
    </div>
  )
}

export default MainContent

