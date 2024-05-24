import Image from 'next/image'

import { ICON_DESCRIPTION_LIST } from '@/constants/iconDescriptionList'
import { IconName } from '@/types'

interface Props {
  name: IconName
  variant?: boolean
}

const Icon = ({ name, variant }: Props) => {
  const description = ICON_DESCRIPTION_LIST[name]
  const iconName = variant ? `${name}-variant` : name

  return (
    <Image
      src={`/images/icons/${iconName}.svg`}
      width={32}
      height={32}
      alt={description}
    />
  )
}

export default Icon
