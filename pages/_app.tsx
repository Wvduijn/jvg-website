import '../styles/globals.scss';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='flex min-h-screen flex-col'>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
