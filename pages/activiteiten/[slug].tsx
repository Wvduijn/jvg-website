// Nextjs imports
import { PortableText } from '@portabletext/react';
import { useEffect } from 'react';
import Image from 'next/image';

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
import { galleryBuilder } from '@services/gallery-builder';
import { newsPortableTextComponents } from '@services/newsPtComponents';
import { activityQuery, activitiesSlugsQuery } from '@lib/activityQueries';
import { transformDate } from '@services/date';

// Sanity Client
import client from '@lib/sanity';
import Paragraph from 'components/ui/content/Paragraph';

// Gallery
import 'lightbox.js-react/dist/index.css';
import { SlideshowLightbox, initLightboxJS } from 'lightbox.js-react';

const myPortableTextComponents = newsPortableTextComponents;

const ActivityDetailPage = ({ activityItem, moreActivities, gallery }: any) => {
  console.log('GALLERY', gallery);
  useEffect(() => {
    initLightboxJS(`${process.env.NEXT_PUBLIC_LIGHTBOX_LICENSE}`, 'individual');
  }, []);
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
                {gallery !== null && (
                  <div className="mt-2">
                    <Heading type="h6" weight="font-semibold" color="purple">
                      Foto galerij
                    </Heading>
                    <SlideshowLightbox
                      className="container grid grid-cols-4 gap-2 mx-auto"
                      lightboxIdentifier="lightbox1"
                      framework="next"
                      images={gallery}
                      theme="lightbox"
                    >
                      {gallery.map((image: any, index: number) => {
                        return (
                          <Image
                            key={index}
                            src={image.src}
                            alt={``}
                            priority={true}
                            placeholder="blur"
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8/B8AAssB5CY77SMAAAAASUVORK5CYII="
                            width={200}
                            height={100}
                            style={{
                              objectFit: 'cover',
                              objectPosition: 'center',
                              minHeight: '100px',
                              width: '100%',
                              height: '100px',
                            }}
                            className="rounded-xl"
                            data-lightboxjs="lightbox1"
                          />
                        );
                      })}
                    </SlideshowLightbox>
                    {/* <Gallery photos={galleryImages} /> */}
                  </div>
                )}
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

   // construct the images Array for the photo album if it's present
   const gallery = activity.photoGallery?.images.length
   ? galleryBuilder(activity.photoGallery?.images)
   : null;

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
      gallery
    },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 20,
  };
}

export default ActivityDetailPage;
