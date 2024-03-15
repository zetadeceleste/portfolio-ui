import { useState } from 'react'

import MenuIcon from './MenuIcon'
import MenuList from './MenuList'

const Menu = () => {
  const [showList, setShowList] = useState(false)
  const [loading, setLoading] = useState(false)

  return (
    <nav>
      <MenuList
        showList={showList}
        setShowList={setShowList}
        setLoading={setLoading}
      />
      <MenuIcon
        showList={showList}
        setShowList={setShowList}
        loading={loading}
      />
    </nav>
  )
}

export default Menu
