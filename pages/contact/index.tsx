import Container from '@/components/common/Container'
import DynamicHead from '@/components/common/DynamicHead'
import FlexWrapper from '@/components/common/FlexWrapper'
import Headline from '@/components/common/Headline'
import SocialLinks from '@/components/common/SocialLinks'
import { Page } from '@/constants/pages'

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
