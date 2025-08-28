import DynamicHead from '@/components/DynamicHead'
import MainLayout from '@/layouts/MainLayout'
import AboutSection from '@/sections/AboutSection'
import AdditionalInformationSection from '@/sections/AdditionalInformationSection'
import ContactSection from '@/sections/ContactSection'
import ExperienceSection from '@/sections/ExperienceSection'
import HeroSection from '@/sections/HeroSection'
import SkillsSection from '@/sections/SkillsSection'
import { Page } from '@/types'

const HomePage = () => {
  return (
    <MainLayout isHome={true}>
      <DynamicHead page={Page.HERO} />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <AdditionalInformationSection />
      <ContactSection />
    </MainLayout>
  )
}

export default HomePage
