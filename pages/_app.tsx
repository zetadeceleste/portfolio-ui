import type { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'

import RootLayout from '../layouts/RootLayout'

import '../styles/main.css'

type Props = AppProps

const App: React.FC<Props> = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  </>
)

export default App
