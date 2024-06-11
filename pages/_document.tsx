import Document, { Html, Head, Main, NextScript } from 'next/document'

import MainMetaTags from './mainMetaTags'

import { googleTagManagerId } from '@/config'
import {
  AUTHOR_GITHUB,
  AUTHOR_LINKEDIN,
  AUTHOR_ORGANIZATION,
  AUTHOR_TWITTER,
  AUTHOR,
  WEBSITE_SHORT_DESCRIPTION,
  WEBSITE_URL,
  AUTHOR_JOB_TITLE,
} from '@/constants/pageInfo'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <MainMetaTags />
          {/* Schema.org markup */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'http://schema.org',
                '@type': 'Person',
                name: AUTHOR,
                description: WEBSITE_SHORT_DESCRIPTION,
                datePublished: '2024-02-19',
                publisher: {
                  '@type': 'Organization',
                  name: AUTHOR_ORGANIZATION,
                },
                jobTitle: AUTHOR_JOB_TITLE,
                url: WEBSITE_URL,
                sameAs: [AUTHOR_TWITTER, AUTHOR_LINKEDIN, AUTHOR_GITHUB],
              }),
            }}
          />
          {/* Google Tag Manager */}
          {googleTagManagerId && (
            <script
              dangerouslySetInnerHTML={{
                __html: `
                window.addEventListener('load', function() {
                  var script = document.createElement('script');
                  script.src = 'https://www.googletagmanager.com/gtm.js?id=${googleTagManagerId}';
                  script.async = true;
                  script.onload = function() {
                    console.log('GTM script loaded correctly, window.dataLayer has been populated.');
                  };
                  document.head.appendChild(script);
                });`,
              }}
            />
          )}
        </Head>
        <body>
          {/* Google Tag Manager (noscript) */}
          {googleTagManagerId && (
            <noscript
              dangerouslySetInnerHTML={{
                __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=${googleTagManagerId}"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
              }}
            />
          )}
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
