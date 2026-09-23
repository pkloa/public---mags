import { useState, useEffect, useRef } from 'react'
import styles from './App.module.css'
import Navigation from './components/Navigation/Navigation'
import ThirdMenu from './components/ThirdMenu/ThirdMenu'
import MainContent from './components/MainContent/MainContent'
import IntroPage from './components/IntroPage/IntroPage'
import Miniplayer from './components/MusicPlayer/Miniplayer'
import PlayerProvider from './components/MusicPlayer/PlayerProvider'
import { usePlayer } from './components/MusicPlayer/playerContext'
import { getContent, getThirdMenuItems, getSubmenuItems } from './data/content'

function GlobalMiniplayer() {
  const {
    audioRef,
    currentTrack,
    isPlaying,
    miniplayerOpen,
    hasPrev,
    hasNext,
    togglePlay,
    next,
    prev,
    close,
  } = usePlayer()
  if (!miniplayerOpen || !currentTrack) return null
  return (
    <Miniplayer
      track={currentTrack}
      audioRef={audioRef}
      isPlaying={isPlaying}
      hasPrev={hasPrev}
      hasNext={hasNext}
      onTogglePlay={togglePlay}
      onPrev={prev}
      onNext={next}
      onClose={close}
    />
  )
}

// Decorative shipping label. Hidden on mobile while the miniplayer is open
// so the bottom strip stays uncluttered; the modifier class is a no-op on
// desktop where there's room for both.
function ShippingLabel() {
  const { miniplayerOpen } = usePlayer()
  return (
    <img
      src={import.meta.env.BASE_URL + 'shipping-label.png'}
      alt="shipping label"
      className={`${styles.fixedShippingLabel} ${
        miniplayerOpen ? styles.fixedShippingLabelHiddenOnMobile : ''
      }`}
    />
  )
}

function App() {
  const [showIntro, setShowIntro] = useState(true)
  const [introFading, setIntroFading] = useState(false)
  const [selectedMenu, setSelectedMenu] = useState(null)
  const [selectedSubmenu, setSelectedSubmenu] = useState(null)
  const [selectedThirdMenu, setSelectedThirdMenu] = useState(null)
  const [showAbout, setShowAbout] = useState(false)
  const [showCopyrightPage, setShowCopyrightPage] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [blogResetKey, setBlogResetKey] = useState(0)
  const [blogPreviewOpen, setBlogPreviewOpen] = useState(false)
  const mainRef = useRef(null)

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const thirdMenuItems = selectedMenu && selectedSubmenu && selectedMenu !== 'blog' && selectedMenu !== 'collection' && selectedMenu !== 'shop' && !(selectedMenu === 'menu1')
    ? getThirdMenuItems(selectedMenu, selectedSubmenu)
    : []

  const isBlog = selectedMenu === 'menu1' && selectedSubmenu === 'blog'
  const isPlaylist = selectedMenu === 'menu1' && selectedSubmenu === 'playlist'
  const isShop = selectedMenu === 'shop'
  const isCollection = selectedMenu === 'collection'

  // Show content for blog/playlist (secondary menu), collection, shop, or magazines when issue is selected
  // About content is shown in navigation, not main content
  const content = isBlog
    ? getContent('blog')
    : isCollection
    ? getContent('collection')
    : isShop
    ? getContent('shop')
    : isPlaylist
    ? getContent('menu1', 'playlist', null)
    : selectedMenu && selectedSubmenu && selectedThirdMenu
    ? getContent(selectedMenu, selectedSubmenu, selectedThirdMenu)
    : null

  const handleMenuSelect = (menu) => {
    setShowCopyrightPage(false)
    if (menu === 'home') {
      setSelectedMenu(null)
      setSelectedSubmenu(null)
      setSelectedThirdMenu(null)
      setShowAbout(false)
    } else if (menu !== 'about') {
      setSelectedMenu(menu)
      setSelectedSubmenu(null)
      setSelectedThirdMenu(null)
      if (showAbout) {
        setShowAbout(false)
      }
    }
  }

  const handleCopyrightOpen = () => {
    setShowCopyrightPage(true)
    setSelectedMenu(null)
    setSelectedSubmenu(null)
    setSelectedThirdMenu(null)
  }

  const handleAboutToggle = () => {
    const openingAbout = !showAbout
    setShowCopyrightPage(false)
    setShowAbout(!showAbout)
    if (openingAbout && (isBlog || isPlaylist || selectedMenu === 'menu1')) {
      setSelectedMenu(null)
      setSelectedSubmenu(null)
    }
  }

  const handleSubmenuSelect = (submenu) => {
    setShowCopyrightPage(false)
    setSelectedSubmenu(submenu)
    setSelectedThirdMenu(null)
    if (submenu === 'blog') {
      setBlogResetKey((key) => key + 1)
    }
  }

  const scrollMainToTop = () => {
    const main = mainRef.current
    if (main) main.scrollTop = 0
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }

  const handleThirdMenuSelect = (item) => {
    setShowCopyrightPage(false)
    setSelectedThirdMenu(item)
    scrollMainToTop()
  }

  const handleCollectionScanNavigate = ({ submenu, thirdMenu }) => {
    setShowCopyrightPage(false)
    setShowAbout(false)
    setSelectedMenu('magazines')
    setSelectedSubmenu(submenu)
    setSelectedThirdMenu(thirdMenu)
    scrollMainToTop()
    if (isMobile) {
      requestAnimationFrame(scrollMainToTop)
    }
  }

  const handleEnter = () => {
    setIntroFading(true)
    setTimeout(() => {
      setShowIntro(false)
    }, 800)
  }

  const navHasSubmenuColumn =
    !isMobile &&
    !!selectedMenu &&
    selectedMenu === 'magazines' &&
    getSubmenuItems(selectedMenu).length > 0

  return (
    <PlayerProvider>
      {showIntro && (
        <IntroPage onEnter={handleEnter} fading={introFading} />
      )}
      <div className={`${styles.app} ${showIntro ? styles.hidden : styles.fadeIn} ${isPlaylist ? styles.appPlaylist : ''}`}>
      {!blogPreviewOpen && (
        <Navigation 
          selectedMenu={selectedMenu}
          selectedSubmenu={selectedSubmenu}
          showAbout={showAbout}
          copyrightPage={showCopyrightPage}
          onMenuSelect={handleMenuSelect}
          onSubmenuSelect={handleSubmenuSelect}
          onAboutToggle={handleAboutToggle}
          onCopyrightOpen={handleCopyrightOpen}
        />
      )}
      <main 
        ref={mainRef}
        className={`${styles.main} ${showCopyrightPage ? styles.mainCopyright : ''} ${isPlaylist ? styles.mainPlaylist : ''}`}
        style={!isMobile && !blogPreviewOpen ? { marginLeft: navHasSubmenuColumn ? '600px' : '300px' } : {}}
      >
        {!showCopyrightPage && !isPlaylist && (
          <ThirdMenu 
            items={thirdMenuItems}
            selectedItem={selectedThirdMenu}
            onItemSelect={handleThirdMenuSelect}
          />
        )}
        <MainContent 
          content={content} 
          isBlog={isBlog} 
          isCollection={isCollection}
          isShop={isShop}
          copyrightPage={showCopyrightPage}
          isMobile={isMobile}
          blogResetKey={blogResetKey}
          onBlogPreviewChange={setBlogPreviewOpen}
          onCollectionScanNavigate={handleCollectionScanNavigate}
        />
      </main>
      {!blogPreviewOpen && <ShippingLabel />}
      </div>
      <GlobalMiniplayer />
    </PlayerProvider>
  )
}

export default App
