import React, { ReactNode } from 'react';
import Head from 'next/head';

import NavBar from 'components/ui/NavBar';
import Footer from 'components/sections/Footer';

interface Props {
  children?: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />
      {children}
      <Footer />
    </main>
  );
};

export default MainLayout;
