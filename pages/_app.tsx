import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { ThemeProvider } from '../context/ThemeContext'
import MainLayout from '../layouts/MainLayout'

import '../styles/main.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()
  const isHomePage = router.pathname === '/'

  if (isHomePage) {
    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    )
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </>
  )
}

export default MyApp
