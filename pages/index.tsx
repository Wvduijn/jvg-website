import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { useRouter } from "next/router";
import client, {
  getClient,
  usePreviewSubscription,
  PortableText,
} from "@lib/sanity";

import { groq } from "next-sanity";

const Home: NextPage = (props: any) => {
  const { postdata, preview } = props;

  const router = useRouter();

  const { data: posts } = usePreviewSubscription(query, {
    initialData: postdata,
    enabled: preview || router.query.preview !== undefined,
  });
  return (
    <>
      {posts &&
        posts.map((post: any) => (
          <article>
            <h3 className="text-lg"> {post.title} </h3>
            <p className="mt-3">{post.excerpt}</p>
          </article>
        ))}
        <div>Powered by{' '} <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /></div>
        
    </>
  );
}

const query = groq`
*[_type == "post"] | order(_createdAt desc) {
  ..., 
  author->,
  categories[]->
}
`;

export async function getStaticProps({ params, preview = false } : any) {
  const post = await getClient(preview).fetch(query);
  console.log('PARAMS', params);

  return {
    props: {
      postdata: post,
      preview,
    },
    revalidate: 10,
  };
}

export default Home
