import styles from './Container.module.css'

interface Props {
  children: React.ReactNode
  twoColumns?: boolean
}

const Container = ({ children, twoColumns = false }: Props) => (
  <div
    className={`${styles.container} ${twoColumns ? styles['two-columns'] : ''}`}
  >
    {children}
  </div>
)

export default Container
