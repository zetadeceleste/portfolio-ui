import getConfig from 'next/config'

import FlexWrapper from '../../components/FlexWrapper'

import styles from './Footer.module.css'

import { AUTHOR_ORGANIZATION, AUTHOR_USERNAME } from '@/constants/pageInfo'
import { useTheme } from '@/context/ThemeContext'

const { publicRuntimeConfig } = getConfig()

const Footer = () => {
  const { variant } = useTheme()
  const currentYear = new Date().getFullYear()

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
            {currentYear} {AUTHOR_ORGANIZATION} | @{AUTHOR_USERNAME}
          </small>
          <small>v{publicRuntimeConfig.version}</small>
        </FlexWrapper>
      </FlexWrapper>
    </footer>
  )
}

export default Footer
