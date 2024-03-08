import FlexWrapper from '../../FlexWrapper'
import Icon from '../../Icon'
import { ItemType } from '../types'

import { useWindowSize } from '@/utils/window'

const Item = ({
  text,
  label,
  iconName = 'start',
  variant = false,
}: ItemType) => {
  const { width } = useWindowSize()

  return (
    <FlexWrapper flexDirection="row" alignItems="center">
      <Icon name={iconName} variant={variant} />
      <FlexWrapper flexDirection={width <= 728 ? 'column' : 'row'}>
        <p>{text}</p>
        <span>{label}</span>
      </FlexWrapper>
    </FlexWrapper>
  )
}

export default Item
