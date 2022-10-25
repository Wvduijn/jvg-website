// This page can be used to test newly created components
import Button from 'components/ui/buttons/Button';
import Heading from 'components/ui/content/Heading';
import Section from 'components/sections/Section';
import type { NextPage } from 'next';
import Head from 'next/head';

const Playground: NextPage = (props: any) => {
  return (
    <>
      <Head>
        <title>Component Playground</title>
        <meta
          name="description"
          content="Page meant for testing out components while in development!"
        />
      </Head>
      <div>
        <Heading type="h1" weight="font-bold" color="purple">
          Hallo
        </Heading>
        <Heading type="h2"  weight="font-semibold" color="orange">
          Hallo 2
        </Heading>
        <Button color="purple" extraClasses='m-5' size='xl'>Hello Button</Button>
       <Section bgColor='bg-saffron-500' dividerColor='fill-white' dividerPosition='top' dividerType="wave">
        <p>yolo dit is een section</p>
       </Section>
      </div>
    </>
  );
};

export default Playground;
