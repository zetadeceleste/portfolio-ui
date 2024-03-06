import FlexWrapper from '../FlexWrapper'
import Icon from '../Icon'

import styles from './List.module.css'

import { IconName } from '@/types'

interface Props {
  data: string[]
  title?: string
  iconName?: IconName
}

const List = ({ data, title, iconName = 'start-black' }: Props) => (
  <FlexWrapper>
    {title && <span className="bold">{title}</span>}
    <ul className={styles.list}>
      {data.map((text, index) => (
        <li className={styles.item} key={index}>
          <Icon name={iconName} />
          {text}
        </li>
      ))}
    </ul>
  </FlexWrapper>
)

export default List
