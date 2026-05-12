import { useMemo, useRef, useEffect } from 'react'
import styles from './MainContent.module.css'
import ImageGallery from '../ImageGallery/ImageGallery'
import { usePlayer } from '../MusicPlayer/playerContext'

function MainContent({ content, isBlog = false, isCollection = false, copyrightPage = false }) {
  const scrollRef = useRef(null)
  const collectionRef = useRef(null)
  const { playingN, isPlaying, setTracks, playTrack } = usePlayer()

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
        caption: content.videoCaption,
        centerCaption: true
      })
    }
    
    // Add blog items
    if (content.blogItems) {
      items.push(...content.blogItems)
    }

    // Sort so pinned items always appear first (no pin icon; order only)
    items.sort((a, b) => {
      if (a.pinned && !b.pinned) return -1
      if (!a.pinned && b.pinned) return 1
      return 0
    })

    return items
  }, [isBlog, content])

  // Sync the active playlist into the persistent player provider so playback
  // and the miniplayer survive navigation away from this page.
  useEffect(() => {
    if (content?.layout !== 'playlist' || !Array.isArray(content.tracks)) {
      return
    }
    const sorted = [...content.tracks].sort((a, b) => a.n - b.n)
    setTracks(sorted)
  }, [content, setTracks])

  if (copyrightPage) {
    return (
      <div className={styles.copyrightPage} aria-label="Copyright Notice">
        <div className={styles.copyrightPageInner}>
          <p>
            All content remains the property of its respective copyright holders and is presented for
            archival and research purposes. If you are a rights holder and would like material
            removed, please contact me and it will be taken down promptly.
          </p>
          <p>
            Contact:{' '}
            <a className={styles.copyrightEmail} href="mailto:publicmags.to@gmail.com">
              publicmags.to@gmail.com
            </a>
          </p>
        </div>
      </div>
    )
  }

  if (!content) {
    return null
  }

  if (content.layout === 'playlist' && Array.isArray(content.tracks) && content.tracks.length > 0) {
    const sorted = [...content.tracks].sort((a, b) => a.n - b.n)
    const half = Math.ceil(sorted.length / 2)
    const leftCol = sorted.slice(0, half)
    const rightCol = sorted.slice(half)

    const renderTrackRow = (track) => {
      const isThisTrack = playingN === track.n
      const rowIsPlaying = isThisTrack && isPlaying
      return (
        <div key={track.n} className={styles.playlistRow}>
          <span className={styles.playlistIndex}>{String(track.n).padStart(2, '0')}</span>
          <span className={styles.playlistPlayCell}>
            <button
              type="button"
              className={`${styles.playlistPlayBtn} ${rowIsPlaying ? styles.playlistPlayBtnActive : ''}`}
              onClick={() => playTrack(track)}
              disabled={!track.audio}
              aria-label={rowIsPlaying ? `Pause ${track.title}` : `Play ${track.title}`}
            >
              <span
                className={rowIsPlaying ? styles.playlistPauseIcon : styles.playlistPlayTriangle}
                aria-hidden="true"
              />
            </button>
          </span>
          <span className={styles.playlistDuration}>{track.duration}</span>
          <span className={styles.playlistTitle}>{track.title}</span>
          {track.artists ? (
            <span className={styles.playlistArtists}>{track.artists}</span>
          ) : track.feat ? (
            <span className={styles.playlistFeat}>FEAT. {track.feat}</span>
          ) : (
            <span className={styles.playlistFeatSpacer} aria-hidden="true" />
          )}
        </div>
      )
    }

    return (
      <div className={styles.playlistPage}>
        <div className={styles.playlistGrid}>
          <div
            className={styles.playlistColumn}
            style={{ gridTemplateRows: `repeat(${leftCol.length}, minmax(0, 1fr))` }}
          >
            {leftCol.map(renderTrackRow)}
          </div>
          <div
            className={styles.playlistColumn}
            style={{ gridTemplateRows: `repeat(${rightCol.length}, minmax(0, 1fr))` }}
          >
            {rightCol.map(renderTrackRow)}
          </div>
        </div>
      </div>
    )
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
                    disableRemotePlayback
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
              
              <div className={`${styles.blogCaption} ${item.centerCaption ? styles.blogCaptionCenter : ''}`}>
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
