import Container from '@/components/common/Container'
import DynamicHead from '@/components/common/DynamicHead'
import FlexWrapper from '@/components/common/FlexWrapper'
import Headline from '@/components/common/Headline'
import SocialLinks from '@/components/common/SocialLinks'
import { Page } from '@/constants/pages'

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
