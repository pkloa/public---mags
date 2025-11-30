import { useMemo } from 'react'
import styles from './ImageGallery.module.css'

// Generate random values for each image
function generateRandomStyles(index) {
  // Seeded random based on index for consistency
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
    width: random(40, 75), // smaller images
  }
}

function ImageGallery({ images, randomLayout = false }) {
  // Generate random styles for all images once
  const randomStyles = useMemo(() => {
    if (!images) return []
    return images.map((_, index) => generateRandomStyles(index))
  }, [images])

  if (!images || images.length === 0) {
    // Show "coming soon..." for magazine scans, nothing for blog
    if (!randomLayout) {
      return <div className={styles.comingSoon}>coming soon...</div>
    }
    return null
  }

  // Random layout for blog page
  if (randomLayout) {
    return (
      <div className={styles.gallery}>
        {images.map((image, index) => {
          const rs = randomStyles[index]
          
          return (
            <div 
              key={`img-${index}`} 
              className={styles.imageContainer}
              style={{
                marginTop: `${rs.marginTop}px`,
                marginBottom: `${rs.marginBottom}px`,
                marginLeft: `${rs.marginLeft}px`,
                marginRight: `${rs.marginRight}px`,
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={styles.randomImage}
                style={{
                  width: `${rs.width}%`,
                }}
              />
            </div>
          )
        })}
      </div>
    )
  }

  // Original structured layout for magazine scans
  const firstImage = images[0]
  const remainingImages = images.slice(1)

  // Group remaining images by layout type
  const fullWidthImages = remainingImages.filter(img => img.layout === 'full-width')
  const twoColumnImages = remainingImages.filter(img => img.layout === 'two-column')

  // Group two-column images into pairs
  const twoColumnPairs = []
  for (let i = 0; i < twoColumnImages.length; i += 2) {
    twoColumnPairs.push(twoColumnImages.slice(i, i + 2))
  }

  return (
    <div className={styles.gallery}>
      {/* First image is always full-width */}
      {firstImage && (
        <div className={styles.fullWidthContainer}>
          <img
            src={firstImage.src}
            alt={firstImage.alt}
            className={styles.fullWidthImage}
          />
        </div>
      )}
      
      {/* Render remaining full-width images */}
      {fullWidthImages.map((image, index) => (
        <div key={`full-${index}`} className={styles.fullWidthContainer}>
          <img
            src={image.src}
            alt={image.alt}
            className={styles.fullWidthImage}
          />
        </div>
      ))}
      
      {/* Render two-column images */}
      {twoColumnPairs.map((pair, pairIndex) => (
        <div key={`two-col-${pairIndex}`} className={styles.twoColumnContainer}>
          {pair.map((image, imgIndex) => (
            <div key={`two-col-${pairIndex}-${imgIndex}`} className={styles.twoColumnItem}>
              <img
                src={image.src}
                alt={image.alt}
                className={styles.twoColumnImage}
              />
            </div>
          ))}
          {/* If odd number of images, add empty div to maintain layout */}
          {pair.length === 1 && <div className={styles.twoColumnItem}></div>}
        </div>
      ))}
    </div>
  )
}

export default ImageGallery

