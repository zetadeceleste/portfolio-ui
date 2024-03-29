import Head from 'next/head'

import styles from './about.module.css'

import Container from '@/components/common/Container'
import FlexWrapper from '@/components/common/FlexWrapper'
import Headline from '@/components/common/Headline'
import SocialLinks from '@/components/common/SocialLinks'

const AboutPage = () => (
  <>
    <Head>
      <title>Celeste Zapata | About me</title>
    </Head>
    <Container>
      <FlexWrapper gap="medium">
        <Headline title={<>howdy!</>} highlighted />
        <FlexWrapper gap="small">
          <p>
            I´m <strong className={styles.name}>Celes</strong>, a developer with
            an Associate Degree in Computer Programming, focused in{' '}
            <strong>Growth Engineering</strong>{' '}
            <span title='yup, the "&&" is totally on purpose'>&&</span>{' '}
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
