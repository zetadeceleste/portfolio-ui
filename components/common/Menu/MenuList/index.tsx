import Link from 'next/link'

import styles from './MenuList.module.css'

import { WEBSITE_PAGES } from '@/constants/websitePages'

interface Props {
  onClick: () => void
  variant?: boolean
}

const MenuList = ({ onClick, variant = false }: Props) => (
  <div className={`${styles.menu} ${variant ? styles.variant : ''}`}>
    <ul className={styles.list}>
      {WEBSITE_PAGES.map(({ text, link }, index) => (
        <ol className={styles.item} key={index}>
          <Link href={link} passHref legacyBehavior>
            <a className={`${variant ? '' : 'variant'}`} onClick={onClick}>
              <span className="number">0{index + 1}</span>
              <p className="big-text">{text}</p>
            </a>
          </Link>
        </ol>
      ))}
    </ul>
  </div>
)

export default MenuList
