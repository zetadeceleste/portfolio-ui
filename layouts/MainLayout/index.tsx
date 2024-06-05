import { usePathname } from 'next/navigation'

import Header from '../Header'

import styles from './MainLayout.module.css'

import { PAGE_INFO_LIST } from '@/constants/pageInfo'
import { useTheme } from '@/context/ThemeContext'
import Footer from '@/layouts/Footer'
import Menu from '@/layouts/Menu'
import SiteUnderConstructionPage from '@/pages/site-under-construction'

interface Props {
  isUnderConstruction?: boolean
  children: React.ReactNode
}

const MainLayout = ({ children, isUnderConstruction = false }: Props) => {
  const pathname = usePathname()
  const isHome = pathname === PAGE_INFO_LIST.HOME.path
  const { theme } = useTheme()

  if (isUnderConstruction) return <SiteUnderConstructionPage />

  return (
    <main className={`${styles.layout} ${isHome ? styles.home : ''} ${theme}`}>
      <Header isHome={isHome} />
      <Menu />
      {children}
      {!isHome && <Footer />}
    </main>
  )
}

export default MainLayout
