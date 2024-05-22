import Head from 'next/head'

import Container from '@/components/common/Container'
import FlexWrapper from '@/components/common/FlexWrapper'
import Headline from '@/components/common/Headline'
import List from '@/components/common/List'
import { pages, WEBSITE_URL } from '@/constants/pages'
import { SKILL_LIST } from '@/constants/skillList'

const SkillsPage = () => (
  <>
    <Head>
      <title>Celeste Zapata | My skills</title>
      <link rel="canonical" href={`${WEBSITE_URL}${pages.SKILLS}`} />
      <meta property="og:url" content={`${WEBSITE_URL}${pages.SKILLS}`} />
    </Head>
    <Container>
      <FlexWrapper gap="large">
        <Headline title={<>skills</>} highlighted />
        <FlexWrapper>
          <List data={SKILL_LIST} divided />
        </FlexWrapper>
      </FlexWrapper>
    </Container>
  </>
)

export default SkillsPage
