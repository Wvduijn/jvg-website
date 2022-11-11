import { useRouter } from 'next/router';

// Sanity Client
import client from '@lib/sanity';
import { groq } from 'next-sanity';

// TODO properly type newsitems

const NewsDetailPage = ({newsitem}:any) => {
  const router = useRouter();
  return <div>{newsitem?.slug?.current}</div>;
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

  // Call an external API endpoint to get posts 
  const news = await client.fetch(
    `*[_type == "newsitem" && defined(slug.current)][].slug.current`
  )

  // Get the paths we want to prerender based on news item slug
  // In production environments, prerender all pages
  // (slower builds, but faster initial page load)
  const paths = news.map((slug: string) => ({params: {slug}}))

  // { fallback: false } means other routes should 404
  return { paths, fallback: true };

  // return {
  //   paths: [{ params: { id: 'nieuws titel' } }],
  //   fallback: true,
  // };
}

export async function getStaticProps(context: any) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params
  const newsitem = await client.fetch(`
    *[_type == "newsitem" && slug.current == $slug][0]
  `, { slug })
  return {
    props: {
      newsitem
    }
  }
}

export default NewsDetailPage;
