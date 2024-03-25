import EmailIcon from '../../../public/images/icons/email.svg'
import GithubIcon from '../../../public/images/icons/github.svg'
import LinkedinIcon from '../../../public/images/icons/linkedin.svg'
import StarIcon from '../../../public/images/icons/star.svg'
import FlexWrapper from '../FlexWrapper'

import { IconName } from '@/types'

interface Props {
  name: IconName
  variant?: boolean
}

const getIcon = (iconName: IconName, variant?: boolean) => {
  switch (iconName) {
    case 'email':
      return variant ? <EmailIcon /> : <EmailIcon />
    case 'github':
      return variant ? <GithubIcon /> : <GithubIcon />
    case 'linkedin':
      return variant ? <LinkedinIcon /> : <LinkedinIcon />
    case 'star':
      return variant ? <StarIcon /> : <StarIcon />
    default:
      return null
  }
}

const Icon = ({ name, variant }: Props) => (
  <FlexWrapper>{getIcon(name, variant)}</FlexWrapper>
)

export default Icon
