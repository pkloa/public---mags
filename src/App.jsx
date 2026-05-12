import { useState, useEffect } from 'react'
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

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const thirdMenuItems = selectedMenu && selectedSubmenu && selectedMenu !== 'blog' && selectedMenu !== 'collection'
    ? getThirdMenuItems(selectedMenu, selectedSubmenu)
    : []

  // Show content for blog and collection directly, or for magazines when issue is selected
  // About content is shown in navigation, not main content
  const content = selectedMenu === 'blog'
    ? getContent('blog')
    : selectedMenu === 'collection'
    ? getContent('collection')
    : selectedMenu === 'menu1' && selectedSubmenu === 'playlist'
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
      setShowAbout(false) // Also close about
    } else if (menu !== 'about') {
      setSelectedMenu(menu)
      setSelectedSubmenu(null)
      setSelectedThirdMenu(null)
      // Only close about when selecting blog
      if (showAbout && menu === 'blog') {
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
    if (openingAbout) {
      setShowCopyrightPage(false)
    }
    setShowAbout(!showAbout)
    // Close blog when opening about
    if (openingAbout && selectedMenu === 'blog') {
      setSelectedMenu(null)
    }
  }

  const handleSubmenuSelect = (submenu) => {
    setShowCopyrightPage(false)
    setSelectedSubmenu(submenu)
    setSelectedThirdMenu(null) // Reset third menu when submenu changes
  }

  const handleThirdMenuSelect = (item) => {
    setShowCopyrightPage(false)
    setSelectedThirdMenu(item)
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
      <div className={`${styles.app} ${showIntro ? styles.hidden : styles.fadeIn}`}>
      <Navigation 
        selectedMenu={selectedMenu}
        selectedSubmenu={selectedSubmenu}
        showAbout={showAbout}
        onMenuSelect={handleMenuSelect}
        onSubmenuSelect={handleSubmenuSelect}
        onAboutToggle={handleAboutToggle}
        onCopyrightOpen={handleCopyrightOpen}
      />
      <main 
        className={`${styles.main} ${showCopyrightPage ? styles.mainCopyright : ''} ${selectedMenu === 'menu1' && selectedSubmenu === 'playlist' ? styles.mainPlaylist : ''}`}
        style={!isMobile ? { marginLeft: navHasSubmenuColumn ? '600px' : '300px' } : {}}
      >
        {!showCopyrightPage && !(selectedMenu === 'menu1' && selectedSubmenu === 'playlist') && (
          <ThirdMenu 
            items={thirdMenuItems}
            selectedItem={selectedThirdMenu}
            onItemSelect={handleThirdMenuSelect}
          />
        )}
        <MainContent 
          content={content} 
          isBlog={selectedMenu === 'blog'} 
          isCollection={selectedMenu === 'collection'} 
          copyrightPage={showCopyrightPage}
        />
      </main>
      <ShippingLabel />
      </div>
      <GlobalMiniplayer />
    </PlayerProvider>
  )
}

export default App
