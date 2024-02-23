import styles from './Headline.module.css'

interface Props {
  title: string
  subtitle?: string
  truncate?: boolean
}

const Headline = ({ title, subtitle = '', truncate = false }: Props) => {
  return (
    <hgroup>
      <h1 className={truncate ? styles.truncate : ''}>{title}</h1>
      {subtitle && <h3>{subtitle}</h3>}
    </hgroup>
  )
}

export default Headline
