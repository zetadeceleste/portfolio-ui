import { useRouter } from 'next/router'
import { useState } from 'react'

import MenuIcon from './MenuIcon'
import MenuList from './MenuList'

import { pages } from '@/constants/pages'

const Menu = () => {
  const [menuVisible, setMenuVisible] = useState(false)
  const router = useRouter()
  const { pathname } = router
  const variant = pathname === pages.WORK_EXPERIENCE

  const toggleMenuVisible = () => {
    setMenuVisible(!menuVisible)
  }

  return (
    <nav>
      {menuVisible && (
        <MenuList onClick={toggleMenuVisible} variant={variant} />
      )}
      <MenuIcon onClick={toggleMenuVisible} active={menuVisible} />
    </nav>
  )
}

export default Menu
