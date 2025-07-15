import DynamicHead from '@/components/DynamicHead'
import AboutSection from '@/sections/AboutSection'
import HeroSection from '@/sections/HeroSection'
import { Page } from '@/types'

const HomePage = () => {
  return (
    <>
      <DynamicHead page={Page.HERO} />
      <HeroSection />
      <AboutSection />
    </>
  )
}

export default HomePage
