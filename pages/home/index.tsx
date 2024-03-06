import Head from 'next/head'

import styles from './Home.module.css'

import Container from '@/components/common/Container'
import FlexWrapper from '@/components/common/FlexWrapper'
import Headline from '@/components/common/Headline'
import ImageBySize from '@/components/common/ImageBySize'
import { HOME_PAGE_IMAGES } from '@/constants/imagePaths'

const HomePage = () => (
  <>
    <Head>
      <title>Celeste Zapata | Developer</title>
    </Head>
    <Container className={styles['home-container']} full>
      <ImageBySize images={HOME_PAGE_IMAGES} />
      <FlexWrapper justifySelf="start">
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
