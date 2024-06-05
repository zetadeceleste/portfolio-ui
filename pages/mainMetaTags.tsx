import React from 'react'

import {
  AUTHOR,
  KEYWORDS,
  MAIN_DESCRIPTION,
  PAGE_IMAGE_PATH,
  TITLE,
} from '@/constants/pageInfo'

const MainMetaTags = () => (
  <>
    <meta name="description" content={MAIN_DESCRIPTION} />
    <meta name="author" content={AUTHOR} />
    <meta name="keywords" content={KEYWORDS} />
    <meta name="robots" content="index, follow" />
    <meta name="google" content="notranslate" />
    <meta name="theme-color" content="#000000" />
    <link rel="icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    <link rel="android-chrome-192x192" href="/android-chrome-192x192.png" />
    <link rel="android-chrome-512x512" href="/android-chrome-512x512.png" />
    <link rel="manifest" href="/manifest.json" />
    {/* Open Graph tags */}
    <meta property="og:description" content={MAIN_DESCRIPTION} />
    <meta property="og:type" content="website" />
    <meta property="og:image" content={PAGE_IMAGE_PATH} />
    {/* Twitter Card tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@zetadeceleste" />
    <meta name="twitter:title" content={TITLE} />
    <meta name="twitter:description" content={MAIN_DESCRIPTION} />
    <meta name="twitter:image" content={PAGE_IMAGE_PATH} />
    <meta name="twitter:creator" content="@zetadeceleste" />
    <meta name="twitter:url" content="https://twitter.com/zetadeceleste" />
    <meta name="twitter:domain" content="https://twitter.com/zetadeceleste" />
  </>
)

export default MainMetaTags
