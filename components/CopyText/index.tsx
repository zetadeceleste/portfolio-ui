import { useState } from 'react'

import styles from './CopyText.module.css'

import Tooltip from '@/components/Tooltip'

interface Props {
  textToCopy: string
  children: React.ReactNode
}

const CopyText = ({ textToCopy, children }: Props) => {
  const [tooltipText, setTooltipText] = useState('Click to copy')

  const handleCopy = () => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setTooltipText('Copied!')
        setTimeout(() => {
          setTooltipText('Click to copy')
        }, 2000)
      })
      .catch((error) => {
        console.error('Failed to copy text: ', error)
        setTooltipText('Failed to copy :(')
        setTimeout(() => {
          setTooltipText('Click to copy')
        }, 2000)
      })
  }

  return (
    <Tooltip text={tooltipText}>
      <div onClick={handleCopy} className={styles.wrapper}>
        {children}
      </div>
    </Tooltip>
  )
}

export default CopyText
