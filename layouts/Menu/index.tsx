import { useState } from 'react'

import styles from './Menu.module.css'
import MenuIcon from './MenuIcon'
import MenuList from './MenuList'

const Menu = () => {
  const [menuVisible, setMenuVisible] = useState(false)

  const toggleMenuVisible = () => {
    setMenuVisible(!menuVisible)
  }

  return (
    <header className={styles.header}>
      <MenuIcon onClick={toggleMenuVisible} menuVisible={menuVisible} />
      <MenuList onClick={toggleMenuVisible} menuVisible={menuVisible} />
    </header>
  )
}

export default Menu
