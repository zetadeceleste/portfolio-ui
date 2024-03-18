import { Dispatch, SetStateAction } from 'react'

import FlexWrapper from '../../FlexWrapper'
import Loader from '../../Loader'

import HamburgerIcon from './HamburgerIcon'
import styles from './MenuIcon.module.css'

interface Props {
  setMenuVisible: Dispatch<SetStateAction<boolean>>
  menuVisible: boolean
  loading: boolean
}

const MenuIcon = ({ setMenuVisible, menuVisible, loading }: Props) => {
  const toggleClass = () => {
    setMenuVisible(!menuVisible)
  }

  return (
    <FlexWrapper
      className={styles.wrapper}
      alignItems="center"
      justifyContent="center"
    >
      <button
        className={`${styles.button} ${loading ? styles.disabled : ''}`}
        onClick={toggleClass}
        disabled={loading}
        aria-controls="menu"
        aria-expanded={menuVisible ? 'true' : 'false'}
        aria-label="Toggle menu"
      >
        {loading ? <Loader variant /> : <HamburgerIcon active={menuVisible} />}
      </button>
    </FlexWrapper>
  )
}

export default MenuIcon
