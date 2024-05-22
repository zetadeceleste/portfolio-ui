import Head from 'next/head'

import styles from './home.module.css'

import Container from '@/components/common/Container'
import FlexWrapper from '@/components/common/FlexWrapper'
import Headline from '@/components/common/Headline'
import ImageBySize from '@/components/common/ImageBySize'
import { HOME_PAGE_IMAGES } from '@/constants/imagePaths'
import { pages, WEBSITE_URL } from '@/constants/pages'

const HomePage = () => (
  <>
    <Head>
      <title>Celeste Zapata | Developer</title>
      <link rel="canonical" href={`${WEBSITE_URL}${pages.HOME}`} />
      <meta property="og:url" content={`${WEBSITE_URL}${pages.HOME}`} />
    </Head>
    <Container className={styles.container} full>
      <ImageBySize images={HOME_PAGE_IMAGES} />
      <FlexWrapper className={styles.wrapper}>
        <Headline
          title={
            <>
              port <br />
              folio
            </>
          }
          subtitle="Celeste Zapata | Developer"
          bigTitles
          center
        />
      </FlexWrapper>
    </Container>
  </>
)

export default HomePage
