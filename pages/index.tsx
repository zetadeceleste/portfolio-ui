import Head from 'next/head'

import Container from '@/components/common/Container'
import Headline from '@/components/common/Headline'
import Image from '@/components/common/Image'

const HomePage: React.FC = () => (
  <>
    <Head>
      <title>Celeste Zapata | Developer</title>
      <meta name="description" content="Portfolio Web" />
    </Head>
    <Container row>
      <Image
        imagePath="public/images/home-page-hero.jpeg"
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
