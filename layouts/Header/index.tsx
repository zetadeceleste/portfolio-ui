import Link from 'next/link'
import router from 'next/router'
import { useEffect, useState } from 'react'

import styles from './Header.module.css'

import FlexWrapper from '@/components/common/FlexWrapper'
import Icon from '@/components/common/Icon'
import { pages } from '@/constants/pages'
import { WEBSITE_PAGES } from '@/constants/websitePages'
import { buildBooleanClassNameList } from '@/utils/styles'

const Header = () => {
  const [showHeader, setShowHeader] = useState(false)
  const { pathname } = router
  const isHome = pathname === pages.HOME
  const variant = pathname === pages.WORK_EXPERIENCE

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHeader(true)
    }, 250)

    return () => clearTimeout(timer)
  }, [])

  const classNameListHeader = buildBooleanClassNameList(styles, {
    home: isHome,
    variant,
  })

  return (
    <nav className={`${styles.header} ${classNameListHeader}`}>
      <FlexWrapper
        flexDirection="row"
        justifyContent="space-between"
        className={`${styles.wrapper} ${showHeader ? styles.show : ''}`}
      >
        {!isHome && (
          <Link href={pages.HOME} passHref>
            <Icon name="logo" variant={variant} />
          </Link>
        )}
        <ul className={styles.list}>
          {WEBSITE_PAGES.map(({ text, link, optional }, index) => {
            const isActive = pathname === link

            const classNameListItem = buildBooleanClassNameList(styles, {
              active: isActive,
              variant,
            })

            if (optional) return null

            return (
              <li className={`${styles.item} ${classNameListItem}`} key={index}>
                <Link href={link} passHref>
                  <p className={`bold ${styles.text}`}>{text}</p>
                </Link>
              </li>
            )
          })}
        </ul>
      </FlexWrapper>
    </nav>
  )
}

export default Header
