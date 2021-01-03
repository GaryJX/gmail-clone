import React, { useContext } from "react";
import Head from "next/head";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import ComposeMail from "./ComposeMail/ComposeMail";
import { MailContext } from "../../reducers/mailReducer";
import styles from "./Layout.module.scss";

type Props = {
  children?: React.ReactNode;
  title?: string;
};

const Layout: React.FC<Props> = ({ children, title = "Document Title" }) => {
  const { state } = useContext(MailContext);

  return (
    <div className={styles.layout}>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <div className={styles.contentContainer}>
        <Sidebar />
        <main className={styles.content}>{children}</main>
        {state.openComposeMessage && <ComposeMail />}
      </div>
    </div>
  );
};

export default Layout;
