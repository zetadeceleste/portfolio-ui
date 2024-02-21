import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";

import RootLayout from "../layouts/RootLayout";

import "../styles/main.css";

type Props = AppProps;

const App: React.FC<Props> = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/logo192.png" />
      <link rel="manifest" href="/manifest.json" />
    </Head>
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  </>
);

export default App;
