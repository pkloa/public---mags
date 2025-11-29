import { useState } from 'react'
import styles from './App.module.css'
import Navigation from './components/Navigation/Navigation'
import MainContent from './components/MainContent/MainContent'
import { getContent } from './data/content'

function App() {
  const [selectedMenu, setSelectedMenu] = useState(null)
  const [selectedSubmenu, setSelectedSubmenu] = useState(null)

  const content = selectedMenu && selectedSubmenu 
    ? getContent(selectedMenu, selectedSubmenu)
    : null

  return (
    <div className={styles.app}>
      <Navigation 
        selectedMenu={selectedMenu}
        selectedSubmenu={selectedSubmenu}
        onMenuSelect={setSelectedMenu}
        onSubmenuSelect={setSelectedSubmenu}
      />
      <main className={styles.main}>
        <MainContent content={content} />
      </main>
    </div>
  )
}

export default App
