import styles from './home.module.css'

import Container from '@/components/common/Container'
import DynamicHead from '@/components/common/DynamicHead'
import FlexWrapper from '@/components/common/FlexWrapper'
import Headline from '@/components/common/Headline'
import ImageBySize from '@/components/common/ImageBySize'
import { HOME_PAGE_IMAGES } from '@/constants/imagePathList'
import { Page } from '@/types'

const HomePage = () => (
  <>
    <DynamicHead page={Page.HOME} />
    <Container className={styles.container} full>
      <ImageBySize images={HOME_PAGE_IMAGES} className={styles.image} />
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
  </>
)

export default HomePage
