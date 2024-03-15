import { Dispatch, SetStateAction } from 'react'

import FlexWrapper from '../../FlexWrapper'
import Loader from '../../Loader'

import HamburgerIcon from './HamburgerIcon'
import styles from './MenuIcon.module.css'

interface Props {
  setShowList: Dispatch<SetStateAction<boolean>>
  showList: boolean
  loading: boolean
}

const MenuIcon = ({ setShowList, showList, loading }: Props) => {
  const toggleClass = () => {
    setShowList(!showList)
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
        aria-expanded={showList ? 'true' : 'false'}
        aria-label="Toggle menu"
      >
        {loading ? <Loader /> : <HamburgerIcon active={showList} />}
      </button>
    </FlexWrapper>
  )
}

export default MenuIcon
