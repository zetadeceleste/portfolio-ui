import styles from './about.module.css'

import Container from '@/components/Container'
import DynamicHead from '@/components/DynamicHead'
import FlexWrapper from '@/components/FlexWrapper'
import Headline from '@/components/Headline'
import SocialLinks from '@/components/SocialLinks'
import { Page } from '@/types'

const AboutPage = () => (
  <>
    <DynamicHead page={Page.ABOUT} />
    <Container>
      <FlexWrapper gap="large">
        <Headline title={<>howdy!</>} highlighted />
        <FlexWrapper gap="medium">
          <p>
            I´m <strong className={styles.name}>Celes</strong>, a developer with
            a programming degree and over 6 years of cross-industry experience,
            having worked closely with designers, publishers, marketers and
            analysts across diverse industries.
          </p>
          <p>
            As a <strong>Tech Lead</strong>, I guide teams through technical
            decisions while keeping communication clear across all levels —
            bridging the gap between engineering and business goals.
          </p>
          <p>
            I pair strong engineering fundamentals with <em>AI-assisted</em>{' '}
            workflows to consistently deliver scalable, high-quality solutions —
            built to last.
          </p>
        </FlexWrapper>
        <SocialLinks />
      </FlexWrapper>
    </Container>
  </>
)

export default AboutPage
