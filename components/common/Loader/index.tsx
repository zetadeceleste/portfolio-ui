import styles from './Loader.module.css'

interface Props {
  variant?: boolean
}

const Loader = ({ variant = false }: Props) => (
  <svg
    className={styles.spinner}
    viewBox="0 0 50 50"
    height="100%"
    width="100%"
    aria-hidden="true"
  >
    <circle
      className={`${styles.path} ${variant ? styles.variant : ''}`}
      cx="25"
      cy="25"
      r="20"
      fill="none"
      strokeWidth="5"
    ></circle>
  </svg>
)

export default Loader
