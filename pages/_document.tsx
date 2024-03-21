import Document, { Html, Head, Main, NextScript } from 'next/document'

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
        </Head>
        <body className="body">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
