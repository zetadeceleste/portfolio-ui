import { memo } from 'react'

import FlexWrapper from '../../FlexWrapper'
import Icon from '../../Icon'

import styles from './Item.module.css'

import { ItemType } from '@/types/item'

const ItemInner = ({ text, label, iconName = 'star' }: ItemType) => (
  <FlexWrapper flexDirection="row" alignItems="center">
    <Icon name={iconName} />
    <FlexWrapper className={styles.wrapper}>
      <p>{text}</p>
      {label && <span>{label}</span>}
    </FlexWrapper>
  </FlexWrapper>
)

const Item = memo(ItemInner)

export default Item
