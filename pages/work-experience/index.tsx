import Head from 'next/head'

import ExperienceWrapper from './ExperienceWrapper'

import Container from '@/components/common/Container'
import FlexWrapper from '@/components/common/FlexWrapper'
import Headline from '@/components/common/Headline'

const WorkExperiencePage = () => (
  <>
    <Head>
      <title>Celeste Zapata | Work experience</title>
    </Head>
    <Container variant>
      <FlexWrapper alignSelf="start" flexDirection="column" gap="medium">
        <Headline title={<>work experience</>} highlighted variant />
        <ExperienceWrapper />
      </FlexWrapper>
    </Container>
  </>
)

export default WorkExperiencePage
