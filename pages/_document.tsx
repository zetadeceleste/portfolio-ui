import Document, { Html, Head, Main, NextScript } from 'next/document'

import MainMetaTags from './mainMetaTags'

import { googleTagManagerId } from '@/config'

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
                name: 'Celeste Zapata',
                description:
                  'Developer focused in Growth Engineering & Frontend Development',
                datePublished: '2024-02-19',
                publisher: {
                  '@type': 'Organization',
                  name: 'chikilabs',
                },
                jobTitle: 'Developer',
                url: 'https://zetadeceleste.dev',
                sameAs: [
                  'https://twitter.com/zetadeceleste',
                  'https://www.linkedin.com/in/zetadeceleste/',
                  'https://github.com/zetadeceleste',
                ],
              }),
            }}
          />
          {/* Prevent flash of unstyled content (FOUC) for dark mode */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (prefersDark) {
                    document.documentElement.classList.add('dark-theme');
                  } else {
                    document.documentElement.classList.add('main-theme');
                  }
                })();
              `,
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
