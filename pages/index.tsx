import Head from 'next/head'

import Container from '@/components/common/Container'
import Headline from '@/components/common/Headline'
import ImageResponsive from '@/components/common/ImageResponsive'

const HomePage = () => (
  <>
    <Head>
      <title>Celeste Zapata | Developer</title>
      <meta name="description" content="Portfolio Web" />
    </Head>
    <Container twoColumns>
      <ImageResponsive
        imageName={'home-page-hero'}
        width={1300}
        height={1033}
        description="Ilustration of developer girl programming"
      />
      <Headline
        title="portfolio"
        subtitle="Celeste Zapata | Developer"
        truncate
      />
    </Container>
  </>
)

export default HomePage
