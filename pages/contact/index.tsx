import Head from 'next/head'

import Container from '@/components/common/Container'
import FlexWrapper from '@/components/common/FlexWrapper'
import Headline from '@/components/common/Headline'
import SocialLinkList from '@/components/common/SocialLinkList'

const ContactPage = () => (
  <>
    <Head>
      <title>Celeste Zapata | Contact me</title>
    </Head>
    <Container>
      <FlexWrapper gap="medium">
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
        <SocialLinkList />
      </FlexWrapper>
    </Container>
  </>
)

export default ContactPage
