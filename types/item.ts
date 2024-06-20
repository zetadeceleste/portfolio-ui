import { IconType } from './icon'

export type ItemType = {
  text: string
  id?: string
  link?: string
  label?: string
  iconName?: IconType
  variant?: boolean
  copy?: boolean
}
