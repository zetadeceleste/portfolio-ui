import Head from 'next/head'

import ExperienceCarousel from './ExperienceCarousel'
import styles from './work-experience.module.css'

import Container from '@/components/common/Container'
import FlexWrapper from '@/components/common/FlexWrapper'
import Headline from '@/components/common/Headline'

const WorkExperiencePage = () => (
  <>
    <Head>
      <title>Celeste Zapata | Work experience</title>
    </Head>
    <Container className={styles['experience-container']} variant>
      <FlexWrapper flexDirection="row" justifySelf="start">
        <Headline title={<>Work Experience</>} underline variant />
      </FlexWrapper>
      <ExperienceCarousel />
    </Container>
  </>
)

export default WorkExperiencePage
