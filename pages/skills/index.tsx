import Head from 'next/head'

import Container from '@/components/common/Container'
import FlexWrapper from '@/components/common/FlexWrapper'
import Headline from '@/components/common/Headline'
import List from '@/components/common/List'

const SkillsPage = () => (
  <>
    <Head>
      <title>Celeste Zapata | My skills</title>
    </Head>
    <Container>
      <FlexWrapper gap="medium">
        <Headline title={<>skills</>} underline />
        <FlexWrapper flexDirection="row" gap="medium">
          <List
            data={[
              { text: 'React.js' },
              { text: 'React.js' },
              { text: 'React.js' },
            ]}
          />
          <List
            data={[
              { text: 'React.js' },
              { text: 'React.js' },
              { text: 'React.js' },
            ]}
          />
          <List
            data={[
              { text: 'React.js' },
              { text: 'React.js' },
              { text: 'React.js' },
            ]}
          />
        </FlexWrapper>
      </FlexWrapper>
    </Container>
  </>
)

export default SkillsPage
