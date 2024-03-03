import Link from 'next/link'

import FlexWrapper from '../../FlexWrapper'
import Icon from '../../Icon'

import styles from './SocialLinkItem.module.css'

import { IconProps } from '@/types'

const SocialLinkItem = ({ link, iconName, text }: IconProps) => (
  <li className={styles.wrapper}>
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <FlexWrapper gap="extra-small">
        <Icon name={iconName} /> {text}
      </FlexWrapper>
    </Link>
  </li>
)

export default SocialLinkItem
