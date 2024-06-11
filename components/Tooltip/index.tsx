import React, { useState } from 'react'

import styles from './Tooltip.module.css'

interface Prop {
  text: string
  children: React.ReactNode
}

const Tooltip = ({ children, text = '' }: Prop) => {
  const [showTooltip, setShowTooltip] = useState(false)

  const handleMouseEnter = () => {
    setShowTooltip(true)
  }

  const handleMouseLeave = () => {
    setShowTooltip(false)
  }

  return (
    <span
      className={styles.wrapper}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {showTooltip && <span className={styles.tooltip}>{text}</span>}
    </span>
  )
}

export default Tooltip
