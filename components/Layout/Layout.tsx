import React from "react";
import Head from "next/head";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

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
    <Sidebar />
    {children}
  </>
);

export default Layout;
