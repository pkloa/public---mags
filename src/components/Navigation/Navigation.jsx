import styles from './Navigation.module.css'
import { getSubmenuItems, getContent } from '../../data/content'

function Navigation({ selectedMenu, selectedSubmenu, onMenuSelect, onSubmenuSelect }) {
  const menuItems = [
    { key: 'home', label: 'public---mags' },
    { key: 'magazines', label: 'magazine scans' },
    { key: 'blog', label: 'blog' },
    { key: 'about', label: 'about' }
  ]
  const submenuItems = selectedMenu && selectedMenu !== 'home' && selectedMenu !== 'blog' && selectedMenu !== 'about' ? getSubmenuItems(selectedMenu) : []

  const handleMenuClick = (menuItem) => {
    onMenuSelect(menuItem)
    onSubmenuSelect(null) // Reset submenu when menu changes
  }

  const handleSubmenuClick = (submenuItem) => {
    onSubmenuSelect(submenuItem)
  }

  const showSubmenu = selectedMenu === 'magazines' && submenuItems.length > 0
  const showAboutText = selectedMenu === 'about'
  const aboutContent = showAboutText ? getContent('about') : null

  return (
    <div className={styles.navigation} style={{ width: (showSubmenu || showAboutText) ? '550px' : '250px' }}>
      <div className={styles.menuColumn}>
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`${styles.menuItem} ${selectedMenu === item.key ? styles.active : ''}`}
            onClick={() => handleMenuClick(item.key)}
          >
            {item.label}
          </div>
        ))}
      </div>
      {showSubmenu && (
        <div className={styles.submenuColumn}>
          {submenuItems.map((subItem, index) => (
            <div
              key={index}
              className={`${styles.submenuItem} ${selectedSubmenu === subItem ? styles.active : ''}`}
              onClick={() => handleSubmenuClick(subItem)}
            >
              {subItem}
            </div>
          ))}
        </div>
      )}
      {showAboutText && aboutContent && (
        <div className={styles.submenuColumn}>
          <div className={styles.aboutText}>
            {aboutContent.text && Array.isArray(aboutContent.text) ? (
              aboutContent.text.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))
            ) : (
              <p>{aboutContent.text}</p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Navigation

