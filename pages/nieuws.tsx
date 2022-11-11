// Next imports
import type { NextPage } from 'next';
import Head from 'next/head';

// Components
import Heading from 'components/ui/content/Heading';
import Section from 'components/sections/Section';
import PageHeader from 'components/sections/PageHeader';
import Container from 'components/sections/Container';
import Paragraph from 'components/ui/content/Paragraph';
import NewsCard from 'components/ui/news/NewsCard';

// Helpers
import { getRandomImage } from '@services/random-image';

// Sanity Client
import client from '@lib/sanity';
import { groq } from 'next-sanity';

const News: NextPage = (props: any) => {
  const { news } = props;

  console.log('NEWS FETCHED FROM SANITY', JSON.stringify(news));

  return (
    <>
      <Head>
        <title>Stichting de JVG | Nieuws</title>
        <meta
          name="description"
          content="De Jeugd van Gisteren | Laatste Nieuws"
        />
      </Head>
      <PageHeader imageUrl={getRandomImage()} pageName="Nieuws" />
      <div>
        <Section bgColor="bg-white">
          <Container>
            <Heading
              type="h2"
              weight="font-semibold"
              color="purple"
              extraClasses="!mb-0"
            >
              Laatste nieuws
            </Heading>
            <Heading
              type="h6"
              weight="font-normal"
              color="text-gray-500"
              extraClasses="mb-0"
            >
              over het reilen en zeilen binnen de Stichting
            </Heading>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              enim, porro inventore aliquam accusantium ipsum laudantium
              voluptatum laborum mollitia. Vero odit, distinctio sed excepturi
              illo ipsa esse inventore deleniti et.
            </Paragraph>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              enim, porro inventore aliquam accusantium ipsum laudantium
              voluptatum laborum mollitia. Vero odit, distinctio sed excepturi
              illo ipsa esse inventore deleniti et.
            </Paragraph>

            {/* NEWS ITEMS */}
            <hr className="my-8 h-px bg-gray-300 border-0"></hr>
            <div className="flex flex-wrap -mx-4">
              <NewsCard />
              <NewsCard />
              <NewsCard />
            </div>
          </Container>
        </Section>
      </div>
    </>
  );
};

const query = groq`*[_type == "newsPost"]{
  title, 
  "imageUrl": image.asset->url,
  slug,
  excerpt,
  body,
  author,
  mainImage,
  categories,
  publishedAt,
}`

export async function getStaticProps() {
  const news = await client.fetch( query );

  return {
    props: {
      news,
    },
  };
}

export default News;
