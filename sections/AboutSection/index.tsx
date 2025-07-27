import styles from './AboutSection.module.css'

import Container from '@/components/Container'
import FlexWrapper from '@/components/FlexWrapper'
import Headline from '@/components/Headline'
import SocialLinks from '@/components/SocialLinks'

const AboutSection = () => (
  <Container>
    <FlexWrapper gap="large">
      <Headline title={<>howdy!</>} highlighted />
      <FlexWrapper gap="medium">
        <p>
          I´m <strong className={styles.name}>Celes</strong>, a developer with a
          programming degree and over 5 years of cross-industry experience,
          having worked closely with designers, publishers, marketers and
          analysts to deliver high-impact digital products.
        </p>
        <p>
          I specialize in building <em>pixel-perfect</em>,
          <strong>accessible</strong> and <strong>SEO-optimized</strong>{' '}
          interfaces, with a strong focus on{' '}
          <strong>performance optimization</strong>, essential for maintaining a
          high <em>Quality Score</em> for websites.
        </p>
        <p>
          Passionate about 🌱 <em>Sustainable Software Engineering</em>, I
          prioritize clean code and resource-efficient practices to reduce
          environmental impact and optimize infrastructure costs.
        </p>
      </FlexWrapper>
      <SocialLinks />
    </FlexWrapper>
  </Container>
)

export default AboutSection
