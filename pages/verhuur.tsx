// Next imports
import type { NextPage } from 'next';

// layout which handles animation
import MainLayout from '@components/layouts/main_layout';

// Components
import Heading from 'components/ui/content/Heading';
import Section from 'components/sections/Section';
import PageHeader from 'components/sections/PageHeader';
import Container from 'components/sections/Container';
import Paragraph from 'components/ui/content/Paragraph';
import Hyperlink from '@components/ui/content/Hyperlink';

// Helpers
import SEO from 'components/seo/SEO';

const Rental: NextPage = (props: any) => {
  return (
    <>
      <SEO
        pageTitle="JVG | Verhuurmogelijkheden"
        pageDescription="De verhuurmogelijkheden van de JVG"
      />
      <PageHeader color="bg-blue-violet-300" pageName="Verhuurmogelijkheden" />
      <MainLayout>
        <Section bgColor="bg-white">
          <Container>
            <Heading type="h2" weight="font-bold" color="purple">
              Verhuurmogelijkheden
            </Heading>

            <Paragraph>
              U kunt onze zaalruimte huren op de dagen/avonden die nog vrij
              zijn. De zaal wordt per dagdeel verhuurd, ochtend, middag of
              avond. Uiteraard is het mogelijk, mits vrij, de zaal voor een
              ochtend plus middag te huren of zelfs voor de gehele dag.
              Voorwaarde is dat JvG de barvrijwilliger levert en dat u alle
              consumpties van JvG afneemt. Onze prijzen houden wij overigens
              bewust laag.
            </Paragraph>
            <Paragraph>
              Catering kunt u in overleg zelf organiseren of eventueel ook door
              ons laten verzorgen. JvG heeft geen professionele keuken en is wat
              betreft catering in de mogelijkheden beperkt.
            </Paragraph>

            <Heading type="h6" weight="font-bold" color="purple">
              De zaal
            </Heading>
            <Paragraph>
              In de zaal staan 20 tafels en per tafel 4 stoelen. In deze
              opstelling kunnen wij 80 personen ontvangen. Indien we de tafels
              verwijderen en u zou kiezen voor een zogenaamde bioscoop
              opstelling, dan is het aantal zitplaatsen uit te breiden tot
              maximaal 100.
            </Paragraph>

            <div className="mb-6 h-96 w-full rounded-xl bg-gray-50">
              image hier
            </div>
            <Heading type="h6" weight="font-bold" color="purple">
              Heeft u interesse?
            </Heading>
            <Paragraph>
              Neemt u gerust contact op en we kunnen samen kijken naar de
              mogelijkheden. <br />
              Dit kan via {' '}
              <Hyperlink
                href="mailto:contact@jeugdvangisteren.nl"
                text="contact@jeugdvangisteren.nl"
                target="_blank"
                title="Contact de jeugd van gisteren"
                color="text-saffron-500"
                hoverColor="hover:text-saffron-400"
              ></Hyperlink> of via telefoonnummer: 0612345678
            </Paragraph>
          </Container>
        </Section>
      </MainLayout>
    </>
  );
};

export default Rental;
