import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import "../styles/global.scss";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <React.StrictMode>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <Component {...pageProps} />
    </React.StrictMode>
  );
};

export default App;
