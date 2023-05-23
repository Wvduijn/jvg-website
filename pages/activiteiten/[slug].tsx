// Nextjs imports
import { PortableText } from '@portabletext/react';

// layout which handles animation
import MainLayout from '@components/layouts/main_layout';

// Components
import Container from 'components/sections/Container';
import PageHeader from 'components/sections/PageHeader';
import Section from 'components/sections/Section';
import Heading from 'components/ui/content/Heading';
import EventCard from '@components/ui/events/EventCard';
import ContactInfo from '@components/ui/contact/ContactInfo';

// Types
import { activityProps } from '@lib/types/activityProps';

// Helpers
import buildUrl from '@services/sanity-urlbuilder';
import { newsPortableTextComponents } from '@services/newsPtComponents';
import { activityQuery, activitiesSlugsQuery } from '@lib/activityQueries';
import { transformDate } from '@services/date';

// Sanity Client
import client from '@lib/sanity';
import Paragraph from 'components/ui/content/Paragraph';

const myPortableTextComponents = newsPortableTextComponents;

const ActivityDetailPage = ({ activityItem, moreActivities }: any) => {
  return (
    <>
      <PageHeader
        pageName={activityItem.title}
        featuredImage={buildUrl(activityItem.mainImage).url()}
      />
      <MainLayout>
        <Section bgColor="bg-white">
          <Container>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="col-span-2">
                <PortableText
                  value={activityItem.description}
                  components={myPortableTextComponents}
                />
              </div>
              <aside>
                <div className="bg-slate-50 rounded-xl p-5 grid grid-flow-row gap-0">
                  <Heading type="h6" weight="font-semibold" color="purple">
                    Informatie
                  </Heading>
                  <ContactInfo info ="Heeft u interesse in deze activiteit of wilt u meer informatie? Neem dan gerust contact met ons op." />
                </div>
              </aside>
            </div>
          </Container>
        </Section>
        {/* Indien meer activiteiten */}
        {moreActivities.length > 0 && (
          <Section bgColor="bg-gradient-to-t from-kombu-200 to-kombu-500 grow">
            <Container>
              <Heading type="h3" color="white" weight="font-semibold">
                Andere activiteiten
              </Heading>
              <hr className="my-2 w-24 md:w-48 h-1 bg-gray-100 rounded border-0 dark:bg-gray-100"></hr>
              <div className="grid grid-cols-2 gap-8 mt-6">
                {/* map news items to news cards */}
                {moreActivities.map(
                  ({
                    title,
                    excerpt,
                    mainImage,
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
            </Container>
          </Section>
        )}
      </MainLayout>
    </>
  );
};

export async function getStaticPaths() {
  // When this is true (in preview environments) don't
  // prerender any static pages
  // (faster builds, but slower initial page load)
  if (process.env.SKIP_BUILD_STATIC_GENERATION) {
    return {
      paths: [],
      fallback: 'blocking',
    };
  }

  // Call the external API endpoint to get newsposts
  const activities = await client.fetch(activitiesSlugsQuery);

  // Get the paths we want to prerender based on activities item slug
  // In production environments, prerender all pages
  // (slower builds, but faster initial page load)
  const paths = activities.map((slug: string) => ({
    params: { slug },
    fallback: true,
  }));

  // { fallback: false } means other routes should 404
  return { paths, fallback: true };
}

export async function getStaticProps(context: any) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = '' } = context.params;
  const { activity, moreActivities, relatedActivities } = await client.fetch(
    activityQuery,
    { slug }
  );

  // When slug is not found return a 404
  if (!activity) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      activityItem: activity,
      moreActivities: moreActivities,
    },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 20,
  };
}

export default ActivityDetailPage;
