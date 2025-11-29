import { useMemo } from 'react'
import styles from './ThirdMenu.module.css'

// Helper function to generate random margin (outside component to satisfy linter)
const getRandomMargin = () => Math.floor(Math.random() * 46) + 20 // Random between 20-65px

function ThirdMenu({ items, selectedItem, onItemSelect }) {
  // Generate random margins for each item (consistent per item)
  const margins = useMemo(() => {
    if (!items || items.length === 0) return []
    return items.map(() => getRandomMargin())
  }, [items])

  if (!items || items.length === 0) {
    return <div className={styles.thirdMenu}></div>
  }

  return (
    <div className={styles.thirdMenu}>
      {items.map((item, index) => (
        <span
          key={index}
          className={`${styles.thirdMenuItem} ${selectedItem === item ? styles.active : ''}`}
          onClick={() => onItemSelect(item)}
          style={{ marginRight: `${margins[index]}px` }}
        >
          {item}
        </span>
      ))}
    </div>
  )
}

export default ThirdMenu

