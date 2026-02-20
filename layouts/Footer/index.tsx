import getConfig from 'next/config'
import Link from 'next/link'

import FlexWrapper from '../../components/FlexWrapper'

import styles from './Footer.module.css'

import { useTheme } from '@/context/ThemeContext'

const { publicRuntimeConfig } = getConfig()

const Footer = () => {
  const { variant } = useTheme()
  const currentYear = new Date().getFullYear()

  return (
    <footer className={`${styles.footer} ${variant ? styles.variant : ''}`}>
      <FlexWrapper className={styles.wrapper}>
        <FlexWrapper>
          <p>Website handcrafted with ❤️ and maintained with a 🤖 colleague.</p>
          <p>
            Marvelous illustration and icons made by{' '}
            <Link href="https://www.behance.net/luzzapata2" target="_blank">
              Luz Zapata
            </Link>
            .
          </p>
        </FlexWrapper>
        <FlexWrapper
          flexDirection="column-to-row"
          justifyContent="space-between"
        >
          <small>
            Copyright © {currentYear} File City Creations. All rights reserved.
          </small>
          <small>v{publicRuntimeConfig.version}</small>
        </FlexWrapper>
      </FlexWrapper>
    </footer>
  )
}

export default Footer
