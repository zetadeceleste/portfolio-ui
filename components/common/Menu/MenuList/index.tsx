import Link from 'next/link'
import { useRouter } from 'next/router'
import { Dispatch, SetStateAction, MouseEvent } from 'react'

import styles from './MenuList.module.css'

interface Props {
  menuVisible: boolean
  setMenuVisible: Dispatch<SetStateAction<boolean>>
  setLoading: Dispatch<SetStateAction<boolean>>
  variant?: boolean
}

const WEBSITE_PAGES = [
  { link: '/', text: <>home</> },
  {
    link: '/work-experience',
    text: (
      <>
        work <br />
        experience
      </>
    ),
  },
  { link: '/skills', text: <>skills</> },
  {
    link: '/additional-information',
    text: (
      <>
        additional <br />
        information
      </>
    ),
  },
  { link: '/contact', text: <>contact</> },
]

const MenuList = ({
  menuVisible,
  setMenuVisible,
  setLoading,
  variant = false,
}: Props) => {
  const router = useRouter()

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault()

    setLoading(true)

    router.push(path)

    router.events.on('routeChangeComplete', () => {
      setMenuVisible(false)
      setLoading(false)
    })
  }

  return (
    <div
      className={`${styles.menu} ${menuVisible ? styles.show : styles.hide} ${variant ? styles.variant : ''}`}
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
  )
}

export default MenuList
