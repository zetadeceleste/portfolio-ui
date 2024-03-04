import Head from 'next/head'

import Container from '@/components/common/Container'
import Headline from '@/components/common/Headline'

const ExperiencePage = () => (
  <>
    <Head>
      <title>Celeste Zapata | Work experience</title>
      <meta
        name="description"
        content="Celeste Zapata is a professional developer based in Mendoza, Argentina."
      />
    </Head>
    <Container variant>
      <Headline
        title={
          <>
            Work <br /> Experience
          </>
        }
        underline
        variant
      />
    </Container>
  </>
)

export default ExperiencePage
