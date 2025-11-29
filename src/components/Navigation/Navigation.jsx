import styles from './Navigation.module.css'
import { getSubmenuItems } from '../../data/content'

function Navigation({ selectedMenu, selectedSubmenu, onMenuSelect, onSubmenuSelect }) {
  const menuItems = ['Menu Item 1', 'Menu Item 2', 'Menu Item 3']
  const submenuItems = selectedMenu ? getSubmenuItems(selectedMenu) : []

  const handleMenuClick = (menuItem) => {
    onMenuSelect(menuItem)
    onSubmenuSelect(null) // Reset submenu when menu changes
  }

  const handleSubmenuClick = (submenuItem) => {
    onSubmenuSelect(submenuItem)
  }

  return (
    <div className={styles.navigation}>
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
    </div>
  )
}

export default Navigation

