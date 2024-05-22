import Head from 'next/head'

import Container from '@/components/common/Container'
import FlexWrapper from '@/components/common/FlexWrapper'
import Headline from '@/components/common/Headline'
import SocialLinks from '@/components/common/SocialLinks'
import { pages, WEBSITE_URL } from '@/constants/pages'

const SiteUnderConstructionPage = () => (
  <>
    <Head>
      <title>Celeste Zapata | Site under construction</title>
      <link
        rel="canonical"
        href={`${WEBSITE_URL}${pages.SITE_UNDER_CONSTRUCTION}`}
      />
      <meta
        property="og:url"
        content={`${WEBSITE_URL}${pages.SITE_UNDER_CONSTRUCTION}`}
      />
    </Head>
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
