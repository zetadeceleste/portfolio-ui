import Head from 'next/head'

import { Page } from '@/types'
import { getHeadByPage } from '@/utils/head'

interface Props {
  page: Page
}

const DynamicHead = ({ page }: Props) => {
  const { title, pageUrl } = getHeadByPage(page)
  const isWorkExperience = page === Page.WORK_EXPERIENCE

  return (
    <Head>
      <title>{title}</title>
      <link rel="canonical" href={pageUrl} />
      <meta property="og:url" content={pageUrl} />
      {isWorkExperience && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'http://schema.org',
              '@type': 'CollectionPage',
              name: 'Work experience',
              url: pageUrl,
              about: 'A collection of job experiences of Celeste Zapata',
              author: {
                '@type': 'Person',
                name: 'Celeste Zapata',
              },
            }),
          }}
        />
      )}
    </Head>
  )
}

export default DynamicHead
