import Head from 'next/head'

import Container from '@/components/common/Container'
import FlexWrapper from '@/components/common/FlexWrapper'
import Headline from '@/components/common/Headline'
import SocialLinks from '@/components/common/SocialLinks'

const SiteUnderConstructionPage = () => (
  <>
    <Head>
      <title>Celeste Zapata | Site under construction</title>
    </Head>
    <Container>
      <FlexWrapper justifyContent="center" flexDirection="column" gap="medium">
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
