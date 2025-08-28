import styles from './Headline.module.css'

import { useTheme } from '@/context/ThemeContext'
import { useInViewport } from '@/hooks/useInViewport'
import { buildBooleanClassNameList } from '@/utils/styles'

interface Props {
  title: JSX.Element
  bigTitles?: boolean
  center?: boolean
  highlighted?: boolean
  variant?: boolean
  subtitle?: string
  animate?: boolean
}

const Headline = ({
  title,
  bigTitles = false,
  center = false,
  highlighted = false,
  subtitle = '',
  animate = false,
}: Props) => {
  const { variant } = useTheme()
  const { elementRef, isInViewport } = useInViewport({
    threshold: 0.3,
    triggerOnce: true,
  })

  const classNameList = buildBooleanClassNameList(styles, {
    center,
    highlighted,
    variant,
    animate: animate && isInViewport,
  })

  return (
    <hgroup ref={elementRef} className={`${styles.headline} ${classNameList}`}>
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
