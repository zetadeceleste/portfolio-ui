import styles from './Headline.module.css'

import { useTheme } from '@/context/ThemeContext'
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
  subtitle = '',
}: Props) => {
  const { variant } = useTheme()

  const classNameList = buildBooleanClassNameList(styles, {
    center,
    highlighted,
    variant,
  })

  return (
    <hgroup className={`${styles.headline} ${classNameList}`}>
      <h1 className={`${styles.title} ${bigTitles ? 'bigger' : ''}`}>
        {title}
      </h1>
      {subtitle && !highlighted && (
        <h2 className={`${styles.subtitle} ${bigTitles ? 'bigger' : ''}`}>
          {subtitle}
        </h2>
      )}
    </hgroup>
  )
}

export default Headline
