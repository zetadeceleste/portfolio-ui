import styles from './Container.module.css'

import { useTheme } from '@/context/ThemeContext'
import { buildBooleanClassNameList } from '@/utils/styles'

interface Props {
  full?: boolean
  scroll?: boolean
  className?: string
  children: React.ReactNode
  id?: string
}

const Container = ({
  full = false,
  scroll = false,
  className = '',
  children,
  id,
}: Props) => {
  const { variant } = useTheme()

  const classNameList = buildBooleanClassNameList(styles, {
    variant,
    scroll,
  })

  return (
    <section id={id} className={`${styles.container} ${classNameList}`}>
      <div
        className={`${styles['grid-wrapper']} ${full ? styles.full : ''} ${className}`}
      >
        {children}
      </div>
    </section>
  )
}

export default Container
