import Head from 'next/head'

import ExperienceWrapper from './ExperienceWrapper'

import Container from '@/components/common/Container'
import FlexWrapper from '@/components/common/FlexWrapper'
import Headline from '@/components/common/Headline'
import { pages, WEBSITE_URL } from '@/constants/pages'

const WorkExperiencePage = () => (
  <>
    <Head>
      <title>Celeste Zapata | Work experience</title>
      <link rel="canonical" href={`${WEBSITE_URL}${pages.WORK_EXPERIENCE}`} />
      <meta
        property="og:url"
        content={`${WEBSITE_URL}${pages.WORK_EXPERIENCE}`}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'http://schema.org',
            '@type': 'CollectionPage',
            name: 'Work experience',
            url: 'https://zetadeceleste.dev/work-experience/',
            about: 'A collection of job experiences of Celeste Zapata',
            author: {
              '@type': 'Person',
              name: 'Celeste Zapata',
            },
          }),
        }}
      />
    </Head>
    <Container variant>
      <FlexWrapper alignSelf="start" gap="large">
        <Headline title={<>work experience</>} highlighted variant />
        <ExperienceWrapper />
      </FlexWrapper>
    </Container>
  </>
)

export default WorkExperiencePage
