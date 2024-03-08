import styles from './Headline.module.css'

import { buildBooleanClassNameList } from '@/utils/styles'

interface Props {
  title: JSX.Element
  bigTitles?: boolean
  center?: boolean
  highlighted?: boolean
  variant?: boolean
  subtitle?: string
}

const Headline = ({
  title,
  bigTitles = false,
  center = false,
  highlighted = false,
  variant = false,
  subtitle = '',
}: Props) => {
  const classNameList = buildBooleanClassNameList(styles, {
    bigTitles,
    center,
    highlighted,
    variant,
  })

  return (
    <hgroup className={`${styles.wrapper} ${classNameList}`}>
      <h1 className={styles.title}>{title}</h1>
      {subtitle && !highlighted && (
        <h2 className={styles.subtitle}>{subtitle}</h2>
      )}
    </hgroup>
  )
}

export default Headline
