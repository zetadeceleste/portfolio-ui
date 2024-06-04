import type { AppProps } from 'next/app'
import Head from 'next/head'

import { siteUnderConstruction } from '../config'
import { ThemeProvider } from '../context/ThemeContext'
import MainLayout from '../layouts/MainLayout'

import '../styles/main.css'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <ThemeProvider>
      <MainLayout isUnderConstruction={siteUnderConstruction}>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  </>
)

export default MyApp
