import Head from 'next/head'

import Container from '@/components/common/Container'
import FlexWrapper from '@/components/common/FlexWrapper'
import Headline from '@/components/common/Headline'
import ImageBySize from '@/components/common/ImageBySize'
import { HOME_PAGE_IMAGES } from '@/constants/imagePaths'

const HomePage = () => (
  <>
    <Head>
      <title>Celeste Zapata | Developer</title>
      <meta
        name="description"
        content="Celeste Zapata is a professional developer based in Mendoza, Argentina."
      />
    </Head>
    <Container divided>
      <ImageBySize images={HOME_PAGE_IMAGES} />
      <FlexWrapper flexDirection="column" gap="medium">
        <Headline
          title={
            <>
              port <br />
              folio
            </>
          }
          subtitle="Celeste Zapata | Developer"
          center
        />
      </FlexWrapper>
    </Container>
  </>
)

export default HomePage
