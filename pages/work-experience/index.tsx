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
      <FlexWrapper alignSelf="start" gap="medium">
        <Headline
          title={
            <>
              work <br /> experience
            </>
          }
          underline
          variant
        />
        <ExperienceCarousel />
      </FlexWrapper>
    </Container>
  </>
)

export default WorkExperiencePage
