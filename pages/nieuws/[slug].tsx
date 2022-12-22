// Nextjs imports
import { useRouter } from 'next/router';
import { PortableText } from '@portabletext/react';
import { Head } from 'next/document';

// Components
import Container from 'components/sections/Container';
import PageHeader from 'components/sections/PageHeader';
import Section from 'components/sections/Section';
import Heading from 'components/ui/content/Heading';
import NewsCard from 'components/ui/news/NewsCard';

// Types
import { newsProps } from '@lib/types/newsProps';

// Helpers
import buildUrl from '@services/sanity-urlbuilder';
import { newsPortableTextComponents } from '@services/newsPtComponents';
import { postQuery, postSlugsQuery } from '@lib/newsQueries';

// Sanity Client
import client from '@lib/sanity';
import Paragraph from 'components/ui/content/Paragraph';

// TODO properly type newsitems - extract to helper Object.
const myPortableTextComponents = newsPortableTextComponents;

const NewsDetailPage = ({ newsitem, moreNews }: any) => {
  const router = useRouter();
  return (
    <>
      <PageHeader pageName={newsitem.title} />
      <Section bgColor="bg-white">
        <Container>
          <div className="grid grid-rows-1 grid-cols-3 gap-8">
            <div className="col-span-2">
              <PortableText
                value={newsitem.body}
                components={myPortableTextComponents}
              />
            </div>
            <aside>
              <div className="bg-slate-50 rounded-xl p-5 grid grid-flow-row gap-0">
                <Heading type="h6" weight="font-semibold" color="purple">
                  Informatie
                </Heading>
                <Paragraph>
                  Standaard contact informatie component toevoegen
                </Paragraph>
              </div>
            </aside>
          </div>
        </Container>
      </Section>
      <Section bgColor="bg-gradient-to-t from-kombu-200 to-kombu-500 grow">
        <Container>
          <Heading type="h3" color="white" weight="font-semibold">
            Meer nieuws
          </Heading>
          <hr className="my-2 w-24 md:w-48 h-1 bg-gray-100 rounded border-0 dark:bg-gray-100"></hr>
          <div className="grid grid-cols-2 gap-8 mt-6">
            {/* map news items to news cards */}
            {moreNews.map(
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
  const news = await client.fetch(postSlugsQuery);

  // Get the paths we want to prerender based on news item slug
  // In production environments, prerender all pages
  // (slower builds, but faster initial page load)
  const paths = news.map((slug: string) => ({
    params: { slug },
    fallback: true,
  }));

  // { fallback: false } means other routes should 404
  return { paths, fallback: true };
}

export async function getStaticProps(context: any) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = '' } = context.params;
  const { news, moreNews, relatedNews } = await client.fetch(postQuery, { slug });

  // When slug is not found return a 404
  if (!news) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      newsitem: news,
      moreNews: moreNews
    },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  };
}

export default NewsDetailPage;
