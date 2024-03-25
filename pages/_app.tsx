import type { AppProps } from 'next/app'
import Head from 'next/head'

import { SITE_UNDER_CONSTRUCTION } from '../config'
import MainLayout from '../layouts/MainLayout'

import '../styles/main.css'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <MainLayout isUnderConstruction={SITE_UNDER_CONSTRUCTION}>
      <Component {...pageProps} />
    </MainLayout>
  </>
)

export default MyApp
