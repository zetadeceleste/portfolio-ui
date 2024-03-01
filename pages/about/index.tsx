import Container from '@/components/common/Container'
import FlexWrapper from '@/components/common/FlexWrapper'
import Headline from '@/components/common/Headline'
import SocialLinkList from '@/components/common/SocialLinkList'

const AboutPage = () => (
  <Container breakpoint>
    <FlexWrapper flexDirection="column" gap="medium">
      <Headline title={<>Hello!</>} underline />
      <FlexWrapper flexDirection="column">
        <p>
          I´m <strong>Celes</strong>, a developer with an Associate Degree in
          Computer Programming, focused in Growth Engineering && Frontend
          Development.
        </p>
        <p>
          I bring over 4 years of experience from various industries, closely
          collaborating with designers, marketers, and analysts.
        </p>
        <p>
          Committed to 🌱 Sustainable Software Engineering, I prioritize best
          practices for clean code and resource optimization to minimize
          environmental impact.
        </p>
        <p>
          Passionate about continuous learning, I aim to deliver pixel-perfect
          designs, focusing on SEO and Performance optimization, essential for
          achieving a high Quality Score.
        </p>
      </FlexWrapper>
      <SocialLinkList />
    </FlexWrapper>
  </Container>
)

export default AboutPage
