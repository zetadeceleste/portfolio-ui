import Head from 'next/head'

import Container from '@/components/common/Container'
import FlexWrapper from '@/components/common/FlexWrapper'
import Headline from '@/components/common/Headline'
import List from '@/components/common/List'
import { SKILL_LIST } from '@/constants/skillList'

const SkillsPage = () => (
  <>
    <Head>
      <title>Celeste Zapata | My skills</title>
    </Head>
    <Container>
      <FlexWrapper flexDirection="column" gap="medium">
        <Headline title={<>skills</>} highlighted />
        <FlexWrapper flexDirection="column-to-row">
          <List data={SKILL_LIST} divided />
        </FlexWrapper>
      </FlexWrapper>
    </Container>
  </>
)

export default SkillsPage
