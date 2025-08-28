import Container from '@/components/Container'
import FlexWrapper from '@/components/FlexWrapper'
import Headline from '@/components/Headline'
import SocialLinks from '@/components/SocialLinks'

const ContactSection = () => (
  <Container>
    <FlexWrapper alignItems="center" gap="large">
      <Headline
        title={
          <>
            thank
            <br />
            <span className="black">you!</span>
          </>
        }
        subtitle="Let´s work together!"
        center
        animate
      />
      <SocialLinks />
    </FlexWrapper>
  </Container>
)

export default ContactSection
