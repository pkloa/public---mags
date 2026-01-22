import { useMemo, useEffect, useRef, useState, useCallback, createRef } from 'react'
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

function ImageGallery({ images, randomLayout = false, isCollection = false, spreadOnly = false }) {
  const galleryRef = useRef(null)
  const [currentSpread, setCurrentSpread] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(null)
  const [isMobile, setIsMobile] = useState(false)
  
  // Create refs for each thumbnail to scroll to on close
  const imageRefs = useRef([])

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

  // Count consecutive full-width images at the end
  const fullWidthEndCount = useMemo(() => {
    if (!images || images.length <= 1) return 0
    let count = 0
    for (let i = images.length - 1; i >= 1; i--) {
      if (images[i]?.layout === 'full-width') {
        count++
      } else {
        break
      }
    }
    return count
  }, [images])

  // Check if last image should be full-width (for backwards compatibility)
  const hasFullWidthLast = fullWidthEndCount > 0

  // Calculate total spreads: cover (1) + pairs of middle images + full-width end images
  const totalSpreads = useMemo(() => {
    if (!images || images.length === 0) return 0
    if (images.length === 1) return 1
    const middleCount = images.length - 1 - fullWidthEndCount
    const middleSpreads = Math.ceil(middleCount / 2)
    return 1 + middleSpreads + fullWidthEndCount
  }, [images, fullWidthEndCount])

  // Get images for a spread
  const getSpreadImages = useCallback((spreadIndex) => {
    if (!images || spreadIndex === null) return { left: null, right: null }
    
    if (spreadIndex === 0) {
      // Cover page - single image centered
      return { left: null, right: images[0], isCover: true }
    }
    
    // Calculate number of two-page spreads (excluding cover and full-width end images)
    const middleCount = images.length - 1 - fullWidthEndCount
    const middleSpreads = Math.ceil(middleCount / 2)
    
    // Check if this spread is one of the full-width end images
    if (fullWidthEndCount > 0 && spreadIndex > middleSpreads) {
      const endImageIndex = images.length - fullWidthEndCount + (spreadIndex - middleSpreads - 1)
      const isLastSpread = spreadIndex === totalSpreads - 1
      return { left: null, right: images[endImageIndex], isCover: true, isBackCover: isLastSpread }
    }
    
    // For spreads after cover: spread 1 = images 1,2; spread 2 = images 3,4; etc.
    const leftIndex = (spreadIndex - 1) * 2 + 1
    const rightIndex = leftIndex + 1
    
    return {
      left: images[leftIndex] || null,
      right: images[rightIndex] || null,
      isCover: false
    }
  }, [images, fullWidthEndCount, totalSpreads])

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
    
    // Check if this image is one of the full-width end images
    const firstFullWidthEndIndex = images.length - fullWidthEndCount
    if (fullWidthEndCount > 0 && imageIndex >= firstFullWidthEndIndex) {
      const middleCount = images.length - 1 - fullWidthEndCount
      const middleSpreads = Math.ceil(middleCount / 2)
      return 1 + middleSpreads + (imageIndex - firstFullWidthEndIndex)
    }
    
    // For two-column images
    return Math.ceil(imageIndex / 2)
  }, [images, fullWidthEndCount])

  const openLightbox = (imageIndex) => {
    if (isMobile) {
      setCurrentImageIndex(imageIndex)
    } else {
      setCurrentSpread(getSpreadForImage(imageIndex))
    }
  }

  const closeLightbox = useCallback(() => {
    // Calculate which image to scroll to
    let scrollToIndex = null
    
    if (isMobile && currentImageIndex !== null) {
      scrollToIndex = currentImageIndex
    } else if (!isMobile && currentSpread !== null) {
      // For desktop, get the first image of the current spread
      const middleCount = images.length - 1 - fullWidthEndCount
      const middleSpreads = Math.ceil(middleCount / 2)
      
      if (currentSpread === 0) {
        scrollToIndex = 0
      } else if (fullWidthEndCount > 0 && currentSpread > middleSpreads) {
        // One of the full-width end images
        scrollToIndex = images.length - fullWidthEndCount + (currentSpread - middleSpreads - 1)
      } else {
        scrollToIndex = (currentSpread - 1) * 2 + 1
      }
    }
    
    // Scroll to the image thumbnail
    if (scrollToIndex !== null && imageRefs.current[scrollToIndex]) {
      setTimeout(() => {
        imageRefs.current[scrollToIndex].scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        })
      }, 50)
    }
    
    setCurrentSpread(null)
    setCurrentImageIndex(null)
  }, [isMobile, currentImageIndex, currentSpread, fullWidthEndCount, images])

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
    // Show "coming soon..." for magazine scans, nothing for blog or collection
    if (!randomLayout && !isCollection) {
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

  // Group images based on spreadOnly mode
  const firstImage = spreadOnly ? null : images[0]
  
  // Get full-width end images
  const fullWidthEndImages = fullWidthEndCount > 0 
    ? images.slice(images.length - fullWidthEndCount) 
    : []
  
  // Get images for pairing (exclude cover and full-width end images)
  const imagesToPair = spreadOnly 
    ? images 
    : (fullWidthEndCount > 0 ? images.slice(1, images.length - fullWidthEndCount) : images.slice(1))
  const imagePairs = []
  for (let i = 0; i < imagesToPair.length; i += 2) {
    imagePairs.push(imagesToPair.slice(i, i + 2))
  }

  // Structured layout for magazine scans
  return (
    <>
      <div className={styles.gallery} ref={galleryRef}>
        {/* First image (cover) - displayed alone, skip if spreadOnly */}
        {!spreadOnly && firstImage && (
          <div className={`${styles.fullWidthContainer} ${styles.fadeIn}`}>
            <img
              ref={el => imageRefs.current[0] = el}
              src={firstImage.src}
              alt={firstImage.alt}
              className={`${styles.fullWidthImage} ${styles.clickable}`}
              onClick={() => openLightbox(0)}
            />
          </div>
        )}
        
        {/* Images in two-page pairs */}
        {imagePairs.map((pair, pairIndex) => (
          <div key={`pair-${pairIndex}`} className={`${spreadOnly ? styles.twoColumnContainerSpread : styles.twoColumnContainer} ${styles.fadeIn}`}>
            {pair.map((image, imgIndex) => {
              const actualIndex = spreadOnly 
                ? pairIndex * 2 + imgIndex 
                : 1 + pairIndex * 2 + imgIndex
              return (
                <div key={`img-${actualIndex}`} className={styles.twoColumnItem}>
                  <img
                    ref={el => imageRefs.current[actualIndex] = el}
                    src={image.src}
                    alt={image.alt}
                    className={`${styles.twoColumnImage} ${styles.clickable}`}
                    onClick={() => openLightbox(actualIndex)}
                  />
                </div>
              )
            })}
            {/* If odd number, add empty div to maintain layout */}
            {pair.length === 1 && !hasFullWidthLast && <div className={styles.twoColumnItem}></div>}
          </div>
        ))}

        {/* Full-width end images - displayed alone */}
        {!spreadOnly && fullWidthEndImages.map((image, idx) => {
          const actualIndex = images.length - fullWidthEndCount + idx
          return (
            <div key={`fullwidth-end-${idx}`} className={`${styles.fullWidthContainer} ${styles.fadeIn}`}>
              <img
                ref={el => imageRefs.current[actualIndex] = el}
                src={image.src}
                alt={image.alt}
                className={`${styles.fullWidthImage} ${styles.clickable}`}
                onClick={() => openLightbox(actualIndex)}
              />
            </div>
          )
        })}
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
              {/* Full screen tap zone for front cover (first page only) - click anywhere to go next */}
              {currentSpreadImages.isCover && currentSpread === 0 && (
                <div 
                  className={styles.desktopTapZoneFull}
                  onClick={() => currentSpread < totalSpreads - 1 && goToNext()}
                />
              )}

              {/* Full screen tap zones for full-width end images (not first cover) */}
              {currentSpreadImages.isCover && currentSpread > 0 && (
                <>
                  {/* On the last page, show full screen tap zone for previous */}
                  {currentSpread === totalSpreads - 1 ? (
                    <div 
                      className={styles.desktopTapZoneFullPrev}
                      onClick={() => goToPrev()}
                    />
                  ) : (
                    <>
                      <div 
                        className={styles.desktopTapZoneLeft}
                        onClick={() => goToPrev()}
                      />
                      <div 
                        className={styles.desktopTapZoneRight}
                        onClick={() => goToNext()}
                      />
                    </>
                  )}
                </>
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

