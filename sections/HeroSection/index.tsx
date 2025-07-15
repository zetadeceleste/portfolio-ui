import styles from './HeroSection.module.css'

import Container from '@/components/Container'
import FlexWrapper from '@/components/FlexWrapper'
import Headline from '@/components/Headline'
import ImageBySize from '@/components/ImageBySize'
import { HERO_SECTION_IMAGES } from '@/constants/imagePathList'

const HeroSection = () => (
  <Container className={styles.container} full>
    <ImageBySize images={HERO_SECTION_IMAGES} className={styles.image} />
    <FlexWrapper className={styles.wrapper}>
      <Headline
        title={
          <>
            port
            <br />
            folio
          </>
        }
        subtitle="Celeste Zapata | Developer"
        bigTitles
        center
      />
    </FlexWrapper>
  </Container>
)

export default HeroSection
