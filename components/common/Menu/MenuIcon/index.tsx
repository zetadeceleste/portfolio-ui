import { Dispatch, SetStateAction } from 'react'

import FlexWrapper from '../../FlexWrapper'
import Loader from '../../Loader'

import HamburgerIcon from './HamburgerIcon'
import styles from './MenuIcon.module.css'

import { buildBooleanClassNameList } from '@/utils/styles'

interface Props {
  setMenuVisible: Dispatch<SetStateAction<boolean>>
  menuVisible: boolean
  loading: boolean
  variant?: boolean
}

const MenuIcon = ({
  setMenuVisible,
  menuVisible,
  loading,
  variant = false,
}: Props) => {
  const toggleClass = () => {
    setMenuVisible(!menuVisible)
  }

  const classNameList = buildBooleanClassNameList(styles, {
    loading,
    variant,
  })

  return (
    <FlexWrapper
      className={styles.wrapper}
      alignItems="center"
      justifyContent="center"
    >
      <button
        className={`${styles.button} ${classNameList}`}
        onClick={toggleClass}
        disabled={loading}
        aria-controls="menu"
        aria-expanded={menuVisible ? 'true' : 'false'}
        aria-label="Toggle menu"
      >
        {loading ? <Loader /> : <HamburgerIcon active={menuVisible} />}
      </button>
    </FlexWrapper>
  )
}

export default MenuIcon
