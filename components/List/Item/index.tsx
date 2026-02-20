import { memo } from 'react'

import FlexWrapper from '../../FlexWrapper'
import Icon from '../../Icon'

import { ItemType } from '@/types'

const ItemInner = ({ text, label, iconName = 'star' }: ItemType) => (
  <FlexWrapper flexDirection="row" alignItems="center" gap="extra-small">
    <Icon name={iconName} />
    <FlexWrapper flexDirection="column-to-row" alignItems="start-to-end">
      <p>{text}</p>
      {label && <span>{label}</span>}
    </FlexWrapper>
  </FlexWrapper>
)

const Item = memo(ItemInner)

export default Item
