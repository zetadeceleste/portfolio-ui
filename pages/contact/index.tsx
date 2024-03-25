import Head from 'next/head'

import Container from '@/components/common/Container'
import FlexWrapper from '@/components/common/FlexWrapper'
import Headline from '@/components/common/Headline'
import SocialLinks from '@/components/common/SocialLinks'

const ContactPage = () => (
  <>
    <Head>
      <title>Celeste Zapata | Let´s work together!</title>
    </Head>
    <Container>
      <FlexWrapper alignItems="center" flexDirection="column" gap="medium">
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
