import styles from './Container.module.css'

import { useTheme } from '@/context/ThemeContext'
import { buildBooleanClassNameList } from '@/utils/styles'

interface Props {
  full?: boolean
  scroll?: boolean
  className?: string
  children: React.ReactNode
}

const Container = ({
  full = false,
  scroll = false,
  className = '',
  children,
}: Props) => {
  const { variant } = useTheme()

  const classNameList = buildBooleanClassNameList(styles, {
    variant,
    scroll,
  })

  return (
    <section className={`${styles.container} ${classNameList}`}>
      <div
        className={`${styles['grid-wrapper']} ${full ? styles.full : ''} ${className}`}
      >
        {children}
      </div>
    </section>
  )
}

export default Container
