import Container from '@/components/Container'
import DynamicHead from '@/components/DynamicHead'
import FlexWrapper from '@/components/FlexWrapper'
import Headline from '@/components/Headline'
import SocialLinks from '@/components/SocialLinks'
import { Page } from '@/types'

const ContactPage = () => (
  <>
    <DynamicHead page={Page.CONTACT} />
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
        />
        <SocialLinks />
      </FlexWrapper>
    </Container>
  </>
)

export default ContactPage
