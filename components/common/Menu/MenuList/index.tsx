import Link from 'next/link'
import { useRouter } from 'next/router'
import { Dispatch, SetStateAction, MouseEvent } from 'react'

import styles from './MenuList.module.css'

interface Props {
  showList: boolean
  setShowList: Dispatch<SetStateAction<boolean>>
  setLoading: Dispatch<SetStateAction<boolean>>
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

const MenuList = ({ showList, setShowList, setLoading }: Props) => {
  const router = useRouter()

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault()
    setLoading(true)
    router.push(path)
    router.events.on('routeChangeComplete', () => {
      setShowList(false)
      setLoading(false)
    })
  }

  if (showList === false) return null

  return (
    <div className={styles.menu}>
      <ul className={styles.list}>
        {WEBSITE_PAGES.map(({ text, link }, index) => (
          <ol key={index}>
            <Link href={link} passHref legacyBehavior>
              <a
                className={styles.item}
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
