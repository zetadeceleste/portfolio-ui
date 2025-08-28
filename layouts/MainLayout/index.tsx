// import { usePathname } from 'next/navigation'

import Header from '../Header'

import styles from './MainLayout.module.css'

import { useTheme } from '@/context/ThemeContext'
import Footer from '@/layouts/Footer'
import Menu from '@/layouts/Menu'
import SiteUnderConstructionPage from '@/pages/site-under-construction'

interface Props {
  isUnderConstruction?: boolean
  children: React.ReactNode
  isHome?: boolean
}

const MainLayout = ({
  children,
  isUnderConstruction = false,
  isHome = false,
}: Props) => {
  const { theme } = useTheme()

  if (isUnderConstruction) return <SiteUnderConstructionPage />

  return (
    <main className={`${styles.layout} ${theme} ${isHome ? styles.hero : ''}`}>
      <Header isHome={isHome} />
      <Menu />
      {children}
      <Footer />
    </main>
  )
}

export default MainLayout
