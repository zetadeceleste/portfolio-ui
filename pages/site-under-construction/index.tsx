import Head from 'next/head'

import Container from '@/components/common/Container'
import FlexWrapper from '@/components/common/FlexWrapper'
import Headline from '@/components/common/Headline'
import SocialLinkList from '@/components/common/SocialLinkList'

const SiteUnderConstructionPage = () => (
  <>
    <Head>
      <title>Celeste Zapata | Site under construction</title>
    </Head>
    <Container>
      <FlexWrapper gap="medium">
        <Headline
          title={
            <>
              site under <span className="black">construction</span>
            </>
          }
          subtitle="Feel free to visit my social media!"
        />
        <SocialLinkList />
      </FlexWrapper>
    </Container>
  </>
)

export default SiteUnderConstructionPage
