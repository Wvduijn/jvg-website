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

// Types
import { activityProps } from '@lib/types/activityProps';

// Helpers
import { getRandomImage } from '@services/random-image';
import buildUrl from '@services/sanity-urlbuilder';
import { indexQuery } from '@lib/activityQueries';

// Sanity Client
import client from '@lib/sanity';
import { groq } from 'next-sanity';

const News: NextPage = (props: any) => {
  // get news items from props
  const { activities } = props;

  return (
    <>
      <Head>
        <title>Stichting de JVG | Activiteiten</title>
        <meta
          name="description"
          content="De Jeugd van Gisteren | Activiteiten"
        />
      </Head>
      <PageHeader imageUrl={getRandomImage()} pageName="Activiteiten" />

      <Section bgColor="bg-white">
        <Container>
          <Heading
            type="h2"
            weight="font-semibold"
            color="purple"
            extraClasses="!mb-0"
          >
            Activiteiten
          </Heading>
          <Heading
            type="h6"
            weight="font-normal"
            color="text-gray-500"
            extraClasses="mb-0"
          >
            Opsomming van alle vaste activiteiten binnen JvG zoals nu
            vastgelegd.
          </Heading>
          <Paragraph>
            De JVG organiseert activiteiten op allerlei gebieden.
            Dit kunnen activiteiten zijn op hobby gebied, maar ook om de sociale contacten te onderhouden. 
            Sommige zijn er wekelijks, andere maandelijks. Gedurende het jaar worden er
            nog een aantal speciale activiteiten georganiseerd. Voorbeelden hiervan zijn
            De kerst instuif of de vrijheidsmaaltijd. 
          </Paragraph>
          <Paragraph>
            Een overzicht van onze activiteiten vindt u hieronder:
          </Paragraph>

          {/* NEWS ITEMS */}
          <hr className="my-8 h-px bg-gray-300 border-0"></hr>
          <div className="flex flex-wrap -mx-4">
            {/* map activities */}
            {activities.map(
              ({
                title,
                excerpt,
                mainImage,
                publishedAt,
                slug,
                categories,
                _id,
              }: activityProps) => {
                return <div>{title}</div>;
              }
            )}
          </div>
        </Container>
      </Section>
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
  "categories": categories[]->title
}`;

export async function getStaticProps() {
  const activities = await client.fetch(indexQuery);
  return {
    props: {
      activities,
    },
  };
}

export default News;
