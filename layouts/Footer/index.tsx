import getConfig from 'next/config'
import { usePathname } from 'next/navigation'

import FlexWrapper from '../../components/common/FlexWrapper'

import styles from './Footer.module.css'

import { pagesPath } from '@/constants/pages'

const { publicRuntimeConfig } = getConfig()

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const pathname = usePathname()
  const variant = pathname === pagesPath.WORK_EXPERIENCE

  return (
    <footer className={`${styles.footer} ${variant ? styles.variant : ''}`}>
      <FlexWrapper className={styles.wrapper}>
        <FlexWrapper>
          <p>Website handcrafted with 🤘😎.</p>
          <p>Marvelous illustration and icons made by Luz Zapata.</p>
        </FlexWrapper>
        <FlexWrapper
          flexDirection="column-to-row"
          justifyContent="space-between"
        >
          <small>
            Copyright © {currentYear} chikilabs. All rights reserved.
          </small>
          <small>v{publicRuntimeConfig.version}</small>
        </FlexWrapper>
      </FlexWrapper>
    </footer>
  )
}

export default Footer
