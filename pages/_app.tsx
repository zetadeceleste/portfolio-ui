import type { AppProps } from 'next/app'
import Head from 'next/head'

import MainLayout from '../layouts/MainLayout'

import '../styles/main.css'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  </>
)

export default MyApp
