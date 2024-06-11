import { IconType, Theme } from '@/types'

// TODO: Make this util function more generic
export const getIconVariant = (
  name: IconType,
  theme: string,
  variant: boolean,
) => {
  if (name !== 'logo') return ''

  if (theme === Theme.DARK_THEME) {
    return variant ? '-black' : '-white'
  } else if (theme === Theme.MAIN_THEME) {
    return variant ? '-white' : '-black'
  }

  return ''
}
