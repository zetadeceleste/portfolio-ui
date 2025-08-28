import styles from './MenuList.module.css'

import FlexWrapper from '@/components/FlexWrapper'
import { PAGE_INFO_LIST } from '@/constants/pageInfo'
import { useScrollToSection } from '@/hooks/useScrollToSection'
import ThemeSwitch from '@/layouts/ThemeSwitch'

interface Props {
  onClick: () => void
  menuVisible: boolean
}

const MenuList = ({ onClick, menuVisible }: Props) => {
  const { scrollToSection } = useScrollToSection()

  return (
    <nav
      className={`${styles.menu} ${menuVisible ? styles.show : styles.hide}`}
    >
      <ul className={styles.list}>
        {Object.values(PAGE_INFO_LIST).map(
          ({ sectionId, text, hideOnMenu }, index) => {
            if (hideOnMenu || !sectionId) return null

            const handleMenuClick = () => {
              scrollToSection(sectionId)
              onClick() // Close menu after navigation
            }

            return (
              <li className={styles.item} key={index}>
                <button
                  className={`variant ${styles['menu-button']}`}
                  onClick={handleMenuClick}
                  aria-label={`Navigate to ${text} section and close menu`}
                >
                  <span className="number">0{index + 1}</span>
                  <p className="big-text">{text}</p>
                </button>
              </li>
            )
          },
        )}
      </ul>
      <FlexWrapper className={styles.wrapper}>
        <ThemeSwitch showText variant />
      </FlexWrapper>
    </nav>
  )
}

export default MenuList
