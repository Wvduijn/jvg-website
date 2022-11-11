import Link from 'next/link';

import Image from 'next/image';
import Author from './Author';
import Tag from './Tag';

interface props {
  imageUrl?: string;
  description: string;
  title: string;
  tags: [string];
  slug: [string];
}

const NewsCard = ({ imageUrl, description, title, tags, slug }: props) => {
  return (
    <div className="w-full  bg-ivory-500 bg-gradient-to-t from-white to-ivory-500 drop-shadow-lg hover:drop-shadow-2xl transition-all rounded-xl hover:-translate-y-2 mb-6 overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="relative h-40 md:w-1/3 md:mb-0 md:h-auto ">
          <Image
            src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-01.jpg"
            alt="JVG achtergrond image van een steiger"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority={true}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8/B8AAssB5CY77SMAAAAASUVORK5CYII="
          ></Image>
        </div>
        <div className="p-4">
          <div className="flex flex-col">
            {/* TAG */}
            <div className="tags">
              <Tag title="Algemeen" />
            </div>
            <h3>
              <a
                href="#"
                className="
                        font-montserrat
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-2
                        inline-block
                        text-dark
                        hover:text-saffron-300
                        "
              >
                Meet AutoManage, the best AI management tools
              </a>
            </h3>
            <p className="font-roboto leading-relaxed text-base text-body-color mb-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
            {/* Author */}
            <Author name={'Wouter Gerritsen'} date={'21 SEPTEMBER 2022'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
