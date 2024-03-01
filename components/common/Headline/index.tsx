import styles from './Headline.module.css'

interface Props {
  title: JSX.Element
  center?: boolean
  underline?: boolean
  subtitle?: string
}

const Headline = ({
  title,
  center = false,
  underline = false,
  subtitle = '',
}: Props) => {
  return (
    <hgroup
      className={`${styles.wrapper} ${center ? styles.center : ''} ${underline ? styles.underline : ''}`}
    >
      <h1 className={styles.title}>{title}</h1>
      {subtitle && <h3>{subtitle}</h3>}
    </hgroup>
  )
}

export default Headline
