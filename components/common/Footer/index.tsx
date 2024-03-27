import { useRouter } from 'next/router'

import styles from './Footer.module.css'

import { pages } from '@/constants/pages'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const router = useRouter()
  const { pathname } = router
  const variant = pathname === pages.WORK_EXPERIENCE

  if (pathname === pages.HOME) return null

  return (
    <footer className={`${styles.wrapper} ${variant ? styles.variant : ''}`}>
      <p>Website handcrafted with 🤘😎.</p>
      <p>Marvelous illustration and icons made by Luz Zapata.</p>
      <small>
        <em>Copyright © {currentYear} chikilabs. All rights reserved.</em>
      </small>
    </footer>
  )
}

export default Footer
