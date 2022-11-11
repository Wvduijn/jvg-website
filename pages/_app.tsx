import '../styles/globals.scss';
import {
  Roboto_Flex,
  Roboto_Slab,
  Montserrat,
  Open_Sans,
} from '@next/font/google';

import type { AppProps } from 'next/app';
import MainLayout from 'components/layouts/main_layout';

import Head from 'next/head';

// define fonts
const roboto = Roboto_Flex({ variable: '--font-roboto' });
const robotoslab = Roboto_Slab({ variable: '--font-robotoslab' });
const montserrat = Montserrat({ variable: '--font-montserrat' });
const opensans = Open_Sans({ variable: '--font-opensans' });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main
        className={`${roboto.variable} ${robotoslab.variable} ${montserrat.variable} ${opensans.variable}`}
      >
        <Component {...pageProps} />
      </main>
    </MainLayout>
  );
}

export default MyApp;
