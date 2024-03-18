import { useRouter } from 'next/router'

import Menu from '@/components/common/Menu'

interface Props {
  children: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
  const router = useRouter()
  const { pathname } = router

  return (
    <main>
      {children}
      <Menu variant={pathname === '/work-experience'} />
    </main>
  )
}

export default MainLayout
