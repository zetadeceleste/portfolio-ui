import Menu from '@/components/common/Menu'
import SiteUnderConstructionPage from '@/pages/site-under-construction'

interface Props {
  children: React.ReactNode
  isUnderConstruction?: boolean
}

const MainLayout = ({ children, isUnderConstruction = false }: Props) => {
  if (isUnderConstruction) {
    return <SiteUnderConstructionPage />
  }

  return (
    <main>
      {children}
      <Menu />
    </main>
  )
}

export default MainLayout
