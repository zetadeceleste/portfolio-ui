import Link from 'next/link'
import { useRouter } from 'next/router'
import { Dispatch, SetStateAction, MouseEvent, useState } from 'react'

import styles from './MenuList.module.css'

import { pages } from '@/constants/pages'
import { WEBSITE_PAGES } from '@/constants/websitePages'

interface Props {
  setLoading: Dispatch<SetStateAction<boolean>>
  menuVisible: boolean
}

const MenuList = ({ setLoading, menuVisible = false }: Props) => {
  const [menuAnimation, setMenuAnimation] = useState(false)
  const router = useRouter()
  const { pathname } = router
  const variant = pathname === pages.WORK_EXPERIENCE

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault()

    setLoading(true)

    router.push(path)

    router.events.on('routeChangeComplete', () => {
      setMenuAnimation(false)
      setLoading(false)
    })
  }
  return (
    <>
      {menuVisible && (
        <div
          className={`${styles.menu} ${menuAnimation ? styles.show : styles.hide} ${variant ? styles.variant : ''}`}
        >
          <ul className={styles.list}>
            {WEBSITE_PAGES.map(({ text, link }, index) => (
              <ol className={styles.item} key={index}>
                <Link href={link} passHref legacyBehavior>
                  <a
                    className={`${variant ? '' : 'variant'}`}
                    onClick={(e) => handleLinkClick(e, link)}
                  >
                    <span className="number">0{index + 1}</span>
                    <p className="big-text">{text}</p>
                  </a>
                </Link>
              </ol>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

export default MenuList
