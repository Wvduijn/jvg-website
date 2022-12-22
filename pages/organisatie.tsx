// Next imports
import type { NextPage } from 'next';

// Components
import Heading from 'components/ui/content/Heading';
import Section from 'components/sections/Section';
import GradientText from 'components/ui/content/GradientText';
import PageHeader from 'components/sections/PageHeader';
import Container from 'components/sections/Container';
import Paragraph from 'components/ui/content/Paragraph';
import Complaint from '@components/ui/complaint/Complaint';

// Helpers
import { getRandomImage } from '@services/random-image';
import SEO from 'components/seo/SEO';
import Board from 'components/ui/organisation/Board';

const Playground: NextPage = (props: any) => {
  return (
    <>
      <SEO
        pageTitle="JVG | Organisatie"
        pageDescription="De organisatie van de JVG"
      />
      <PageHeader
        color="bg-blue-violet-300"
        pageName="Organisatie"
      />

      <Section bgColor="bg-white">
        <Container>
          <Heading type="h2" weight="font-bold" color="purple">
            Rechtsvorm
          </Heading>

          <Paragraph>
            De rechtsvorm van 'De Jeugd van Gisteren' (JvG) is een stichting.
            JvG heeft een bestuur bestaande uit vrijwilligers.
            <br />
            Deze bestuursleden worden in functie benoemd.
          </Paragraph>
          {/* Het bestuur */}
          <Board />

          <Heading type="h6" weight="font-bold" color="purple">
            Vergoeding
          </Heading>
          <Paragraph>
            De leden van het bestuur ontvangen geen beloning voor hun
            werkzaamheden. Zij hebben wel recht op een jaarlijkse vergoeding
            voor de door hen gemaakte kosten.
          </Paragraph>
          <Paragraph>
            Naast het bestuur bestaat JvG uit een aantal enthousiaste en
            gemotiveerde vrijwilligers. Zij staan als gastheer/vrouw achter de
            bar, houden het pand schoon, bewaken de voorraad en vullen deze
            tijdig aan en voren onderhoud uit aan het pand en de inrichting.
          </Paragraph>
          <div className="mb-6 h-96 w-full rounded-xl bg-gray-50">
            image hier
          </div>
          
        
          <Complaint color="bg-saffron-400" />

          {/* <ul className="list-inside list-disc font-roboto text-gray-500 my-6">
            <li>Yolobird 500 text</li>
          </ul> */}
        </Container>
      </Section>
    </>
  );
};

export default Playground;
