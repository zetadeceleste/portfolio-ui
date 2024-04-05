import Link from 'next/link'

import FlexWrapper from '../FlexWrapper'

import Item from './Item'
import styles from './List.module.css'

import { ItemType } from '@/types/item'
import { buildBooleanClassNameList } from '@/utils/styles'

interface Props {
  data: ItemType[]
  title?: string
  rounded?: boolean
  divided?: boolean
}

const List = ({ data, title, rounded = false, divided = false }: Props) => {
  const classNameList = buildBooleanClassNameList(styles, {
    divided,
    rounded,
  })

  return (
    <FlexWrapper gap="medium">
      {title && <h3>{title}</h3>}
      <ul className={`${styles.list} ${classNameList}`}>
        {data.map(({ text, link, label, iconName }, index) => (
          <li className={styles.item} key={index}>
            {link ? (
              <Link href={link} target="_blank" rel="noopener noreferrer">
                <Item text={text} iconName={iconName} />
              </Link>
            ) : (
              <Item text={text} label={label} iconName={iconName} />
            )}
          </li>
        ))}
      </ul>
    </FlexWrapper>
  )
}

export default List
