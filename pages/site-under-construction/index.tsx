import Container from '@/components/Container'
import DynamicHead from '@/components/DynamicHead'
import FlexWrapper from '@/components/FlexWrapper'
import Headline from '@/components/Headline'
import SocialLinks from '@/components/SocialLinks'
import { Page } from '@/types'

const SiteUnderConstructionPage = () => (
  <>
    <DynamicHead page={Page.SITE_UNDER_CONSTRUCTION} />
    <Container>
      <FlexWrapper justifyContent="center" gap="large">
        <Headline
          title={
            <>
              site under
              <br />
              <span className="black">construction</span>
            </>
          }
          subtitle="Feel free to visit my social media!"
        />
        <SocialLinks />
      </FlexWrapper>
    </Container>
  </>
)

export default SiteUnderConstructionPage
