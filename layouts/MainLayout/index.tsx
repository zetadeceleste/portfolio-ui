import { usePathname } from 'next/navigation'

import Header from '../Header'

import styles from './MainLayout.module.css'

import { pagesPath } from '@/constants/pages'
import Footer from '@/layouts/Footer'
import Menu from '@/layouts/Menu'
import SiteUnderConstructionPage from '@/pages/site-under-construction'

interface Props {
  children: React.ReactNode
  isUnderConstruction?: boolean
}

const MainLayout = ({ children, isUnderConstruction = false }: Props) => {
  const pathname = usePathname()
  const isHome = pathname === pagesPath.HOME

  if (isUnderConstruction) return <SiteUnderConstructionPage />

  // TODO: Context will be here for variant style, also for light / dark mode
  return (
    <main className={`${styles.layout} ${isHome ? styles.home : ''}`}>
      <Header isHome={isHome} />
      <Menu />
      {children}
      {!isHome && <Footer />}
    </main>
  )
}

export default MainLayout
