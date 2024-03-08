import Head from 'next/head'

import styles from './Home.module.css'

import Container from '@/components/common/Container'
import FlexWrapper from '@/components/common/FlexWrapper'
import Headline from '@/components/common/Headline'
import ImageBySize from '@/components/common/ImageBySize'
import { HOME_PAGE_IMAGES } from '@/constants/imagePaths'
import { useWindowSize } from '@/utils/window'

const HomePage = () => {
  const { width } = useWindowSize()

  return (
    <>
      <Head>
        <title>Celeste Zapata | Developer</title>
      </Head>
      <Container className={styles['home-container']} full>
        <ImageBySize images={HOME_PAGE_IMAGES} />
        <FlexWrapper
          alignItems={width >= 768 ? 'start' : 'center'}
          alignSelf={width >= 768 ? 'center' : 'start'}
          justifySelf={width >= 768 ? 'start' : 'center'}
        >
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
}

export default HomePage
