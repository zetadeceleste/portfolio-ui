import type { AppProps } from 'next/app'
import React from 'react'

import RootLayout from '../layouts/RootLayout'

import '../styles/main.css'

type Props = AppProps

const App: React.FC<Props> = ({ Component, pageProps }) => (
  <RootLayout>
    <Component {...pageProps} />
  </RootLayout>
)

export default App
