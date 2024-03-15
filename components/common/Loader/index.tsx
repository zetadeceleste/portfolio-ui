import styles from './Loader.module.css'

const Loader = () => (
  <svg
    className={styles.spinner}
    viewBox="0 0 50 50"
    height="100%"
    width="100%"
    aria-hidden="true"
  >
    <circle
      className={styles.path}
      cx="25"
      cy="25"
      r="20"
      fill="none"
      strokeWidth="5"
    ></circle>
  </svg>
)

export default Loader
