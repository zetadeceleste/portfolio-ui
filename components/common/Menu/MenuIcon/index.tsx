import { useState, useEffect } from 'react'

import FlexWrapper from '../../FlexWrapper'

import HamburgerIcon from './HamburgerIcon'
import styles from './MenuIcon.module.css'

interface Props {
  onClick: () => void
  active: boolean
}

const MenuIcon = ({ onClick, active }: Props) => {
  const [showIcon, setShowIcon] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIcon(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <FlexWrapper
      className={`${styles.wrapper} ${showIcon ? styles.show : ''}`}
      alignItems="center"
      justifyContent="center"
    >
      <button
        className={styles.button}
        onClick={onClick}
        aria-controls="menu"
        aria-expanded={active ? 'true' : 'false'}
        aria-label="Toggle menu"
      >
        <HamburgerIcon active={active} />
      </button>
    </FlexWrapper>
  )
}

export default MenuIcon
