import FlexWrapper from '../FlexWrapper'
import Icon from '../Icon'

import styles from './List.module.css'

interface Props {
  data: Item[]
  title?: string
  variant?: boolean
}

type Item = {
  text: string
  label?: string
}

const List = ({ data, title, variant }: Props) => (
  <FlexWrapper>
    {title && <span className="bold">{title}</span>}
    <ul className={styles.list}>
      {data.map(({ text, label }, index) => (
        <li className={styles.item} key={index}>
          <Icon name={variant ? 'start-white' : 'start-black'} />
          <p className={styles.text}>{text}</p>
          <span>{label}</span>
        </li>
      ))}
    </ul>
  </FlexWrapper>
)

export default List
