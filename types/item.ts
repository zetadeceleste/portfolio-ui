import { IconName } from './icon'

export type ItemType = {
  text: string
  link?: string
  label?: string
  iconName?: IconName
  variant?: boolean
  copy?: boolean
}
