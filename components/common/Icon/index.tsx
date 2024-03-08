import CrossIcon from '../../../public/images/icons/cross.svg'
import FlexWrapper from '../FlexWrapper'

import { IconName } from '@/types'

interface Props {
  name: IconName
  variant?: boolean
}

const getIcon = (iconName: IconName, variant?: boolean) => {
  switch (iconName) {
    case 'github':
      return variant ? <CrossIcon /> : <CrossIcon />
    case 'mail':
      return variant ? <CrossIcon /> : <CrossIcon />
    case 'linkedin':
      return variant ? <CrossIcon /> : <CrossIcon />
    case 'start':
      return variant ? <CrossIcon /> : <CrossIcon />
    default:
      return null
  }
}

const Icon = ({ name, variant }: Props) => (
  <FlexWrapper>{getIcon(name, variant)}</FlexWrapper>
)

export default Icon
