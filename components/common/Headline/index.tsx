import styles from './Headline.module.css'

interface Props {
  title: JSX.Element
  center?: boolean
  subtitle?: string
  underline?: boolean
}

const Headline = ({
  title,
  center = false,
  subtitle = '',
  underline = false,
}: Props) => {
  return (
    <hgroup
      className={`${styles.headline} ${center ? styles.center : ''} ${underline ? styles.underline : ''}`}
    >
      <h1 className={styles.title}>{title}</h1>
      {subtitle && <h3>{subtitle}</h3>}
    </hgroup>
  )
}

export default Headline
