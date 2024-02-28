import Head from 'next/head'

import Container from '@/components/common/Container'
import Headline from '@/components/common/Headline'
import ImageBySize from '@/components/common/ImageBySize'
import { HOME_PAGE_IMAGES } from '@/constants/imagePaths'

const HomePage = () => (
  <>
    <Head>
      <title>Celeste Zapata | Web Developer</title>
      <meta name="description" content="Portfolio Web" />
    </Head>
    <Container twoColumns>
      <ImageBySize images={HOME_PAGE_IMAGES} />
      <Headline
        title={
          <>
            port <br />
            folio
          </>
        }
        subtitle="Celeste Zapata | Web Developer"
        center
      />
    </Container>
  </>
)

export default HomePage
