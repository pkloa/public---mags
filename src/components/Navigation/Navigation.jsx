import styles from './Navigation.module.css'
import { getSubmenuItems } from '../../data/content'

function Navigation({ selectedMenu, selectedSubmenu, onMenuSelect, onSubmenuSelect }) {
  const menuItems = ['home', 'magazines', 'blog']
  const submenuItems = selectedMenu && selectedMenu !== 'home' && selectedMenu !== 'blog' ? getSubmenuItems(selectedMenu) : []

  const handleMenuClick = (menuItem) => {
    onMenuSelect(menuItem)
    onSubmenuSelect(null) // Reset submenu when menu changes
  }

  const handleSubmenuClick = (submenuItem) => {
    onSubmenuSelect(submenuItem)
  }

  const showSubmenu = selectedMenu === 'magazines' && submenuItems.length > 0

  return (
    <div className={styles.navigation} style={{ width: showSubmenu ? '550px' : '250px' }}>
      <div className={styles.menuColumn}>
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`${styles.menuItem} ${selectedMenu === item ? styles.active : ''}`}
            onClick={() => handleMenuClick(item)}
          >
            {item}
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

