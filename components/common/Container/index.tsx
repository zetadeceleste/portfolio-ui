import styles from './Container.module.css'

type Props = {
  children: React.ReactNode
  row?: boolean
}

const Container: React.FC<Props> = ({ children, row = false }) => (
  <div className={`${styles.container} ${row ? styles.row : ''}`}>
    {children}
  </div>
)

export default Container
