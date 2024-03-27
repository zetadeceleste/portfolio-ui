import Document, { Html, Head, Main, NextScript } from 'next/document'

import { GOOGLE_TAG_MANAGER_ID } from '@/config'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="Celeste Zapata is a professional developer based in Mendoza, Argentina."
          />
          <meta name="theme-color" content="#000000" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link
            rel="android-chrome-192x192"
            href="/android-chrome-192x192.png"
          />
          <link
            rel="android-chrome-512x512"
            href="/android-chrome-512x512.png"
          />
          <link rel="manifest" href="/manifest.json" />
          {GOOGLE_TAG_MANAGER_ID && (
            <script
              dangerouslySetInnerHTML={{
                __html: `
                window.addEventListener('load', function() {
                  var script = document.createElement('script');
                  script.src = 'https://www.googletagmanager.com/gtm.js?id=${GOOGLE_TAG_MANAGER_ID}';
                  script.async = true;
                  script.onload = function() {
                    console.log('GTM script loaded correctly, window.dataLayer has been populated');
                  };
                  document.head.appendChild(script);
                });`,
              }}
            />
          )}
        </Head>
        <body>
          {GOOGLE_TAG_MANAGER_ID && (
            <noscript
              dangerouslySetInnerHTML={{
                __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=${GOOGLE_TAG_MANAGER_ID}"
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
