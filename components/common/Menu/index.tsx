import { useState } from 'react'

import MenuIcon from './MenuIcon'
import MenuList from './MenuList'

const Menu = () => {
  const [menuVisible, setMenuVisible] = useState(false)
  const [loading, setLoading] = useState(false)

  return (
    <nav>
      <MenuList
        menuVisible={menuVisible}
        setMenuVisible={setMenuVisible}
        setLoading={setLoading}
      />
      <MenuIcon
        menuVisible={menuVisible}
        setMenuVisible={setMenuVisible}
        loading={loading}
      />
    </nav>
  )
}

export default Menu
