import React, { useEffect, useMemo } from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import "../styles/global.scss";
import { MailContext, useMailReducer } from "../reducers/mailReducer";
import LoginPage from "./login";
import { auth } from "../firebase";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [state, dispatch] = useMailReducer();
  const context = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch({
          type: "login",
          payload: {
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          },
        });
      } else {
        dispatch({ type: "logout" });
      }
    });
  }, []);

  return (
    <React.StrictMode>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <MailContext.Provider value={context}>
        {state.user ? (
          <Component {...pageProps} />
        ) : (
          <LoginPage {...pageProps} />
        )}
      </MailContext.Provider>
    </React.StrictMode>
  );
};

export default App;
