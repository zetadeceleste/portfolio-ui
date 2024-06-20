import { useCallback } from 'react'

import FlexWrapper from '../FlexWrapper'

import styles from './Switch.module.css'

interface Props {
  checked: boolean
  onChange: () => void
  label?: string
  variant?: boolean
}

const Switch = ({ checked, onChange, label, variant }: Props) => {
  const handleToggle = useCallback(() => {
    onChange()
  }, [onChange])

  return (
    <FlexWrapper
      className={styles.wrapper}
      flexDirection="row"
      alignItems="center"
    >
      {label && (
        <small
          className={`${styles.text} ${checked ? styles.active : ''} ${variant ? 'variant' : ''}`}
        >
          {label}
        </small>
      )}
      <input
        type="checkbox"
        id="switch"
        checked={checked}
        onChange={handleToggle}
      />
      <label className={styles.label} htmlFor="switch" />
    </FlexWrapper>
  )
}

export default Switch
