import { memo } from 'react'

import FlexWrapper from '../../FlexWrapper'
import Icon from '../../Icon'
import { ItemType } from '../types'

import styles from './Item.module.css'

const ItemInner = ({
  text,
  label,
  iconName = 'start',
  variant = false,
}: ItemType) => (
  <FlexWrapper flexDirection="row" alignItems="center">
    <Icon name={iconName} variant={variant} />
    <FlexWrapper className={styles.wrapper} flexDirection="column-to-row">
      <p>{text}</p>
      {label && <span>{label}</span>}
    </FlexWrapper>
  </FlexWrapper>
)

const Item = memo(ItemInner)

export default Item
