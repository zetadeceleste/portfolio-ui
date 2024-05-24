import Head from 'next/head'

import { Page } from '@/constants/pages'
import { getHeadByPage } from '@/utils/head'

type Props = {
  page: Page
}

const DynamicHead = ({ page }: Props) => {
  const { title, pageUrl } = getHeadByPage(page)

  return (
    <Head>
      <title>{title}</title>
      <link rel="canonical" href={pageUrl} />
      <meta property="og:url" content={pageUrl} />
      {page === Page.WORK_EXPERIENCE && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'http://schema.org',
              '@type': 'CollectionPage',
              name: 'Work experience',
              url: { pageUrl },
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
