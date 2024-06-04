import Link from 'next/link'

import CopyText from '../CopyText'
import FlexWrapper from '../FlexWrapper'

import Item from './Item'
import styles from './List.module.css'

import { ItemType } from '@/types'
import { buildBooleanClassNameList } from '@/utils/styles'

interface Props {
  data: ItemType[]
  title?: string
  rounded?: boolean
  divided?: boolean
}

const List = ({ data, title, rounded = false, divided = false }: Props) => {
  const classNameList = buildBooleanClassNameList(styles, {
    rounded,
    divided,
  })

  const renderListItem = (item: ItemType) => {
    const itemContent = (
      <Item text={item.text} label={item.label} iconName={item.iconName} />
    )

    if (item.link) {
      return (
        <Link
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.text}
        >
          {itemContent}
        </Link>
      )
    }

    if (item.copy) {
      return <CopyText textToCopy={item.text}>{itemContent}</CopyText>
    }

    return itemContent
  }

  return (
    <FlexWrapper gap="medium">
      {title && <h3>{title}</h3>}
      <ul className={`${styles.list} ${classNameList}`}>
        {data.map((item, index) => (
          <li className={styles.item} key={index}>
            {renderListItem(item)}
          </li>
        ))}
      </ul>
    </FlexWrapper>
  )
}

export default List
