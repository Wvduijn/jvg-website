// This page can be used to test newly created components
import Button from 'components/ui/buttons/Button';
import Heading from 'components/ui/content/Heading';
import Section from 'components/sections/Section';
import type { NextPage } from 'next';
import Head from 'next/head';
import GradientText from 'components/ui/content/GradientText';

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
        <GradientText type='h1' colorFrom='from-saffron-500' colorTo='to-blue-500' direction='br' >Ik ben een vette Gradient Text</GradientText>
        <GradientText type='h1' colorFrom='from-saffron-100' colorTo='to-saffron-500' direction='tl' >Ik ben een vette Gradient Text</GradientText>
        <GradientText type='h2' colorFrom='from-blue-violet-100' colorTo='to-blue-violet-500' direction='tr' >Ik ben een vette Gradient Text</GradientText>
        <GradientText type='h3' colorFrom='from-blue-violet-500' colorTo='to-blue-violet-500' colorVia='via-saffron-300' direction='r' >Ik ben een vette Gradient Text</GradientText>
        <Button color="purple" extraClasses='m-5' size='xl'>Hello Button</Button>
       <Section bgColor='bg-saffron-500' dividerColor='fill-white' dividerPosition='top' dividerType="wave">
        <p>yolo dit is een section</p>
       </Section>
      </div>
    </>
  );
};

export default Playground;
