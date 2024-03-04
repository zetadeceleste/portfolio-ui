import Head from 'next/head'

import styles from './about.module.css'

import Container from '@/components/common/Container'
import FlexWrapper from '@/components/common/FlexWrapper'
import Headline from '@/components/common/Headline'
import SocialLinkList from '@/components/common/SocialLinkList'

const AboutPage = () => (
  <>
    <Head>
      <title>Celeste Zapata | About me</title>
      <meta
        name="description"
        content="Celeste Zapata is a professional developer based in Mendoza, Argentina."
      />
    </Head>
    <Container>
      <FlexWrapper flexDirection="column" gap="medium">
        <Headline title={<>Hello!</>} underline />
        <FlexWrapper flexDirection="column">
          <p>
            I´m <strong className={styles.name}>Celes</strong>, a developer with
            an Associate Degree in Computer Programming, focused in{' '}
            <strong>Growth Engineering</strong> &&{' '}
            <strong>Frontend Development</strong>.
          </p>
          <p>
            With over 4 years of cross-industry experience, I have closely
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
            environmental impact and to smartly cut costs. Additionally, I
            consider <em>Web Accessibility</em> a priority, ensuring an
            inclusive user experience by providing seamless access for
            individuals with disabilities.
          </p>
        </FlexWrapper>
        <SocialLinkList />
      </FlexWrapper>
    </Container>
  </>
)

export default AboutPage
