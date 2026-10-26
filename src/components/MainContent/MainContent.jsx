import { useMemo, useRef, useEffect, useState } from 'react'
import styles from './MainContent.module.css'
import ImageGallery from '../ImageGallery/ImageGallery'
import { usePlayer } from '../MusicPlayer/playerContext'
import { getCollectionScanLink } from '../../data/content'

function BlogImageSwap({ src, hoverSrc, alt, isMobile }) {
  const [showHover, setShowHover] = useState(false)

  const toggleHover = () => {
    if (isMobile) {
      setShowHover((prev) => !prev)
    }
  }

  return (
    <div
      className={`${styles.blogImageSwap} ${isMobile && showHover ? styles.blogImageSwapActive : ''}`}
      onClick={isMobile ? toggleHover : undefined}
      onKeyDown={
        isMobile
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                toggleHover()
              }
            }
          : undefined
      }
      role={isMobile ? 'button' : undefined}
      tabIndex={isMobile ? 0 : undefined}
      aria-pressed={isMobile ? showHover : undefined}
    >
      <img src={src} alt={alt || ''} className={styles.blogDisplayImage} />
      <img
        src={hoverSrc}
        alt=""
        aria-hidden="true"
        className={`${styles.blogDisplayImage} ${styles.blogDisplayImageHover}`}
      />
    </div>
  )
}

function renderSideTextWithLinks(paragraph, links, onOpen) {
  if (!links?.length) return paragraph

  const pattern = new RegExp(
    `\\b(${links.map((link) => link.text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})\\b`,
    'g'
  )
  const parts = paragraph.split(pattern)

  return parts.map((part, index) => {
    const link = links.find((item) => item.text === part)
    if (!link) return part

    return (
      <button
        key={`${link.text}-${index}`}
        type="button"
        className={styles.blogSideTextLink}
        onClick={(e) => {
          e.stopPropagation()
          onOpen({ src: link.src, alt: link.alt || link.text })
        }}
      >
        {link.text}
      </button>
    )
  })
}

