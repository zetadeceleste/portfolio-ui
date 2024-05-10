import Header from '../Header'

import Footer from '@/layouts/Footer'
import Menu from '@/layouts/Menu'
import SiteUnderConstructionPage from '@/pages/site-under-construction'
import { useWindowSize } from '@/utils/window'

interface Props {
  children: React.ReactNode
  isUnderConstruction?: boolean
}

const MainLayout = ({ children, isUnderConstruction = false }: Props) => {
  const { width } = useWindowSize()
  const isDesktop = width >= 1024

  if (isUnderConstruction) {
    return <SiteUnderConstructionPage />
  }

  return (
    <main>
      {isDesktop ? <Header /> : <Menu />}
      {children}
      <Footer />
    </main>
  )
}

export default MainLayout
