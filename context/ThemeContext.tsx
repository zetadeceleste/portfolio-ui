import { usePathname } from 'next/navigation'
import React, { createContext, useContext, useState, useEffect } from 'react'

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

    // Set initial theme based on existing class (applied by script in _document)
    const initialTheme = document.documentElement.classList.contains(
      'dark-theme',
    )
      ? Theme.DARK_THEME
      : Theme.MAIN_THEME
    setTheme(initialTheme)

    // Update theme if preference changes
    const handleChange = (e: MediaQueryListEvent) => {
      const newTheme = e.matches ? Theme.DARK_THEME : Theme.MAIN_THEME
      setTheme(newTheme)
      if (e.matches) {
        document.documentElement.classList.add('dark-theme')
        document.documentElement.classList.remove('main-theme')
      } else {
        document.documentElement.classList.add('main-theme')
        document.documentElement.classList.remove('dark-theme')
      }
    }

    prefersDarkScheme.addEventListener('change', handleChange)
    return () => {
      prefersDarkScheme.removeEventListener('change', handleChange)
    }
  }, [])

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme =
        prevTheme === Theme.MAIN_THEME ? Theme.DARK_THEME : Theme.MAIN_THEME
      if (newTheme === Theme.DARK_THEME) {
        document.documentElement.classList.add('dark-theme')
        document.documentElement.classList.remove('main-theme')
      } else {
        document.documentElement.classList.add('main-theme')
        document.documentElement.classList.remove('dark-theme')
      }
      return newTheme
    })
  }

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
