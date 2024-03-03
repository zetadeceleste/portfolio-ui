import styles from './Container.module.css'

interface Props {
  breakpoint?: boolean
  divided?: boolean
  children: React.ReactNode
}

const Container = ({
  breakpoint = false,
  divided = false,
  children,
}: Props) => (
  <section className={`${breakpoint ? styles.breakpoint : ''}`}>
    <div className={`${styles.container} ${divided ? styles.divided : ''}`}>
      {children}
    </div>
  </section>
)

export default Container
