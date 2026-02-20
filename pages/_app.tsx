import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react'

import { siteUnderConstruction } from '../config'
import { ThemeProvider } from '../context/ThemeContext'
import MainLayout from '../layouts/MainLayout'

import '../styles/main.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    // Hide loading overlay after hydration
    const loadingEl = document.getElementById('__loading')
    if (loadingEl) {
      loadingEl.classList.add('hidden')
      // Remove from DOM after transition
      setTimeout(() => {
        loadingEl.remove()
      }, 200)
    }
  }, [])

  return (
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
}

export default MyApp
