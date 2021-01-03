import React, { useMemo } from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import "../styles/global.scss";
import { MailContext, useMailReducer } from "../reducers/mailReducer";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [state, dispatch] = useMailReducer();
  const context = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  return (
    <React.StrictMode>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <MailContext.Provider value={context}>
        <Component {...pageProps} />
      </MailContext.Provider>
    </React.StrictMode>
  );
};

export default App;
