export type IconName =
  | 'github'
  | 'mail'
  | 'linkedin'
  | 'start-black'
  | 'start-white'

export interface IconProps {
  link: string
  iconName: IconName
  text: string
}
