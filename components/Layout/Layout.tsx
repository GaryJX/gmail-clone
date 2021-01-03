import React from "react";
import Head from "next/head";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import styles from "./Layout.module.scss";

type Props = {
  children?: React.ReactNode;
  title?: string;
};

const Layout: React.FC<Props> = ({ children, title = "Document Title" }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <Header />
    <div className={styles.contentContainer}>
      <Sidebar />
      <main className={styles.content}>{children}</main>
    </div>
  </>
);

export default Layout;
