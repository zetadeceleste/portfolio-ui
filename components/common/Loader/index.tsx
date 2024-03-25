import FlexWrapper from '../FlexWrapper'

import styles from './Loader.module.css'

interface Props {
  variant?: boolean
}

const Loader = ({ variant = false }: Props) => (
  <FlexWrapper
    className={styles.wrapper}
    alignItems="center"
    justifyContent="center"
  >
    <svg
      className={styles.spinner}
      viewBox="0 0 50 50"
      height={32}
      width={32}
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
  </FlexWrapper>
)

export default Loader
