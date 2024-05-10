import Link from 'next/link'
import router from 'next/router'

import styles from './Header.module.css'

import { pages } from '@/constants/pages'
import { WEBSITE_PAGES } from '@/constants/websitePages'
import { buildBooleanClassNameList } from '@/utils/styles'

const Header = () => {
  const { pathname } = router
  const variant = pathname === pages.WORK_EXPERIENCE
  const transparent = pathname === pages.HOME

  const classNameList = buildBooleanClassNameList(styles, {
    variant,
    transparent,
  })

  return (
    <nav className={`${styles.navbar} ${classNameList}`}>
      <ul className={styles.list}>
        {WEBSITE_PAGES.map(({ text, link, optional }, index) => {
          const isActive = pathname === link

          if (optional) return null

          return (
            <li
              className={`${styles.item} ${isActive ? styles.active : ''}`}
              key={index}
            >
              <Link href={link} passHref>
                <p className={`bold ${styles.text}`}>{text}</p>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Header
