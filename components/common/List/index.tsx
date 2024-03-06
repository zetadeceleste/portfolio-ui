import FlexWrapper from '../FlexWrapper'
import Icon from '../Icon'

import styles from './List.module.css'

import { IconName } from '@/types'

interface Props {
  data: Item[]
  title?: string
  iconName?: IconName
}

type Item = {
  text: string
  label?: string
}

const List = ({ data, title, iconName = 'start-black' }: Props) => (
  <FlexWrapper>
    {title && <span className="bold">{title}</span>}
    <ul className={styles.list}>
      {data.map(({ text, label }, index) => (
        <li className={styles.item} key={index}>
          <Icon name={iconName} />
          <p className={styles.text}>{text}</p>
          <span>{label}</span>
        </li>
      ))}
    </ul>
  </FlexWrapper>
)

export default List
