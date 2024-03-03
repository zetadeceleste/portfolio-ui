import MailIcon from '../../../public/images/icons/email.svg'

import { IconName } from '@/types'

interface Props {
  name: IconName
}

const getIcon = (iconName: IconName) => {
  switch (iconName) {
    case 'github':
      return <MailIcon />
    case 'mail':
      return <MailIcon />
    case 'linkedin':
      return <MailIcon />
    default:
      return null
  }
}

const Icon = ({ name }: Props) => getIcon(name)

export default Icon
