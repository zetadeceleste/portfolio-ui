import styles from './Headline.module.css'

import { buildBooleanClassNameList } from '@/utils/styles'

interface Props {
  title: JSX.Element
  center?: boolean
  underline?: boolean
  variant?: boolean
  subtitle?: string
}

const Headline = ({
  title,
  center = false,
  underline = false,
  variant = false,
  subtitle = '',
}: Props) => {
  const classNameList = buildBooleanClassNameList(styles, {
    center,
    underline,
    variant,
  })

  return (
    <hgroup className={`${styles.wrapper} ${classNameList}`}>
      <h1 className={styles.title}>{title}</h1>
      {subtitle && <h3>{subtitle}</h3>}
    </hgroup>
  )
}

export default Headline
