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
            I´m <strong className={styles.name}>Celes</strong>, a developer
            focused in <strong>Growth Engineering</strong>{' '}
            <span
              className={styles['on-purpose']}
              title='yup, the "&&" is totally on purpose'
            >
              &&
            </span>{' '}
            <strong>Frontend Development</strong>.
          </p>
          <p>
            With over 5 years of cross-industry experience, I´ve closely
            collaborated with designers, marketers, and analysts.
          </p>
          <p>
            Passionate about continuous learning, I strive to deliver
            pixel-perfect designs with a focus on <strong>SEO</strong> and{' '}
            <strong>Performance</strong> optimization, essential for maintaining
            a high <em>Quality Score</em> for websites.
          </p>
          <p>
            I’m committed to the principles of{' '}
            <em>🌱 Sustainable Software Engineering</em>: prioritizing best
            practices for clean code and resource optimization, both to minimize
            environmental impact and to smartly cut costs.
          </p>
          <p>
            Additionally, I consider <em>Web Accessibility</em> a priority,
            ensuring an inclusive user experience by providing seamless access
            for individuals with disabilities.
          </p>
        </FlexWrapper>
        <SocialLinks />
      </FlexWrapper>
    </Container>
  </>
)

export default AboutPage
