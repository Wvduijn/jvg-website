import Button from 'components/ui/buttons/Button';
import Heading from 'components/ui/content/Heading';
import Paragraph from 'components/ui/content/Paragraph';
import Link from 'next/link';
import Image from 'next/image';

const About = () => {
  return (
    <section className="pt-6 lg:pt-[32px] overflow-hidden">
      <div className="container">
        <div className="flex flex-wrap justify-between items-center -mx-4">
          <div className="w-full lg:w-5/12 px-4">
            <div className="flex items-center -mx-3 sm:-mx-4 order-2">
              <div className="w-full xl:w-1/2 px-3 sm:px-4">
                <div className="py-3 sm:py-4">
                  <Image
                    src={`/images/fotos/interieur_zaal_2.jpg`}
                    alt={`sfeer foto van de zaal`}
                    priority={true}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8/B8AAssB5CY77SMAAAAASUVORK5CYII="
                    width={100}
                    height={200}
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center',
                      minHeight: '200px',
                      width: '100%',
                      height: '200px'
                    }}
                    className="rounded-xl"
                  />  
                </div>
                <div className="py-3 sm:py-4">
                <Image
                    src={`/images/sfeer/cards.jpg`}
                    alt={`sfeer foto`}
                    priority={true}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8/B8AAssB5CY77SMAAAAASUVORK5CYII="
                    width={100}
                    height={200}
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center',
                      minHeight: '200px',
                      width: '100%',
                      height: '200px'
                    }}
                    className="rounded-xl"
                  />
                </div>
              </div>
              <div className="w-full xl:w-1/2 px-3 sm:px-4">
                <div className="my-4 relative z-10">
                <Image
                    src={`/images/fotos/interieur_zaal.jpg`}
                    alt={`sfeer foto van de zaal`}
                    priority={true}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8/B8AAssB5CY77SMAAAAASUVORK5CYII="
                    width={100}
                    height={200}
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center',
                      minHeight: '200px',
                      width: '100%',
                      height: '200px'
                    }}
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 xl:w-6/12 px-4 order-first">
            <div className="lg:mt-0">
              <span className="font-robotoslab font-semibold text-lg text-primary mb-2 block">
                Gezelligheid hoeft niet duur te zijn
              </span>
              <Heading
                type="h3"
                weight="font-semibold"
                color="purple"
                extraClasses=""
              >
                Over 'De Jeugd van Gisteren'
              </Heading>
              <Paragraph>
                Stichting 'De Jeugd van Gisteren' beheert een senioren
                sociëteit. Wij zijn al ruim 30 jaar gevestigd in ons eigen
                gebouw aan de Beemsterstraat 4 te Hoofddorp. Onze belangrijkste
                taak is het faciliteren van een veilige en gezellige omgeving
                waarin senioren zich op een prettige manier kunnen ontspannen.
              </Paragraph>
              <Paragraph>
                Als stichting organiseren wij niet zelf de activiteiten, wij
                maken ze mogelijk. Alle activiteiten die in ons gebouw
                plaatsvinden worden georganiseerd door zelfstandige verenigingen
                en clubs.
              </Paragraph>
              <Paragraph>
                <span className="font-bold">
                  Ons motto: Gezelligheid hoeft niet duur te zijn!
                </span>
              </Paragraph>
              <Button color="purple" extraClasses="" size="md">
                <Link href={'/activiteiten'}>Onze Activiteiten</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
