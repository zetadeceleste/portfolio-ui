import GithubIcon from '../../../public/images/icons/github.svg'
import LinkedinIcon from '../../../public/images/icons/linkedin.svg'
import LogoVariantIcon from '../../../public/images/icons/logo--variant.svg'
import LogoIcon from '../../../public/images/icons/logo.svg'
import MailIcon from '../../../public/images/icons/mail.svg'
import StarIcon from '../../../public/images/icons/star.svg'
import FlexWrapper from '../FlexWrapper'

import { IconName } from '@/types'

interface Props {
  name: IconName
  variant?: boolean
}

const getIcon = (iconName: IconName, variant: boolean) => {
  switch (iconName) {
    case 'logo':
      return variant ? <LogoVariantIcon /> : <LogoIcon />
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

const Icon = ({ name, variant = false }: Props) => (
  <FlexWrapper>{getIcon(name, variant)}</FlexWrapper>
)

export default Icon
