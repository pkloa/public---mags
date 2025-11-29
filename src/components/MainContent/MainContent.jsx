import styles from './MainContent.module.css'
import ImageGallery from '../ImageGallery/ImageGallery'

function MainContent({ content }) {
  if (!content) {
    return (
      <div className={styles.mainContent}>
        <div className={styles.emptyState}>
          <p>Select a submenu item to view content</p>
        </div>
      </div>
    )
  }

  const renderText = () => {
    if (Array.isArray(content.text)) {
      return content.text.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))
    }
    return <p>{content.text}</p>
  }

  return (
    <div className={styles.mainContent}>
      <h1>{content.title}</h1>
      <div className={styles.textContent}>
        {renderText()}
      </div>
      <ImageGallery images={content.images} />
    </div>
  )
}

export default MainContent

