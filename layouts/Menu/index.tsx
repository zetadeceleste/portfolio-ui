import { useState } from 'react'

import MenuIcon from './MenuIcon'
import MenuList from './MenuList'

const Menu = () => {
  const [menuVisible, setMenuVisible] = useState(false)

  const toggleMenuVisible = () => {
    setMenuVisible(!menuVisible)
  }

  return (
    <nav>
      <MenuList onClick={toggleMenuVisible} menuVisible={menuVisible} />
      <MenuIcon onClick={toggleMenuVisible} menuVisible={menuVisible} />
    </nav>
  )
}

export default Menu
