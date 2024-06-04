import { useTheme } from '../../context/ThemeContext'
import FlexWrapper from '../FlexWrapper'

import styles from './ThemeSwitch.module.css'

import { Theme } from '@/types'

interface Props {
  showText?: boolean
  variant?: boolean
}

const ThemeSwitch = ({ showText, variant }: Props) => {
  const { theme, toggleTheme } = useTheme()

  const handleToggle = () => {
    toggleTheme()
  }

  return (
    <FlexWrapper
      className={styles.wrapper}
      flexDirection="row"
      alignItems="center"
    >
      {showText && (
        <small className={`${styles.text} ${variant ? 'variant' : ''}`}>
          Dark Mode
        </small>
      )}
      <input
        type="checkbox"
        id="switch"
        checked={theme === Theme.DARK_THEME}
        onChange={handleToggle}
      />
      <label className={styles.label} htmlFor="switch" />
    </FlexWrapper>
  )
}

export default ThemeSwitch
