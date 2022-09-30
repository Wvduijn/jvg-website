// framework specific imports
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

// components
import NavBar from 'components/ui/NavBar';
import Header from 'components/sections/Header';
import Footer from 'components/sections/Footer';
import EventCard from 'components/ui/EventCard';
import PageHeader from 'components/sections/PageHeader';

// Framer Motion
import { motion } from 'framer-motion';

// Types
import { Animal } from 'types/animal';

// Sanity Client
import client from '@lib/sanity';
import { groq } from 'next-sanity';
import Paragraph from 'components/ui/content/Paragraph';

const Home: NextPage = (props: any) => {
  const { postdata, preview, animals } = props;
  const router = useRouter();

  console.log('ANIMALS FETCHED FROM SANITY', JSON.stringify(animals));

  return (
    <>
      <NavBar />
      <Header />
      <PageHeader imageUrl="/images/docks-background.jpg"/>
      <div className="container mx-auto">
        {/* Text Test */}
        <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          delectus quia, rerum nam nesciunt doloribus minima maiores autem, ab
          blanditiis pariatur voluptas dolor explicabo quidem odit officia totam
          suscipit in? Rem nemo tempora et, in numquam sunt, dolore eveniet
          pariatur fugiat nobis deserunt tenetur eum hic facere nulla?
          Asperiores similique porro dolores vitae atque laborum modi unde
          architecto aut iusto! Sequi voluptatibus culpa accusantium nihil,
          vitae neque sunt ut iste beatae molestiae voluptate quibusdam, nobis
          architecto ratione. Quo, quas. Hic dicta dolore voluptatum assumenda
          quas ducimus architecto cupiditate, vel doloremque. Iste quis
          voluptatem, cum hic eveniet nemo quam expedita soluta delectus sequi
          tempore quaerat obcaecati velit, voluptate illum magnam deserunt modi
          sit vel corrupti laudantium? Nam quam magni quae rem? Omnis
          perferendis, nesciunt mollitia excepturi voluptatum illo! Voluptatem
          maiores rem tenetur repudiandae? Incidunt, deserunt! Vitae, ad quo,
          quaerat alias ipsam quisquam, deleniti cumque et reiciendis aliquid
          perspiciatis nesciunt illum aliquam.
        </Paragraph>
        {/* CARD TEST */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <EventCard />
          <EventCard />
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
      <Footer />
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
