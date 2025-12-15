import { useState, useEffect, useCallback, useMemo } from 'react'
import styles from './MainContent.module.css'
import ImageGallery from '../ImageGallery/ImageGallery'

function MainContent({ content, isBlog = false }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Combine all blog items into a single array
  const allBlogItems = useMemo(() => {
    if (!isBlog || !content) return []
    
    const items = []
    
    // Add main video if exists
    if (content.video) {
      items.push({
        type: 'video',
        src: content.video,
        date: content.videoDate,
        caption: 'crunk\nshot n edited by me'
      })
    }
    
    // Add blog items
    if (content.blogItems) {
      items.push(...content.blogItems)
    }
    
    return items
  }, [isBlog, content])

  // Reset index when content changes
  useEffect(() => {
    setCurrentIndex(0)
  }, [content])

  const goToNext = useCallback(() => {
    if (currentIndex < allBlogItems.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }, [currentIndex, allBlogItems.length])

  const goToPrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }, [currentIndex])

  // Keyboard navigation
  useEffect(() => {
    if (!isBlog) return

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        goToNext()
      } else if (e.key === 'ArrowLeft') {
        goToPrev()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isBlog, goToNext, goToPrev])

  if (!content) {
    return null
  }

  // Blog gallery view - one item at a time
  if (isBlog && allBlogItems.length > 0) {
    const currentItem = allBlogItems[currentIndex]
    const isLeftSide = currentIndex % 2 === 0

    return (
      <div className={styles.blogGallery}>
        {/* Navigation tap zones */}
        <div 
          className={styles.tapZoneLeft}
          onClick={goToPrev}
        />
        <div 
          className={styles.tapZoneRight}
          onClick={goToNext}
        />

        {/* Current item */}
        <div 
          className={styles.blogItemDisplay}
          style={{ 
            left: isLeftSide ? '5vw' : 'auto',
            right: isLeftSide ? 'auto' : '5vw'
          }}
        >
          {currentItem.date && (
            <div className={styles.blogDate}>{currentItem.date}</div>
          )}
          
          {currentItem.type === 'image' && (
            <img 
              src={currentItem.src} 
              alt={currentItem.alt || ''} 
              className={styles.blogDisplayImage}
            />
          )}
          
          {currentItem.type === 'video' && (
            <video 
              className={styles.blogDisplayVideo}
              controls
              playsInline
              key={currentItem.src}
            >
              <source src={currentItem.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          
          {currentItem.caption && (
            <div className={styles.blogCaption}>
              {currentItem.caption.split('\n').map((line, i) => (
                <span key={i}>{line}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    )
  }

  // Regular content view (non-blog)
  return (
    <div className={styles.mainContent}>
      <ImageGallery images={content.images} randomLayout={false} />
    </div>
  )
}

export default MainContent
