// Fonts and Styles
import '../styles/globals.scss';
import {
  Roboto_Flex,
  Roboto_Slab,
  Montserrat,
  Open_Sans,
} from '@next/font/google';

import type { AppProps } from 'next/app';

// components
import MainLayout from 'components/layouts/main_layout';
import NavBar from 'components/ui/navigation/NavBar';
import Footer from 'components/sections/Footer';

// SEO
import { DefaultSeo } from 'next-seo';
import SEO from '../seo/next-seo.config';
import Head from 'next/head';

// Framer motion
import { AnimatePresence } from 'framer-motion';

// define fonts
const roboto = Roboto_Flex({ variable: '--font-roboto' });
const robotoslab = Roboto_Slab({ variable: '--font-robotoslab' });
const montserrat = Montserrat({ variable: '--font-montserrat' });
const opensans = Open_Sans({ variable: '--font-opensans' });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="images/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="images/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="images/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="images/favicon/site.webmanifest" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="flex min-h-screen flex-col">
        <NavBar />
        <main
          className={`${roboto.variable} ${robotoslab.variable} ${montserrat.variable} ${opensans.variable} flex flex-col grow`}
        >
          <AnimatePresence
            mode="wait"
            initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}
          >
            <Component {...pageProps} />
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
