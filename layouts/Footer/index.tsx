import { useRouter } from 'next/router'

import FlexWrapper from '../../components/common/FlexWrapper'

import styles from './Footer.module.css'

import { pages } from '@/constants/pages'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const router = useRouter()
  const { pathname } = router
  const variant = pathname === pages.WORK_EXPERIENCE

  if (pathname === pages.HOME) return null

  return (
    <footer className={`${styles.footer} ${variant ? styles.variant : ''}`}>
      <div className={styles.wrapper}>
        <FlexWrapper>
          <p>Website handcrafted with 🤘😎.</p>
          <p>Marvelous illustration and icons made by Luz Zapata.</p>
        </FlexWrapper>
        <small>
          <em>Copyright © {currentYear} chikilabs. All rights reserved.</em>
        </small>
      </div>
    </footer>
  )
}

export default Footer
