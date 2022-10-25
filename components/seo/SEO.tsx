import Head from 'next/head';

export type componentProps = {
  pageTitle: string;
  pageDescription: string;
};

// expand this with whatever meta tags we need
const SEO = ({ pageTitle, pageDescription }: componentProps) => {
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
    </Head>
  );
};

export default SEO;
