import Head from 'next/head'

import Container from '@/components/common/Container'
import FlexWrapper from '@/components/common/FlexWrapper'
import Headline from '@/components/common/Headline'
import SocialLinks from '@/components/common/SocialLinks'
import { pages, WEBSITE_URL } from '@/constants/pages'

const ContactPage = () => (
  <>
    <Head>
      <title>Celeste Zapata | Let´s work together!</title>
      <link rel="canonical" href={`${WEBSITE_URL}${pages.CONTACT}`} />
      <meta property="og:url" content={`${WEBSITE_URL}${pages.CONTACT}`} />
    </Head>
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
