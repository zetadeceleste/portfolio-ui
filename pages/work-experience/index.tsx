import Head from 'next/head'

import ExperienceCarousel from './ExperienceCarousel'

import Container from '@/components/common/Container'
import FlexWrapper from '@/components/common/FlexWrapper'
import Headline from '@/components/common/Headline'

const WorkExperiencePage = () => (
  <>
    <Head>
      <title>Celeste Zapata | Work experience</title>
    </Head>
    <Container variant>
      <FlexWrapper alignSelf="start" gap="medium">
        <Headline
          title={
            <>
              work <br /> experience
            </>
          }
          highlight
          variant
        />
        <ExperienceCarousel />
      </FlexWrapper>
    </Container>
  </>
)

export default WorkExperiencePage
