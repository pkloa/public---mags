import styles from './ImageGallery.module.css'

function ImageGallery({ images }) {
  if (!images || images.length === 0) {
    return null
  }

  // Group images by layout type
  const fullWidthImages = images.filter(img => img.layout === 'full-width')
  const twoColumnImages = images.filter(img => img.layout === 'two-column')

  // Group two-column images into pairs
  const twoColumnPairs = []
  for (let i = 0; i < twoColumnImages.length; i += 2) {
    twoColumnPairs.push(twoColumnImages.slice(i, i + 2))
  }

  return (
    <div className={styles.gallery}>
      {/* Render full-width images */}
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

