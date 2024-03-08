import FlexWrapper from '../../FlexWrapper'
import Icon from '../../Icon'
import { ItemType } from '../types'

const Item = ({
  text,
  label,
  iconName = 'start',
  variant = false,
}: ItemType) => (
  <FlexWrapper flexDirection="row" alignItems="center">
    <Icon name={iconName} variant={variant} />
    <p>{text}</p>
    <span>{label}</span>
  </FlexWrapper>
)

export default Item