function MainContent({ content, isBlog = false, isCollection = false, isShop = false, copyrightPage = false, isMobile = false, blogResetKey = 0, onBlogPreviewChange, onCollectionScanNavigate }) {
  const scrollRef = useRef(null)
  const collectionRef = useRef(null)
  const collectionScanEls = useRef(new WeakMap())
  const [hoveredCover, setHoveredCover] = useState(null)
  const [activeScanLink, setActiveScanLink] = useState(null)
  const [blogPreview, setBlogPreview] = useState(null)
  const { playingN, isPlaying, setTracks, playTrack } = usePlayer()

  const showCoverPreview = (scanLink) => {
    if (scanLink?.cover) {
      setHoveredCover(scanLink.cover)
      setActiveScanLink(scanLink)
    } else {
      setHoveredCover(null)
      setActiveScanLink(null)
    }
  }

  const clearCoverPreview = () => {
    setHoveredCover(null)
    setActiveScanLink(null)
  }

  useEffect(() => {
    onBlogPreviewChange?.(!!blogPreview)
  }, [blogPreview, onBlogPreviewChange])

  useEffect(() => {
    if (!blogPreview) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setBlogPreview(null)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [blogPreview])

  useEffect(() => {
    if (!isBlog) {
      setBlogPreview(null)
      return
    }
    setBlogPreview(null)
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0
    }
  }, [blogResetKey, isBlog])

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
    if (!isCollection || isMobile) {
      clearCoverPreview()
      return
    }

    const el = collectionRef.current
    if (!el) return
    
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
  }, [isCollection, isMobile])

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
    items.forEach((item) => item.classList.remove(styles.visible))

    const observeFrame = requestAnimationFrame(() => {
      items.forEach((item) => {
        void item.offsetWidth
        observer.observe(item)
      })
    })

    return () => {
      cancelAnimationFrame(observeFrame)
      observer.disconnect()
    }
  }, [isBlog, blogResetKey])

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

  const collectionLines = useMemo(() => {
    if (!isCollection || !content?.text) return []
    return content.text
      .filter((line) => line !== '')
      .map((line) => {
        const lower = line.toLowerCase()
        const isTitle = lower.includes('magazine') || lower.startsWith('books')
        const scanLink = getCollectionScanLink(line)
        const lineHeight = (Math.random() * 8 + 14).toFixed(2) + 'px'
        const chars = line.split('').map((char) => ({
          char,
          letterSpacing: (Math.random() * 2 - 0.5).toFixed(2) + 'px',
        }))
        return { line, isTitle, scanLink, lineHeight, chars }
      })
  }, [isCollection, content?.text])

  // Mobile: show starred cover while its line is in the focus band; hide when scrolled past.
  // Wait until the user scrolls before showing any cover (avoids top-of-page flash).
  useEffect(() => {
    if (!isCollection || !isMobile || !collectionRef.current) {
      return
    }

    const buttons = collectionRef.current.querySelectorAll(`.${styles.collectionIssueBtn}`)
    if (!buttons.length) return

    const visible = new Map()
    let hasScrolled = false
    const startY = window.scrollY
    const targetY = () => window.innerHeight * 0.35

    const pickActive = () => {
      if (!hasScrolled) {
        clearCoverPreview()
        return
      }
      if (visible.size === 0) {
        clearCoverPreview()
        return
      }
      let bestEl = null
      let bestDist = Infinity
      visible.forEach((top, el) => {
        const dist = Math.abs(top - targetY())
        if (dist < bestDist) {
          bestDist = dist
          bestEl = el
        }
      })
      const scanLink = bestEl ? collectionScanEls.current.get(bestEl) : null
      showCoverPreview(scanLink)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visible.set(entry.target, entry.boundingClientRect.top)
          } else {
            visible.delete(entry.target)
          }
        })
        pickActive()
      },
      {
        root: null,
        rootMargin: '-28% 0px -55% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    )

    const onScroll = () => {
      if (!hasScrolled && Math.abs(window.scrollY - startY) > 2) {
        hasScrolled = true
      }
      visible.forEach((_, el) => {
        visible.set(el, el.getBoundingClientRect().top)
      })
      pickActive()
    }

    clearCoverPreview()
    buttons.forEach((btn) => observer.observe(btn))
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
      clearCoverPreview()
    }
  }, [isCollection, isMobile, collectionLines])

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
                {item.type === 'image' && item.hoverSrc ? (
                  <BlogImageSwap
                    src={item.src}
                    hoverSrc={item.hoverSrc}
                    alt={item.alt}
                    isMobile={isMobile}
                  />
                ) : item.type === 'image' && (
                  <img 
                    src={item.src} 
                    alt={item.alt || ''} 
                    className={styles.blogDisplayImage}
                  />
                )}
                
                {item.sideSrc && (
                  <img
                    src={item.sideSrc}
                    alt={item.sideAlt || ''}
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
                      <p key={i}>
                        {renderSideTextWithLinks(paragraph, item.sideTextLinks, setBlogPreview)}
                      </p>
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
        {blogPreview && (
          <div
            className={styles.blogPreviewOverlay}
            role="dialog"
            aria-modal="true"
            aria-label={blogPreview.alt || 'Image preview'}
          >
            <button
              type="button"
              className={styles.blogPreviewClose}
              onClick={() => setBlogPreview(null)}
              aria-label="Close preview"
            >
              ×
            </button>
            <img
              src={blogPreview.src}
              alt={blogPreview.alt || ''}
              className={styles.blogPreviewImage}
            />
          </div>
        )}
      </div>
    )
  }

  // Shop / for sale
  if (isShop && content) {
    const shopItems = Array.isArray(content.items) ? content.items : []
    return (
      <div className={styles.mainContent}>
        <div className={styles.shopPage}>
          {content.text?.map((paragraph, i) => (
            <p key={i} className={styles.shopIntro}>{paragraph}</p>
          ))}
          {shopItems.length === 0 ? (
            <p className={styles.shopEmpty}>coming soon...</p>
          ) : (
            <ul className={styles.shopList}>
              {shopItems.map((item) => (
                <li key={item.id || item.title} className={styles.shopItem}>
                  {item.cover && (
                    <img src={item.cover} alt={item.title || ''} className={styles.shopCover} />
                  )}
                  <div className={styles.shopItemMeta}>
                    <div className={styles.shopItemTitle}>{item.title}</div>
                    {item.price && <div className={styles.shopItemPrice}>{item.price}</div>}
                    {item.soldOut ? (
                      <span className={styles.shopSoldOut}>sold out</span>
                    ) : item.buyUrl ? (
                      <a
                        href={item.buyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.shopBuyLink}
                      >
                        buy
                      </a>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }

  // Regular content view (non-blog)
  return (
    <div className={isCollection ? styles.mainContentCollection : styles.mainContent}>
      {isCollection && content.text && (
        <>
          {hoveredCover && (
            <div
              className={styles.collectionCoverOverlay}
              aria-hidden={isMobile ? undefined : true}
            >
              {isMobile && activeScanLink ? (
                <button
                  type="button"
                  className={styles.collectionCoverPreviewBtn}
                  onClick={() => onCollectionScanNavigate?.(activeScanLink)}
                  aria-label={`View scans for ${activeScanLink.thirdMenu || 'issue'}`}
                >
                  <img src={hoveredCover} alt="" className={styles.collectionCoverPreview} />
                </button>
              ) : (
                <img src={hoveredCover} alt="" className={styles.collectionCoverPreview} />
              )}
            </div>
          )}
          <div className={styles.collectionText} ref={collectionRef}>
          {collectionLines.map(({ line, isTitle, scanLink, lineHeight, chars }, index) => {
            const lineContent = chars.map((item, charIndex) => (
              <span key={charIndex} style={{ letterSpacing: item.letterSpacing }}>{item.char}</span>
            ))

            if (scanLink) {
              if (isMobile) {
                return (
                  <p
                    key={index}
                    className={styles.collectionIssueBtn}
                    ref={(el) => {
                      if (el) collectionScanEls.current.set(el, scanLink)
                    }}
                    style={{ lineHeight }}
                  >
                    {lineContent}
                  </p>
                )
              }

              return (
                <button
                  key={index}
                  type="button"
                  className={styles.collectionIssueBtn}
                  onClick={() => onCollectionScanNavigate?.(scanLink)}
                  onMouseEnter={() => showCoverPreview(scanLink)}
                  onMouseLeave={clearCoverPreview}
                  onFocus={() => showCoverPreview(scanLink)}
                  onBlur={clearCoverPreview}
                  aria-label={`View scans for ${line.replace(/\*$/, '').trim()}`}
                  style={{ lineHeight }}
                >
                  {lineContent}
                </button>
              )
            }

            return (
              <p
                key={index}
                className={isTitle ? styles.collectionTitle : styles.collectionIndent}
                style={{ lineHeight }}
              >
                {lineContent}
              </p>
            )
          })}
          </div>
        </>
      )}
      <ImageGallery
        key={content.images?.[0]?.src ?? content.title ?? 'gallery'}
        images={content.images}
        randomLayout={false}
        isCollection={isCollection}
        spreadOnly={content.spreadOnly}
      />
    </div>
  )
}

export default MainContent
