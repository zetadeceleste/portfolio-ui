import { memo } from 'react'

import FlexWrapper from '../../FlexWrapper'
import Icon from '../../Icon'

import styles from './Item.module.css'

import { ItemType } from '@/types/item'

const ItemInner = ({
  text,
  label,
  iconName = 'star',
  variant = false,
}: ItemType) => (
  <FlexWrapper flexDirection="row" alignItems="center">
    <Icon name={iconName} variant={variant} />
    <FlexWrapper className={styles.wrapper} flexDirection="col-to-row">
      <p>{text}</p>
      {label && <span>{label}</span>}
    </FlexWrapper>
  </FlexWrapper>
)

const Item = memo(ItemInner)

export default Item
