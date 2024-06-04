import { useState, useEffect } from 'react'

import HamburgerIcon from './HamburgerIcon'
import styles from './MenuIcon.module.css'

interface Props {
  onClick: () => void
  menuVisible: boolean
}

const MenuIcon = ({ onClick, menuVisible }: Props) => {
  const [showIcon, setShowIcon] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIcon(true)
    }, 250)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`${styles['menu-icon']} ${showIcon ? styles.show : ''}`}>
      <button
        className={styles.button}
        onClick={onClick}
        aria-controls="menu"
        aria-expanded={menuVisible ? 'true' : 'false'}
        aria-label="Toggle menu"
      >
        <HamburgerIcon active={menuVisible} />
      </button>
    </div>
  )
}

export default MenuIcon
