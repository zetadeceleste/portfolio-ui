import { useTheme } from '../../context/ThemeContext'

import Switch from '@/components/Switch'
import { Theme } from '@/types'

interface Props {
  showText?: boolean
  variant?: boolean
}

const ThemeSwitch = ({ showText = false, variant = false }: Props) => {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === Theme.DARK_THEME

  return (
    <Switch
      checked={isDark}
      onChange={toggleTheme}
      label={showText ? 'Dark Mode' : ''}
      variant={variant}
    />
  )
}

export default ThemeSwitch
