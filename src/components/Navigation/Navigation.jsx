import styles from './Navigation.module.css'
import { getSubmenuItems, getContent } from '../../data/content'

function Navigation({ selectedMenu, selectedSubmenu, showAbout, onMenuSelect, onSubmenuSelect, onAboutToggle }) {
  const menuItems = [
    { key: 'home', label: 'public---mags' },
    { key: 'magazines', label: 'magazine scans' },
    { key: 'blog', label: 'blog' },
    { key: 'about', label: 'about' }
  ]
  const submenuItems = selectedMenu && selectedMenu !== 'home' && selectedMenu !== 'blog' && selectedMenu !== 'about' ? getSubmenuItems(selectedMenu) : []

  const handleMenuClick = (menuItem) => {
    if (menuItem === 'about') {
      // Toggle about independently
      onAboutToggle()
    } else {
      onMenuSelect(menuItem)
      onSubmenuSelect(null) // Reset submenu when menu changes
    }
  }

  const handleSubmenuClick = (submenuItem) => {
    onSubmenuSelect(submenuItem)
  }

  const showSubmenu = selectedMenu === 'magazines' && submenuItems.length > 0
  const aboutContent = showAbout ? getContent('about') : null

  return (
    <div className={styles.navigation} style={{ width: showSubmenu ? '600px' : '300px' }}>
      <div className={styles.menuColumn}>
        {menuItems.map((item, index) => (
          <div key={index}>
            <div
              className={`${styles.menuItem} ${(item.key === 'about' ? showAbout : selectedMenu === item.key) ? styles.active : ''}`}
              onClick={() => handleMenuClick(item.key)}
            >
              {item.label}
            </div>
            {/* Show about text directly below the about link */}
            {item.key === 'about' && showAbout && aboutContent && (
              <div className={styles.aboutTextInline}>
                {aboutContent.text && Array.isArray(aboutContent.text) ? (
                  aboutContent.text.map((paragraph, pIndex) => (
                    <p key={pIndex}>{paragraph}</p>
                  ))
                ) : (
                  <p>{aboutContent.text}</p>
                )}
                {aboutContent.links && aboutContent.links.map((link, lIndex) => (
                  <a 
                    key={lIndex} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.aboutLink}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
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
    </div>
  )
}

export default Navigation

