import styles from './Container.module.css'

interface Props {
  variant?: boolean
  full?: boolean
  className?: string
  children: React.ReactNode
}

const Container = ({
  variant = false,
  full = false,
  className = '',
  children,
}: Props) => (
  <section className={`${styles.container} ${variant ? styles.variant : ''}`}>
    <div
      className={`${className} ${styles.wrapper} ${full ? styles.full : ''}`}
    >
      {children}
    </div>
  </section>
)

export default Container
