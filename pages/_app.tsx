import type { AppProps } from 'next/app'
import Head from 'next/head'

import RootLayout from '../layouts/RootLayout'

import '../styles/main.css'

const App = ({ Component, pageProps }: AppProps) => (
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
