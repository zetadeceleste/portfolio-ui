import CrossIcon from '../../../public/images/icons/cross.svg'

import { IconName } from '@/types'

interface Props {
  name: IconName
  variant?: boolean
}

const getIcon = (iconName: IconName, variant?: boolean) => {
  switch (iconName) {
    case 'github':
      if (variant) return <CrossIcon />
      return <CrossIcon />
    case 'mail':
      if (variant) return <CrossIcon />
      return <CrossIcon />
    case 'linkedin':
      if (variant) return <CrossIcon />
      return <CrossIcon />
    case 'start':
      if (variant) return <CrossIcon />
      return <CrossIcon />
    default:
      return null
  }
}

const Icon = ({ name, variant }: Props) => getIcon(name, variant)

export default Icon
