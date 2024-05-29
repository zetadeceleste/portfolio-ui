import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import styles from './Header.module.css'

import FlexWrapper from '@/components/common/FlexWrapper'
import Icon from '@/components/common/Icon'
import { pagesPath } from '@/constants/pages'
import { WEBSITE_PAGES } from '@/constants/websitePages'
import { buildBooleanClassNameList } from '@/utils/styles'

interface Props {
  isHome?: boolean
}
const Header = ({ isHome = false }: Props) => {
  const [showHeader, setShowHeader] = useState(false)
  const pathname = usePathname()
  const variant = pathname === pagesPath.WORK_EXPERIENCE

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
        className={`${styles.wrapper} ${showHeader ? styles.show : ''}`}
      >
        {!isHome && (
          <Link href={pagesPath.HOME} aria-label="Link to Home" passHref>
            <Icon name="logo" variant={variant} />
          </Link>
        )}
        <nav className={styles.navbar}>
          <ul className={styles.list}>
            {WEBSITE_PAGES.map(({ text, link, optional }, index) => {
              const isActive = pathname === link

              const classNameListItem = buildBooleanClassNameList(styles, {
                active: isActive,
                variant,
              })

              if (optional) return null

              return (
                <li
                  className={`${styles.item} ${classNameListItem}`}
                  key={index}
                >
                  <Link href={link} aria-label={text} passHref>
                    <p className={`bold ${styles.text}`}>{text}</p>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </FlexWrapper>
    </header>
  )
}

export default Header
