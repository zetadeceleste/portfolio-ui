import styles from './Container.module.css'

import { buildBooleanClassNameList } from '@/utils/styles'

interface Props {
  variant?: boolean
  full?: boolean
  scroll?: boolean
  className?: string
  children: React.ReactNode
}

const Container = ({
  variant = false,
  full = false,
  scroll = false,
  className = '',
  children,
}: Props) => {
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
