import Menu from '@/components/common/Menu'

interface Props {
  children: React.ReactNode
}

const MainLayout = ({ children }: Props) => (
  <main>
    {children}
    <Menu />
  </main>
)

export default MainLayout
