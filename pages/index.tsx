// framework specific imports
import { NextSeo } from 'next-seo';
import type { NextPage } from 'next';

// layout
import MainLayout from 'components/layouts/main_layout';

// components
import About from 'components/sections/About';
import Header from 'components/sections/Header';
import Section from 'components/sections/Section';
import Heading from 'components/ui/content/Heading';
import NewsCard from 'components/ui/news/NewsCard';

// Sanity Client
import client from '@lib/sanity';
import Container from 'components/sections/Container';
import buildUrl from '@services/sanity-urlbuilder';

// Queries
import { indexQuery } from '@lib/newsQueries';

// Types
import { newsProps } from '@lib/types/newsProps';

const Home: NextPage = ({ news }: any) => {
  return (
    <>
      <NextSeo
        title="De Jeugd van Gisteren"
        description="Welkom op de website van de JVG | De jeugd van gisteren. Stichting 'De Jeugd van Gisteren' beheert een senioren
        sociëteit."
      />
      <Header />
      <MainLayout>
        <Section bgColor="bg-white">
          <Container>
            <About />
          </Container>
        </Section>
        <Section bgColor="bg-gray-50" extraClasses="flex grow">
          <Container>
            <Heading
              type="h6"
              weight="font-normal"
              color="text-gray-500"
              extraClasses="mb-0"
            >
              Laatste nieuws
            </Heading>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-8 mt-6">
              {/* map news items to news cards */}
              {news &&
                news.map(
                  ({
                    title,
                    excerpt,
                    mainImage,
                    publishedAt,
                    slug,
                    authorName,
                    authorImage,
                    categories,
                    _id,
                  }: newsProps) => {
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
                  }
                )}
            </div>
          </Container>
        </Section>
      </MainLayout>
    </>
  );
};

export async function getStaticProps() {
  // fetch news items to display on home screen
  const news = await client.fetch(indexQuery);
  return {
    props: {
      news,
    },
  };
}

export default Home;
