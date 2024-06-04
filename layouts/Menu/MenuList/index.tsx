import Link from 'next/link'

import styles from './MenuList.module.css'

import { PAGE_INFO_LIST } from '@/constants/pageInfoList'

interface Props {
  onClick: () => void
  menuVisible: boolean
}

const MenuList = ({ onClick, menuVisible }: Props) => (
  <nav className={`${styles.menu} ${menuVisible ? styles.show : styles.hide}`}>
    <ul className={styles.list}>
      {Object.values(PAGE_INFO_LIST).map(
        ({ path, text, hideOnMenu }, index) => {
          if (hideOnMenu) return null

          return (
            <li className={styles.item} key={index}>
              <Link href={path} passHref legacyBehavior>
                <a className="variant" onClick={onClick}>
                  <span className="number">0{index + 1}</span>
                  <p className="big-text">{text}</p>
                </a>
              </Link>
            </li>
          )
        },
      )}
    </ul>
  </nav>
)

export default MenuList
