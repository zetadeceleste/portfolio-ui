import { useState } from 'react'

import MenuIcon from './MenuIcon'
import MenuList from './MenuList'

interface Props {
  className?: string
}

const Menu = ({ className }: Props) => {
  const [menuVisible, setMenuVisible] = useState(false)

  const toggleMenuVisible = () => {
    setMenuVisible(!menuVisible)
  }

  return (
    <nav className={className}>
      <MenuList onClick={toggleMenuVisible} menuVisible={menuVisible} />
      <MenuIcon onClick={toggleMenuVisible} menuVisible={menuVisible} />
    </nav>
  )
}

export default Menu
