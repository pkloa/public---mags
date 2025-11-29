import { useState } from 'react'
import styles from './App.module.css'
import Navigation from './components/Navigation/Navigation'
import ThirdMenu from './components/ThirdMenu/ThirdMenu'
import MainContent from './components/MainContent/MainContent'
import { getContent, getThirdMenuItems } from './data/content'

function App() {
  const [selectedMenu, setSelectedMenu] = useState(null)
  const [selectedSubmenu, setSelectedSubmenu] = useState(null)
  const [selectedThirdMenu, setSelectedThirdMenu] = useState(null)

  const thirdMenuItems = selectedMenu && selectedSubmenu && selectedMenu !== 'blog'
    ? getThirdMenuItems(selectedMenu, selectedSubmenu)
    : []

  // Show content for blog directly, or for magazines when issue is selected
  const content = selectedMenu === 'blog'
    ? getContent('blog')
    : selectedMenu && selectedSubmenu && selectedThirdMenu
    ? getContent(selectedMenu, selectedSubmenu, selectedThirdMenu)
    : null

  const handleMenuSelect = (menu) => {
    if (menu === 'home') {
      setSelectedMenu(null)
      setSelectedSubmenu(null)
      setSelectedThirdMenu(null)
    } else {
      setSelectedMenu(menu)
      setSelectedSubmenu(null)
      setSelectedThirdMenu(null)
    }
  }

  const handleSubmenuSelect = (submenu) => {
    setSelectedSubmenu(submenu)
    setSelectedThirdMenu(null) // Reset third menu when submenu changes
  }

  return (
    <div className={styles.app}>
      <Navigation 
        selectedMenu={selectedMenu}
        selectedSubmenu={selectedSubmenu}
        onMenuSelect={handleMenuSelect}
        onSubmenuSelect={handleSubmenuSelect}
      />
      <main className={styles.main}>
        <ThirdMenu 
          items={thirdMenuItems}
          selectedItem={selectedThirdMenu}
          onItemSelect={setSelectedThirdMenu}
        />
        <MainContent content={content} />
      </main>
    </div>
  )
}

export default App
