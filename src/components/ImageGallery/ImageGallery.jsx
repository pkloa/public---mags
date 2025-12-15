import { useMemo, useEffect, useRef, useState, useCallback } from 'react'
import styles from './ImageGallery.module.css'

// Generate random values for each image - full screen positioning
function generateRandomStyles(index) {
  // Seeded random based on index for consistency
  const seed = index * 137.5
  const random = (min, max) => {
    const x = Math.sin(seed + index) * 10000
    const r = x - Math.floor(x)
    return Math.floor(r * (max - min + 1)) + min
  }
  
  return {
    left: random(5, 60), // percentage from left (viewport)
    width: random(25, 50), // percentage width (viewport)
  }
}

function ImageGallery({ images, randomLayout = false }) {
  const galleryRef = useRef(null)
  const [currentSpread, setCurrentSpread] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(null)
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Generate random styles for all images once
  const randomStyles = useMemo(() => {
    if (!images) return []
    return images.map((_, index) => generateRandomStyles(index))
  }, [images])

  // Calculate total spreads: cover (1) + pairs of remaining images
  const totalSpreads = useMemo(() => {
    if (!images || images.length === 0) return 0
    if (images.length === 1) return 1
    return 1 + Math.ceil((images.length - 1) / 2)
  }, [images])

  // Get images for a spread
  const getSpreadImages = useCallback((spreadIndex) => {
    if (!images || spreadIndex === null) return { left: null, right: null }
    
    if (spreadIndex === 0) {
      // Cover page - single image centered
      return { left: null, right: images[0], isCover: true }
    }
    
    // For spreads after cover: spread 1 = images 1,2; spread 2 = images 3,4; etc.
    const leftIndex = (spreadIndex - 1) * 2 + 1
    const rightIndex = leftIndex + 1
    
    return {
      left: images[leftIndex] || null,
      right: images[rightIndex] || null,
      isCover: false
    }
  }, [images])

  const goToNext = useCallback(() => {
    if (isMobile) {
      if (currentImageIndex !== null && currentImageIndex < images.length - 1) {
        setCurrentImageIndex(currentImageIndex + 1)
      }
    } else {
      if (currentSpread !== null && currentSpread < totalSpreads - 1) {
        setCurrentSpread(currentSpread + 1)
      }
    }
  }, [isMobile, currentImageIndex, currentSpread, images, totalSpreads])

  const goToPrev = useCallback(() => {
    if (isMobile) {
      if (currentImageIndex !== null && currentImageIndex > 0) {
        setCurrentImageIndex(currentImageIndex - 1)
      }
    } else {
      if (currentSpread !== null && currentSpread > 0) {
        setCurrentSpread(currentSpread - 1)
      }
    }
  }, [isMobile, currentImageIndex, currentSpread])

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      closeLightbox()
    } else if (e.key === 'ArrowRight') {
      goToNext()
    } else if (e.key === 'ArrowLeft') {
      goToPrev()
    }
  }, [goToNext, goToPrev])

  const isLightboxOpen = isMobile ? currentImageIndex !== null : currentSpread !== null

  useEffect(() => {
    if (isLightboxOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isLightboxOpen, handleKeyDown])

  // Convert image index to spread index
  const getSpreadForImage = useCallback((imageIndex) => {
    if (imageIndex === 0) return 0
    return Math.ceil(imageIndex / 2)
  }, [])

  const openLightbox = (imageIndex) => {
    if (isMobile) {
      setCurrentImageIndex(imageIndex)
    } else {
      setCurrentSpread(getSpreadForImage(imageIndex))
    }
  }

  const closeLightbox = () => {
    setCurrentSpread(null)
    setCurrentImageIndex(null)
  }

  const currentSpreadImages = getSpreadImages(currentSpread)
  const currentImage = currentImageIndex !== null && images ? images[currentImageIndex] : null

  // Intersection Observer for fade-in effect
  useEffect(() => {
    if (!galleryRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const fadeElements = galleryRef.current.querySelectorAll(`.${styles.fadeIn}`)
    fadeElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [images])

  if (!images || images.length === 0) {
    // Show "coming soon..." for magazine scans, nothing for blog
    if (!randomLayout) {
      return <div className={styles.comingSoon}>coming soon...</div>
    }
    return null
  }

  // Random layout for blog page - full screen positioning
  if (randomLayout) {
    return (
      <div className={styles.gallery}>
        {images.map((image, index) => {
          const rs = randomStyles[index]
          
          return (
            <div 
              key={`img-${index}`} 
              className={`${styles.imageContainer} ${styles.blogImageFullScreen}`}
              style={{
                left: `${rs.left}vw`,
                width: `${rs.width}vw`,
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={styles.randomImage}
              />
            </div>
          )
        })}
      </div>
    )
  }

  // Group images: first image alone, rest in pairs
  const firstImage = images[0]
  const remainingImages = images.slice(1)
  const imagePairs = []
  for (let i = 0; i < remainingImages.length; i += 2) {
    imagePairs.push(remainingImages.slice(i, i + 2))
  }

  // Structured layout for magazine scans
  return (
    <>
      <div className={styles.gallery} ref={galleryRef}>
        {/* First image (cover) - displayed alone */}
        {firstImage && (
          <div className={`${styles.fullWidthContainer} ${styles.fadeIn}`}>
            <img
              src={firstImage.src}
              alt={firstImage.alt}
              className={`${styles.fullWidthImage} ${styles.clickable}`}
              onClick={() => openLightbox(0)}
            />
          </div>
        )}
        
        {/* Remaining images in two-page pairs */}
        {imagePairs.map((pair, pairIndex) => (
          <div key={`pair-${pairIndex}`} className={`${styles.twoColumnContainer} ${styles.fadeIn}`}>
            {pair.map((image, imgIndex) => {
              const actualIndex = 1 + pairIndex * 2 + imgIndex
              return (
                <div key={`img-${actualIndex}`} className={styles.twoColumnItem}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={`${styles.twoColumnImage} ${styles.clickable}`}
                    onClick={() => openLightbox(actualIndex)}
                  />
                </div>
              )
            })}
            {/* If odd number, add empty div to maintain layout */}
            {pair.length === 1 && <div className={styles.twoColumnItem}></div>}
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div className={styles.lightboxOverlay}>
          {/* Close button */}
          <button 
            className={isMobile ? styles.mobileCloseButton : styles.closeButton}
            onClick={closeLightbox}
            aria-label="Close"
          >
            ×
          </button>

          {/* Mobile: Single image view with left/right tap zones */}
          {isMobile && currentImage && (
            <div 
              className={styles.mobileImageContainer}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left tap zone - go back */}
              <div 
                className={styles.mobileTapZoneLeft}
                onClick={() => {
                  if (currentImageIndex > 0) {
                    goToPrev()
                  }
                }}
              />
              
              <img
                src={currentImage.src}
                alt={currentImage.alt}
                className={styles.mobileImage}
              />
              
              {/* Right tap zone - go forward */}
              <div 
                className={styles.mobileTapZoneRight}
                onClick={() => {
                  if (currentImageIndex < images.length - 1) {
                    goToNext()
                  }
                }}
              />
            </div>
          )}

          {/* Desktop: Magazine spread container */}
          {!isMobile && currentSpreadImages && (
            <>
              {/* Full screen tap zone for cover (first page) - click anywhere to go next */}
              {currentSpreadImages.isCover && (
                <div 
                  className={styles.desktopTapZoneFull}
                  onClick={() => currentSpread < totalSpreads - 1 && goToNext()}
                />
              )}

              {/* Full screen tap zones for two-page format */}
              {!currentSpreadImages.isCover && (
                <>
                  <div 
                    className={styles.desktopTapZoneLeft}
                    onClick={() => currentSpread > 0 && goToPrev()}
                  />
                  <div 
                    className={styles.desktopTapZoneRight}
                    onClick={() => currentSpread < totalSpreads - 1 && goToNext()}
                  />
                </>
              )}
              
              <div 
                className={`${styles.magazineContainer} ${currentSpreadImages.isCover ? styles.coverMode : ''}`}
              >
                {/* Current spread */}
                <div className={styles.spreadWrapper}>
                  {/* Left page */}
                  {!currentSpreadImages.isCover && currentSpreadImages.left && (
                    <div className={styles.pageLeft}>
                      <img
                        src={currentSpreadImages.left.src}
                        alt={currentSpreadImages.left.alt}
                        className={styles.spreadPageImage}
                      />
                    </div>
                  )}
                  
                  {/* Right page (or cover) */}
                  <div 
                    className={`${styles.pageRight} ${currentSpreadImages.isCover ? styles.coverPage : ''}`}
                  >
                    {currentSpreadImages.right && (
                      <img
                        src={currentSpreadImages.right.src}
                        alt={currentSpreadImages.right.alt}
                        className={styles.spreadPageImage}
                      />
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  )
}

export default ImageGallery

