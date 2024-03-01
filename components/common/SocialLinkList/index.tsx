import SocialLinkItem from './SocialLinkItem'
import styles from './SocialLinkList.module.css'

import { SOCIAL_LINKS_DATA } from '@/constants/data'

const SocialLinkList = () => (
  <ul className={styles.wrapper}>
    {SOCIAL_LINKS_DATA.map(({ link, icon, text }, index) => (
      <SocialLinkItem key={index} link={link} icon={icon} text={text} />
    ))}
  </ul>
)

export default SocialLinkList
