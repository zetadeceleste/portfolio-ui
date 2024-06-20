import { usePathname } from 'next/navigation'
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react'

import { PAGE_INFO_LIST } from '@/constants/pageInfo'
import { Theme, ThemeType } from '@/types'

interface ThemeContextProps {
  variant: boolean
  theme: ThemeType
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)

interface ThemeProviderProps {
  children: React.ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [variant, setVariant] = useState(false)
  const [theme, setTheme] = useState<ThemeType>(Theme.MAIN_THEME)
  const pathname = usePathname()

  useEffect(() => {
    setVariant(pathname === PAGE_INFO_LIST.WORK_EXPERIENCE.path)
  }, [pathname])

  useEffect(() => {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)')

    // Set initial theme based on user preference
    setTheme(prefersDarkScheme.matches ? Theme.DARK_THEME : Theme.MAIN_THEME)

    // Update theme if preference changes
    const handleChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? Theme.DARK_THEME : Theme.MAIN_THEME)
    }

    prefersDarkScheme.addEventListener('change', handleChange)
    return () => {
      prefersDarkScheme.removeEventListener('change', handleChange)
    }
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) =>
      prevTheme === Theme.MAIN_THEME ? Theme.DARK_THEME : Theme.MAIN_THEME,
    )
  }, [])

  return (
    <ThemeContext.Provider value={{ variant, theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
