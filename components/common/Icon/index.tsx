import Image from 'next/image'

import { ICON_DESCRIPTION_LIST } from '@/constants/iconDescriptionList'
import { IconName } from '@/types'

interface Props {
  name: IconName
}

const Icon = ({ name }: Props) => {
  const description = ICON_DESCRIPTION_LIST[name]

  return (
    <Image
      src={`/images/icons/${name}.svg`}
      width={32}
      height={32}
      alt={description}
    />
  )
}

export default Icon
