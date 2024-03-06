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
        <Headline title={<>Skills</>} underline />
        <FlexWrapper flexDirection="row" gap="large">
          <List
            data={[
              'React.js',
              'Next.js',
              'TypeScript',
              'React.js',
              'Next.js',
              'TypeScript',
              'React.js',
              'Next.js',
              'TypeScript',
              'React.js',
            ]}
          />
          <List
            data={[
              'React.js',
              'Next.js',
              'TypeScript',
              'React.js',
              'Next.js',
              'TypeScript',
              'React.js',
              'Next.js',
              'TypeScript',
              'React.js',
            ]}
          />
          <List
            data={[
              'React.js',
              'Next.js',
              'TypeScript',
              'React.js',
              'Next.js',
              'TypeScript',
              'React.js',
              'Next.js',
              'TypeScript',
              'React.js',
            ]}
          />
        </FlexWrapper>
      </FlexWrapper>
    </Container>
  </>
)

export default SkillsPage
