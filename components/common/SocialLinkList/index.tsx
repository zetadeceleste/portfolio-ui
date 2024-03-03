import SocialLinkItem from './SocialLinkItem'
import styles from './SocialLinkList.module.css'

import { SOCIAL_LINKS_DATA } from '@/constants/data'

const SocialLinkList = () => (
  <ul className={styles.wrapper}>
    {SOCIAL_LINKS_DATA.map(({ link, iconName, text }, index) => (
      <SocialLinkItem key={index} link={link} iconName={iconName} text={text} />
    ))}
  </ul>
)

export default SocialLinkList
