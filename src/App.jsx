import { useState, useEffect } from 'react'
import styles from './App.module.css'
import Navigation from './components/Navigation/Navigation'
import ThirdMenu from './components/ThirdMenu/ThirdMenu'
import MainContent from './components/MainContent/MainContent'
import IntroPage from './components/IntroPage/IntroPage'
import PasswordLock from './components/PasswordLock/PasswordLock'
import { getContent, getThirdMenuItems } from './data/content'

function App() {
  const [isLocked, setIsLocked] = useState(true)
  const [showIntro, setShowIntro] = useState(true)
  const [introFading, setIntroFading] = useState(false)
  const [selectedMenu, setSelectedMenu] = useState(null)
  const [selectedSubmenu, setSelectedSubmenu] = useState(null)
  const [selectedThirdMenu, setSelectedThirdMenu] = useState(null)
  const [showAbout, setShowAbout] = useState(false)
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
    : selectedMenu && selectedSubmenu && selectedThirdMenu
    ? getContent(selectedMenu, selectedSubmenu, selectedThirdMenu)
    : null

  const handleMenuSelect = (menu) => {
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

  const handleAboutToggle = () => {
    setShowAbout(!showAbout)
    // Close blog when opening about
    if (!showAbout && selectedMenu === 'blog') {
      setSelectedMenu(null)
    }
  }

  const handleSubmenuSelect = (submenu) => {
    setSelectedSubmenu(submenu)
    setSelectedThirdMenu(null) // Reset third menu when submenu changes
  }

  const handleEnter = () => {
    setIntroFading(true)
    setTimeout(() => {
      setShowIntro(false)
    }, 800)
  }

  if (isLocked) {
    return <PasswordLock onUnlock={() => setIsLocked(false)} />
  }

  return (
    <>
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
      />
      <main 
        className={styles.main}
        style={!isMobile ? { marginLeft: selectedMenu === 'magazines' ? '600px' : '300px' } : {}}
      >
        <ThirdMenu 
          items={thirdMenuItems}
          selectedItem={selectedThirdMenu}
          onItemSelect={setSelectedThirdMenu}
        />
        <MainContent content={content} isBlog={selectedMenu === 'blog'} isCollection={selectedMenu === 'collection'} />
      </main>
      <img 
        src={import.meta.env.BASE_URL + 'shipping-label.png'} 
        alt="shipping label" 
        className={styles.fixedShippingLabel}
      />
      </div>
    </>
  )
}

export default App
