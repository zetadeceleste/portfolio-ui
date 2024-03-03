import CrossIcon from '../../../public/images/icons/cross.svg'

import { IconName } from '@/types'

interface Props {
  name: IconName
}

const getIcon = (iconName: IconName) => {
  switch (iconName) {
    case 'github':
      return <CrossIcon />
    case 'mail':
      return <CrossIcon />
    case 'linkedin':
      return <CrossIcon />
    default:
      return null
  }
}

const Icon = ({ name }: Props) => getIcon(name)

export default Icon
