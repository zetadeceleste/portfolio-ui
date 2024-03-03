import Head from 'next/head'

import Container from '@/components/common/Container'
import FlexWrapper from '@/components/common/FlexWrapper'
import Headline from '@/components/common/Headline'
import SocialLinkList from '@/components/common/SocialLinkList'

const ContactPage = () => (
  <>
    <Head>
      <title>Celeste Zapata | Contact me</title>
      <meta
        name="description"
        content="Celeste Zapata is a professional developer based in Mendoza, Argentina."
      />
    </Head>
    <Container breakpoint>
      <FlexWrapper flexDirection="column" gap="medium">
        <Headline
          title={
            <>
              thank
              <br />
              you!
            </>
          }
          subtitle="Let´s work together!"
        />
        <SocialLinkList />
      </FlexWrapper>
    </Container>
  </>
)

export default ContactPage
