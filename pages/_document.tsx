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
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GOOGLE_TAG_MANAGER_ID}');`,
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
