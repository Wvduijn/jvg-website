import React, { ReactNode } from "react";
import Head from "next/head";

interface Props {
  children?: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Layouts Example</title>
      </Head>
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
