import { useMemo } from 'react'
import styles from './MainContent.module.css'
import ImageGallery from '../ImageGallery/ImageGallery'

// Generate random styles for blog items
function generateRandomStyles(index) {
  const seed = index * 137.5
  const random = (min, max) => {
    const x = Math.sin(seed + index) * 10000
    const r = x - Math.floor(x)
    return Math.floor(r * (max - min + 1)) + min
  }
  
  return {
    marginTop: random(100, 300),
    marginBottom: random(100, 300),
    marginLeft: random(100, 300),
    marginRight: random(100, 300),
    width: random(40, 75),
  }
}

function MainContent({ content, isBlog = false }) {
  // Generate random styles for video and blog items
  const randomStyles = useMemo(() => {
    if (!isBlog) return []
    const itemCount = (content?.video ? 1 : 0) + (content?.blogItems?.length || 0)
    return Array.from({ length: itemCount }, (_, i) => generateRandomStyles(i))
  }, [isBlog, content?.video, content?.blogItems?.length])

  if (!content) {
    return null
  }

  // Get style for an item by index
  const getStyle = (index) => {
    if (!isBlog || !randomStyles[index]) return {}
    const rs = randomStyles[index]
    return {
      marginTop: `${rs.marginTop}px`,
      marginBottom: `${rs.marginBottom}px`,
      marginLeft: `${rs.marginLeft}px`,
      marginRight: `${rs.marginRight}px`,
      width: `${rs.width}%`,
    }
  }

  let itemIndex = 0

  return (
    <div className={styles.mainContent}>
      {content.video && (
        <div className={styles.videoContainer} style={isBlog ? getStyle(itemIndex++) : {}}>
          <video 
            className={styles.videoPlayer}
            controls
            playsInline
          >
            <source src={content.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className={styles.videoCaption}>
            <span>crunk</span>
            <span>shot n edited by me</span>
          </div>
        </div>
      )}
      {content.blogItems && content.blogItems.map((item, index) => (
        <div key={index} className={styles.blogItem} style={isBlog ? getStyle(itemIndex++) : {}}>
          {item.type === 'image' && (
            <>
              <img 
                src={item.src} 
                alt={item.alt} 
                className={styles.blogImage}
              />
              {item.caption && (
                <div className={styles.blogCaption}>{item.caption}</div>
              )}
            </>
          )}
        </div>
      ))}
      <ImageGallery images={content.images} randomLayout={isBlog} />
    </div>
  )
}

export default MainContent

