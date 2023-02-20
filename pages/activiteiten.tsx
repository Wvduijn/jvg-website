// Next imports
import { NextSeo } from 'next-seo';
import type { NextPage } from 'next';
import data from '../data/activiteiten.json'
// layout which handles animation
import MainLayout from '@components/layouts/main_layout';

// Components
import Heading from 'components/ui/content/Heading';
import Section from 'components/sections/Section';
import PageHeader from 'components/sections/PageHeader';
import Container from 'components/sections/Container';
import Paragraph from 'components/ui/content/Paragraph';
import EventCard from 'components/ui/events/EventCard';
import WeekTable from '@components/ui/weektable/WeekTable';

// Types
import { activityProps } from '@lib/types/activityProps';

// Helpers
import buildUrl from '@services/sanity-urlbuilder';
import { indexQuery } from '@lib/activityQueries';
import { transformDate } from '@services/date';

// Sanity Client
import client from '@lib/sanity';

const Activities: NextPage = (props: any) => {
  // get activities
  const { activities } = props;

  return (
    <>
      <NextSeo
        title="De Jeugd van Gisteren | Activiteiten"
        description="Overzicht van alle vaste activiteiten binnen JvG zoals nu vastgelegd"
      />
      <PageHeader color="bg-saffron-300" pageName="Activiteiten" />
      <MainLayout>
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
              Overzicht van alle vaste activiteiten binnen JvG zoals nu
              vastgelegd.
            </Heading>
            <Paragraph>
              De JVG organiseert activiteiten op allerlei gebieden. Dit kunnen
              activiteiten zijn op hobby gebied, maar ook om de sociale
              contacten te onderhouden. Sommige zijn er wekelijks, andere
              maandelijks. Gedurende het jaar worden er nog een aantal speciale
              activiteiten georganiseerd. Voorbeelden hiervan zijn De kerst
              instuif of de vrijheidsmaaltijd.
            </Paragraph>
           
            <Heading
              type="h6"
              weight="font-normal"
              color="text-saffron-500"
              extraClasses="mb-0"
            >
              Een overzicht van onze aankomende activiteiten:
            </Heading>

            {/* Indien er meer activiteiten zijn render dan ook een selectie van deze */}
            <hr className="my-8 h-px bg-gray-300 border-0"></hr>
            <div className="flex flex-wrap -mx-4 mb-6">
              {/* map activities */}
              {activities.map(
                ({
                  title,
                  excerpt,
                  mainImage,
                  publishedAt,
                  slug,
                  categories,
                  activityDate,
                  _id,
                }: activityProps) => {
                  return (
                    <EventCard
                      key={_id}
                      title={title}
                      description={excerpt}
                      imageUrl={buildUrl(mainImage).url()}
                      imageAlt={mainImage.alt}
                      slug={slug.current}
                      tags={categories}
                      date={transformDate(activityDate)}
                    />
                  );
                }
              )}
            </div>
            <Heading
              type="h6"
              weight="font-normal"
              color="text-saffron-500"
              extraClasses="mb-0"
            >
              Een overzicht van onze vaste activiteiten vindt u hieronder:
            </Heading>
            <WeekTable data={data} />
          </Container>
        </Section>
      </MainLayout>
    </>
  );
};

export async function getStaticProps() {
  const activities = await client.fetch(indexQuery);

  return {
    props: {
      activities,
    },
  };
}

export default Activities;
