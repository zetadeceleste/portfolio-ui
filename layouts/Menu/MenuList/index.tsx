import getConfig from 'next/config'
import Link from 'next/link'

import styles from './MenuList.module.css'

import { WEBSITE_PAGES } from '@/constants/websitePages'

const { publicRuntimeConfig } = getConfig()

interface Props {
  onClick: () => void
  menuVisible: boolean
}

const MenuList = ({ onClick, menuVisible }: Props) => (
  <div className={`${styles.menu} ${menuVisible ? styles.show : styles.hide}`}>
    <ul className={styles.list}>
      {WEBSITE_PAGES.map(({ textTag, link }, index) => (
        <li className={styles.item} key={index}>
          <Link href={link} passHref legacyBehavior>
            <a className="variant" onClick={onClick}>
              <span className="number">0{index + 1}</span>
              <p className="big-text">{textTag}</p>
            </a>
          </Link>
        </li>
      ))}
    </ul>
    <small className={styles.version}>v{publicRuntimeConfig.version}</small>
  </div>
)

export default MenuList
