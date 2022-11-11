// framework specific imports
import type { NextPage } from 'next';
import Image from "next/legacy/image";
import { useRouter } from 'next/router';

// components

import EventCard from 'components/ui/events/EventCard';
import Blog from 'components/sections/Blog';
import About from 'components/sections/About';
import Header from 'components/sections/Header';

// SEO
import SEO from 'components/seo/SEO';

// Framer Motion
import { motion } from 'framer-motion';

// Sanity Client
import client from '@lib/sanity';
import { groq } from 'next-sanity';

const Home: NextPage = (props: any) => {
  const { animals } = props;
  const router = useRouter();

  console.log('ANIMALS FETCHED FROM SANITY', JSON.stringify(animals));

  return (
    <>
      <SEO pageTitle="Homepage" pageDescription="Welcome to my website" />
      <Header />
      <div className="container mx-auto px-8">
        <About />
        <Blog />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <EventCard />
          <EventCard />
        </div>

        {/* Data from Sanity */}
        <div className="grid grid-cols-3 gap-4 p-5">
          {animals.map((animal: any, index: number) => {
            return (
              <div key={index}>
                <h2 className="text-large">{animal.name}</h2>
                <Image
                  src={animal.imageUrl}
                  alt={animal.name}
                  width="100"
                  height="100"
                  layout="responsive"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8/B8AAssB5CY77SMAAAAASUVORK5CYII="
                ></Image>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const animals = await client.fetch(
    `*[_type == "animal"]{name, "imageUrl": image.asset->url}`
  );

  return {
    props: {
      animals,
    },
  };
}

export default Home;
