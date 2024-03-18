import { useState } from 'react'

import MenuIcon from './MenuIcon'
import MenuList from './MenuList'

interface Props {
  variant?: boolean
}

const Menu = ({ variant = false }: Props) => {
  const [menuVisible, setMenuVisible] = useState(false)
  const [loading, setLoading] = useState(false)

  return (
    <nav>
      <MenuList
        menuVisible={menuVisible}
        setMenuVisible={setMenuVisible}
        setLoading={setLoading}
        variant={variant}
      />
      <MenuIcon
        menuVisible={menuVisible}
        setMenuVisible={setMenuVisible}
        loading={loading}
        variant={variant}
      />
    </nav>
  )
}

export default Menu
