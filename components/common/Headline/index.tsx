import React from 'react'

import styles from './Headline.module.css'

type Props = {
  title: string
  subtitle?: string
  truncate?: boolean
}

const Headline: React.FC<Props> = ({
  title,
  subtitle = '',
  truncate = false,
}) => {
  return (
    <hgroup>
      <h1 className={truncate ? styles.truncate : ''}>{title}</h1>
      {subtitle && <h2>{subtitle}</h2>}
    </hgroup>
  )
}

export default Headline
