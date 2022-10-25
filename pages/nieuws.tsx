import Button from 'components/ui/buttons/Button';
import Heading from 'components/ui/content/Heading';
import Section from 'components/sections/Section';
import type { NextPage } from 'next';
import Head from 'next/head';
import PageHeader from 'components/sections/PageHeader';

import { getRandomImage } from '@services/random-image';
import Container from 'components/sections/Container';
import Paragraph from 'components/ui/content/Paragraph';

const News: NextPage = (props: any) => {
  return (
    <>
      <Head>
        <title>Component Playground</title>
        <meta
          name="description"
          content="De Jeugd van Gisteren | Laatste Nieuws"
        />
      </Head>
      <PageHeader imageUrl={getRandomImage()} pageName="Laatste Nieuws" />
      <div>
        <Section bgColor="bg-ivory-500">
          <Container>
            <Heading
              type="h2"
              weight="font-semibold"
              color="purple"
              extraClasses="mb-1"
            >
              Laatste nieuws
            </Heading>
            <Heading
              type="h6"
              weight="font-semibold"
              color="text-gray-500"
              extraClasses="mb-0"
            >
              subtiteltje
            </Heading>
            <div className="grid grid-cols-2 gap-20">
              <div>
                <Paragraph>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis enim, porro inventore aliquam accusantium ipsum
                  laudantium voluptatum laborum mollitia. Vero odit, distinctio
                  sed excepturi illo ipsa esse inventore deleniti et.
                  Cupiditate, quibusdam? Repudiandae, cupiditate possimus. Iusto
                  deserunt similique corporis, nam, inventore quos maxime error
                  ea, facilis nisi quis voluptate earum. Accusamus cupiditate
                  repellat eum repellendus soluta debitis neque reiciendis
                  voluptatum? Ipsum magnam asperiores voluptatem molestiae eos
                  labore dolorem, pariatur quisquam rerum consequatur sed autem
                  obcaecati veritatis perferendis distinctio reprehenderit
                  corporis aperiam a quia maiores error adipisci, saepe
                  repellendus cupiditate. Quas. Cum delectus temporibus hic
                  accusantium iste eaque dignissimos provident nam
                  exercitationem, a repellendus repudiandae maxime culpa neque
                  similique ex rerum quidem pariatur eligendi perferendis
                  blanditiis quae vel? Illum, non eligendi. Architecto, facere
                  assumenda soluta adipisci unde maxime quibusdam dolorem
                  voluptate, accusamus temporibus animi veritatis laborum sit.
                  Officiis, ratione cumque aliquid dolor blanditiis impedit
                  eaque sed sapiente in excepturi, consequuntur magnam?
                </Paragraph>
              </div>
              <div>
                <Paragraph>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis enim, porro inventore aliquam accusantium ipsum
                  laudantium voluptatum laborum mollitia. Vero odit, distinctio
                  sed excepturi illo ipsa esse inventore deleniti et.
                  Cupiditate, quibusdam? Repudiandae, cupiditate possimus. Iusto
                  deserunt similique corporis, nam, inventore quos maxime error
                  ea, facilis nisi quis voluptate earum. Accusamus cupiditate
                  repellat eum repellendus soluta debitis neque reiciendis
                  voluptatum? Ipsum magnam asperiores voluptatem molestiae eos
                  labore dolorem, pariatur quisquam rerum consequatur sed autem
                  obcaecati veritatis perferendis distinctio reprehenderit
                  corporis aperiam a quia maiores error adipisci, saepe
                  repellendus cupiditate. Quas. Cum delectus temporibus hic
                  accusantium iste eaque dignissimos provident nam
                  exercitationem, a repellendus repudiandae maxime culpa neque
                  similique ex rerum quidem pariatur eligendi perferendis
                  blanditiis quae vel? Illum, non eligendi. Architecto, facere
                  assumenda soluta adipisci unde maxime quibusdam dolorem
                  voluptate, accusamus temporibus animi veritatis laborum sit.
                  Officiis, ratione cumque aliquid dolor blanditiis impedit
                  eaque sed sapiente in excepturi, consequuntur magnam?
                </Paragraph>
              </div>
            </div>
          </Container>
        </Section>
      </div>
    </>
  );
};

export default News;
