import Link from 'next/link'

import FlexWrapper from '../FlexWrapper'

import Item from './Item'
import styles from './List.module.css'

import { ItemType } from '@/types/item'
import { buildBooleanClassNameList } from '@/utils/styles'

interface Props {
  data: ItemType[]
  title?: string
  variant?: boolean
  rounded?: boolean
  divided?: boolean
}

const List = ({
  data,
  title,
  variant = false,
  rounded = false,
  divided = false,
}: Props) => {
  const classNameList = buildBooleanClassNameList(styles, {
    divided,
    rounded,
  })

  return (
    <FlexWrapper gap="small">
      {title && <h3>{title}</h3>}
      <ul className={`${styles.list} ${classNameList}`}>
        {data.map(
          ({ text, link, label, iconName, isDownloadable = false }, index) => (
            <li className={styles.item} key={index}>
              {link ? (
                <Link
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  download={isDownloadable}
                >
                  <Item text={text} iconName={iconName} variant={variant} />
                </Link>
              ) : (
                <Item
                  text={text}
                  label={label}
                  iconName={iconName}
                  variant={variant}
                />
              )}
            </li>
          ),
        )}
      </ul>
    </FlexWrapper>
  )
}

export default List
