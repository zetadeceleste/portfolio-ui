import styles from './Container.module.css'

interface Props {
  variant?: boolean
  divided?: boolean
  full?: boolean
  children: React.ReactNode
}

const Container = ({
  variant = false,
  divided = false,
  full = false,
  children,
}: Props) => (
  <section className={`${styles.container} ${variant ? styles.variant : ''}`}>
    <div
      className={`${styles.wrapper} ${divided ? styles.divided : ''} ${full ? styles.full : ''}`}
    >
      {children}
    </div>
  </section>
)

export default Container
