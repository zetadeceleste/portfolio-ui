import { useEffect, useState } from 'react'

import ThemeSwitch from '../ThemeSwitch'

import styles from './Header.module.css'

import FlexWrapper from '@/components/FlexWrapper'
import Icon from '@/components/Icon'
import { PAGE_INFO_LIST } from '@/constants/pageInfo'
import { useTheme } from '@/context/ThemeContext'
import { useScrollToSection } from '@/hooks/useScrollToSection'
import { buildBooleanClassNameList } from '@/utils/styles'

interface Props {
  isHome?: boolean
}
const Header = ({ isHome = false }: Props) => {
  const { variant } = useTheme()
  const { scrollToSection } = useScrollToSection()
  const [showHeader, setShowHeader] = useState(false)

  useEffect(() => {
    if (!isHome) {
      const timer = setTimeout(() => {
        setShowHeader(true)
      }, 200)
      return () => clearTimeout(timer)
    }

    const handleScroll = () => {
      const heroHeight = window.innerHeight
      const scrollY = window.scrollY

      // Show header when we reach the AboutSection (just after hero)
      setShowHeader(scrollY >= heroHeight - 100)
    }

    // Throttle scroll events for better performance
    let ticking = false
    const throttledScrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    // Initial check
    handleScroll()

    window.addEventListener('scroll', throttledScrollHandler, { passive: true })
    return () => window.removeEventListener('scroll', throttledScrollHandler)
  }, [isHome])

  const classNameListHeader = buildBooleanClassNameList(styles, {
    hero: isHome,
    variant,
  })

  const headerClassNames = `${styles.header} ${classNameListHeader} ${isHome && showHeader ? styles.show : ''}`

  return (
    <header className={headerClassNames}>
      <FlexWrapper
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        gap="large"
        className={`${styles.wrapper} ${showHeader ? styles.show : ''}`}
      >
        <button
          onClick={() => scrollToSection('hero')}
          aria-label="Go to Home"
          className={styles['logo-button']}
        >
          <Icon name="logo" variant={variant} />
        </button>
        <nav className={styles.navbar}>
          <ul className={styles.list}>
            {Object.values(PAGE_INFO_LIST).map(
              ({ text, sectionId, hideOnHeader }, index) => {
                const classNameListItem = buildBooleanClassNameList(styles, {
                  variant,
                })

                if (hideOnHeader || !sectionId) return null

                const handleNavClick = (e: React.MouseEvent) => {
                  e.preventDefault()
                  scrollToSection(sectionId)
                }

                return (
                  <li
                    className={`${styles.item} ${classNameListItem}`}
                    key={index}
                  >
                    <button
                      onClick={handleNavClick}
                      aria-label={`Navigate to ${text} section`}
                      className={styles['nav-button']}
                    >
                      <p className={`bold ${styles.text}`}>{text}</p>
                    </button>
                  </li>
                )
              },
            )}
          </ul>
        </nav>
        <ThemeSwitch />
      </FlexWrapper>
    </header>
  )
}

export default Header
