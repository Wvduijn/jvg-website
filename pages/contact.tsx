import { NextSeo } from 'next-seo';
import Image from 'next/image';

import MainLayout from '@components/layouts/main_layout';
import Container from '@components/sections/Container';
import PageHeader from '@components/sections/PageHeader';
import Section from '@components/sections/Section';
import Heading from '@components/ui/content/Heading';
import Paragraph from '@components/ui/content/Paragraph';

const Contact = () => {
  return (
    <>
      <NextSeo
        title="De Jeugd van Gisteren | Contact"
        description="Voor alle vragen neem gerust contact op"
      />
      <PageHeader color="bg-blue-violet-300" pageName="Contact" />
      <MainLayout>
        <Section bgColor="bg-white">
          <Container>
            <Heading type="h2" weight="font-bold" color="purple">
              Contact
            </Heading>
            <Paragraph>
              Voor alle vragen over de mogelijkheden bij JvG, de zaalhuur,
              activiteiten, etc. kunt u terecht bij de voorzitter JvG.
            </Paragraph>
            <div className="flex flex-wrap mt-8">
              <div className="w-full md:w-1/3">
                <h2 className="text-lg font-medium">Email</h2>
                <Paragraph>info@jeugdvangisteren.nl</Paragraph>
              </div>
              <div className="w-full md:w-1/3">
                <h2 className="text-lg font-medium">Telefoon</h2>
                <Paragraph>555-555-5555</Paragraph>
              </div>
              <div className="w-full md:w-1/3">
                <h2 className="text-lg font-medium">Adres</h2>
                <Paragraph>Beemsterstraat 4</Paragraph>
                <Paragraph>2131 ZB Hoofddorp</Paragraph>
              </div>
              <Image
                src="/images/sfeer/cards.jpg"
                alt="sfeer foto"
                width={600}
                height={400}
                priority={true}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
            </div>
          </Container>
        </Section>
      </MainLayout>
    </>
  );
};

export default Contact;
