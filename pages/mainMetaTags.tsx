import React from 'react'

import { WEBSITE_IMAGE } from '@/constants/imagePathList'
import {
  AUTHOR,
  WEBSITE_KEYWORDS,
  WEBSITE_DESCRIPTION,
  WEBSITE_TITLE,
  AUTHOR_USERNAME,
  AUTHOR_TWITTER,
} from '@/constants/pageInfo'

const MainMetaTags = () => (
  <>
    <meta name="description" content={WEBSITE_DESCRIPTION} />
    <meta name="author" content={AUTHOR} />
    <meta name="keywords" content={WEBSITE_KEYWORDS} />
    <meta name="robots" content="index, follow" />
    <meta name="google" content="notranslate" />
    <meta name="theme-color" content="#000000" />
    <link rel="icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    <link rel="android-chrome-192x192" href="/android-chrome-192x192.png" />
    <link rel="android-chrome-512x512" href="/android-chrome-512x512.png" />
    <link rel="manifest" href="/manifest.json" />
    {/* Open Graph tags */}
    <meta property="og:description" content={WEBSITE_DESCRIPTION} />
    <meta property="og:type" content="website" />
    <meta property="og:image" content={WEBSITE_IMAGE} />
    {/* Twitter Card tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content={`@${AUTHOR_USERNAME}`} />
    <meta name="twitter:title" content={WEBSITE_TITLE} />
    <meta name="twitter:description" content={WEBSITE_DESCRIPTION} />
    <meta name="twitter:image" content={WEBSITE_IMAGE} />
    <meta name="twitter:creator" content={`@${AUTHOR_USERNAME}`} />
    <meta name="twitter:url" content={AUTHOR_TWITTER} />
    <meta name="twitter:domain" content={AUTHOR_TWITTER} />
  </>
)

export default MainMetaTags
