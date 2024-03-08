import Head from 'next/head'

import Container from '@/components/common/Container'
import FlexWrapper from '@/components/common/FlexWrapper'
import Headline from '@/components/common/Headline'
import List from '@/components/common/List'
import { useWindowSize } from '@/utils/window'

const SkillsPage = () => {
  const { width } = useWindowSize()

  return (
    <>
      <Head>
        <title>Celeste Zapata | My skills</title>
      </Head>
      <Container>
        <FlexWrapper gap="medium">
          <Headline title={<>skills</>} highlighted />
          <FlexWrapper flexDirection={width >= 768 ? 'row' : 'column'}>
            <List
              data={[
                { text: 'React.js' },
                { text: 'React.js' },
                { text: 'React.js' },
                { text: 'React.js' },
                { text: 'React.js' },
                { text: 'React.js' },
                { text: 'React.js' },
                { text: 'React.js' },
                { text: 'React.js' },
                { text: 'React.js' },
                { text: 'React.js' },
                { text: 'React.js' },
                { text: 'React.js' },
                { text: 'React.js' },
                { text: 'React.js' },
                { text: 'React.js' },
                { text: 'React.js' },
                { text: 'React.js' },
                { text: 'React.js' },
                { text: 'React.js' },
                { text: 'React.js' },
                { text: 'React.js' },
                { text: 'React.js' },
                { text: 'React.js' },
                { text: 'React.js' },
                { text: 'React.js' },
                { text: 'React.js' },
              ]}
              divided
            />
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </>
  )
}

export default SkillsPage
