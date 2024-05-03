import GithubIcon from '../../../public/images/icons/github.svg'
import LinkedinIcon from '../../../public/images/icons/linkedin.svg'
import MailIcon from '../../../public/images/icons/mail.svg'
import StarIcon from '../../../public/images/icons/star.svg'
import FlexWrapper from '../FlexWrapper'

import { IconName } from '@/types'

interface Props {
  name: IconName
}

const getIcon = (iconName: IconName) => {
  switch (iconName) {
    case 'mail':
      return <MailIcon />
    case 'github':
      return <GithubIcon />
    case 'linkedin':
      return <LinkedinIcon />
    case 'star':
      return <StarIcon />
    default:
      return null
  }
}

const Icon = ({ name }: Props) => <FlexWrapper>{getIcon(name)}</FlexWrapper>

export default Icon
