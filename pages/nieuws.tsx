// Next imports
import type { NextPage } from 'next';
import Head from 'next/head';

// layout
import MainLayout from '@components/layouts/main_layout';

// Components
import Heading from 'components/ui/content/Heading';
import Section from 'components/sections/Section';
import PageHeader from 'components/sections/PageHeader';
import Container from 'components/sections/Container';
import Paragraph from 'components/ui/content/Paragraph';
import NewsCard from 'components/ui/news/NewsCard';

// Types
import { newsProps } from '@lib/types/newsProps';

// Helpers
import { getRandomImage } from '@services/random-image';
import buildUrl from '@services/sanity-urlbuilder';

// Sanity Client
import client from '@lib/sanity';
import { groq } from 'next-sanity';

const News: NextPage = (props: any) => {
  // get news items from props
  const { news } = props;
  return (
    <>
      <Head>
        <title>Stichting de JVG | Nieuws</title>
        <meta
          name="description"
          content="De Jeugd van Gisteren | Laatste Nieuws"
        />
      </Head>
      <PageHeader color="bg-blue-violet-300" pageName="Nieuws" />
      <MainLayout>
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
            <div className="grid grid-cols-2 gap-8 mt-6">
            {/* map news items to news cards */}
            {news.map(({ title, excerpt, mainImage, publishedAt, slug, authorName, authorImage, categories, _id }: newsProps) => {
              return (
                <NewsCard
                  key={_id}
                  title={title}
                  description={excerpt}
                  imageUrl={buildUrl(mainImage).url()}
                  slug={slug.current}
                  tags={categories}
                  authorName={authorName}
                  authorImage={buildUrl(authorImage).url()}
                  publishedAt={publishedAt}
                />
              );
            })}
            </div>
          </Container>
        </Section>
        </MainLayout>
      
    </>
  );
};

const query = groq`*[_type == "newsPost"] | order(publishedAt desc) 
{ 
  _id,
  title, 
  excerpt, 
  mainImage, 
  publishedAt, 
  slug,
  "authorName": author->name,
  "authorImage": author->image,
  "categories": categories[]->title
}`;

export async function getStaticProps() {
  const news = await client.fetch(query);
  return {
    props: {
      news,
    },
  };
  
}

export default News;
