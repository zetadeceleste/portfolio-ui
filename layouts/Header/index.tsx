import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import ThemeSwitch from '../ThemeSwitch'

import styles from './Header.module.css'

import FlexWrapper from '@/components/FlexWrapper'
import Icon from '@/components/Icon'
import { PAGE_INFO_LIST } from '@/constants/pageInfo'
import { useTheme } from '@/context/ThemeContext'
import { buildBooleanClassNameList } from '@/utils/styles'

interface Props {
  isHome?: boolean
}
const Header = ({ isHome = false }: Props) => {
  const { variant } = useTheme()
  const pathname = usePathname()
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

    // Initial check
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
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
        <Link
          href={PAGE_INFO_LIST.HERO.path}
          aria-label="Link to Home"
          passHref
        >
          <Icon name="logo" variant={variant} />
        </Link>
        <nav className={styles.navbar}>
          <ul className={styles.list}>
            {Object.values(PAGE_INFO_LIST).map(
              ({ text, path, hideOnHeader }, index) => {
                const isActive = pathname === path

                const classNameListItem = buildBooleanClassNameList(styles, {
                  active: isActive,
                  variant,
                })

                if (hideOnHeader) return null

                return (
                  <li
                    className={`${styles.item} ${classNameListItem}`}
                    key={index}
                  >
                    <Link href={path} aria-label={text} passHref>
                      <p className={`bold ${styles.text}`}>{text}</p>
                    </Link>
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
