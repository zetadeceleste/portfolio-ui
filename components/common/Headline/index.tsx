import React from 'react'

import styles from './Headline.module.css'

type Props = {
  title: string
  truncate?: boolean
}

const Headline: React.FC<Props> = ({ title, truncate = false }) => (
  <h1 className={truncate ? styles.truncate : ''}>{title}</h1>
)

export default Headline
