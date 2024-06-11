import Image from 'next/image'

import { ICON_DESCRIPTION_LIST } from '@/constants/iconDescriptionList'
import { useTheme } from '@/context/ThemeContext'
import { IconType } from '@/types'

interface Props {
  name: IconType
  variant?: boolean
}

const Icon = ({ name, variant }: Props) => {
  const description = ICON_DESCRIPTION_LIST[name]
  const { theme } = useTheme()

  return (
    <Image
      src={`/images/icons/${theme}/${name}${variant ? '-variant' : ''}.svg`}
      width={32}
      height={32}
      alt={description}
    />
  )
}

export default Icon
