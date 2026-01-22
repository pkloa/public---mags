import { useMemo, useRef, useEffect } from 'react'
import styles from './MainContent.module.css'
import ImageGallery from '../ImageGallery/ImageGallery'

function MainContent({ content, isBlog = false, isCollection = false }) {
  const scrollRef = useRef(null)

  const collectionRef = useRef(null)

  // Convert vertical scroll to horizontal scroll for blog
  useEffect(() => {
    const el = scrollRef.current
    if (!el || !isBlog) return

    const handleWheel = (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault()
        el.scrollLeft += e.deltaY
      }
    }

    el.addEventListener('wheel', handleWheel, { passive: false })
    return () => el.removeEventListener('wheel', handleWheel)
  }, [isBlog])

  // Convert vertical scroll to horizontal scroll for collection (desktop only)
  useEffect(() => {
    const el = collectionRef.current
    if (!el || !isCollection) return
    
    // Don't add wheel handler on mobile - let it scroll naturally
    if (window.innerWidth <= 768) return

    const handleWheel = (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault()
        el.scrollLeft += e.deltaY
      }
    }

    el.addEventListener('wheel', handleWheel, { passive: false })
    return () => el.removeEventListener('wheel', handleWheel)
  }, [isCollection])


  // Mute videos when scrolled out of view
  useEffect(() => {
    if (!isBlog) return

    // Small delay to ensure all videos are rendered
    const timeoutId = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const video = entry.target
            if (!entry.isIntersecting) {
              video.muted = true
            }
          })
        },
        { threshold: 0.5 }
      )

      const videos = document.querySelectorAll(`.${styles.blogDisplayVideo}`)
      videos.forEach((video) => observer.observe(video))

      // Store observer reference for cleanup
      window._videoObserver = observer
    }, 100)

    return () => {
      clearTimeout(timeoutId)
      if (window._videoObserver) {
        const videos = document.querySelectorAll(`.${styles.blogDisplayVideo}`)
        videos.forEach((video) => window._videoObserver.unobserve(video))
      }
    }
  }, [isBlog, content])

  // Fade in assets as they scroll into view
  useEffect(() => {
    if (!isBlog) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible)
          }
        })
      },
      { threshold: 0.1 }
    )

    const items = document.querySelectorAll(`.${styles.blogItemDisplay}`)
    items.forEach((item) => observer.observe(item))

    return () => {
      items.forEach((item) => observer.unobserve(item))
    }
  }, [isBlog])

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

  if (!content) {
    return null
  }

  // Blog gallery view - horizontal scroll
  if (isBlog && allBlogItems.length > 0) {
    return (
      <div className={styles.blogGallery} ref={scrollRef}>
        <div className={styles.blogScrollContainer}>
          {allBlogItems.map((item, index) => (
            <div key={index} className={styles.blogItemDisplay}>
              <div className={styles.blogDate}>{item.date || ''}</div>
              
              <div className={styles.blogMediaWrapper}>
                {item.type === 'image' && (
                  <img 
                    src={item.src} 
                    alt={item.alt || ''} 
                    className={styles.blogDisplayImage}
                  />
                )}
                
                {item.type === 'video' && (
                  <video 
                    className={styles.blogDisplayVideo}
                    playsInline
                    autoPlay
                    loop
                    muted
                    onClick={(e) => {
                      e.target.muted = !e.target.muted
                    }}
                  >
                    <source src={item.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
                
                {item.type === 'text' && (
                  <div className={styles.blogTextItem}>
                    {item.text}
                  </div>
                )}
                
                {item.sideText && (
                  <div className={styles.blogSideText}>
                    {item.sideText.split('\n\n').map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                )}
              </div>
              
              <div className={styles.blogCaption}>
                {item.caption ? item.caption.split('\n').map((line, i) => (
                  <span key={i}>{line}</span>
                )) : ''}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // Regular content view (non-blog)
  return (
    <div className={isCollection ? styles.mainContentCollection : styles.mainContent}>
      {isCollection && content.text && (
        <div className={styles.collectionText} ref={collectionRef}>
          {content.text.filter(line => line !== '').map((line, index) => {
            const isTitle = line.toLowerCase().includes('magazine')
            const randomLineHeight = (Math.random() * 8 + 14).toFixed(2) + 'px'
            return (
              <p key={index} className={isTitle ? styles.collectionTitle : styles.collectionIndent} style={{ lineHeight: randomLineHeight }}>
                {line.split('').map((char, charIndex) => (
                  <span key={charIndex} style={{ letterSpacing: (Math.random() * 2 - 0.5).toFixed(2) + 'px' }}>{char}</span>
                ))}
              </p>
            )
          })}
        </div>
      )}
      <ImageGallery images={content.images} randomLayout={false} isCollection={isCollection} spreadOnly={content.spreadOnly} />
    </div>
  )
}

export default MainContent
