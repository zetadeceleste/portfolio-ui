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
    const timer = setTimeout(() => {
      setShowHeader(true)
    }, 200)

    return () => clearTimeout(timer)
  }, [])

  const classNameListHeader = buildBooleanClassNameList(styles, {
    home: isHome,
    variant,
  })

  return (
    <header className={`${styles.header} ${classNameListHeader}`}>
      <FlexWrapper
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        gap="large"
        className={`${styles.wrapper} ${showHeader ? styles.show : ''}`}
      >
        {!isHome && (
          <Link
            href={PAGE_INFO_LIST.HOME.path}
            aria-label="Link to Home"
            passHref
          >
            <Icon name="logo" variant={variant} />
          </Link>
        )}
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
