import Link from 'next/link';

import { transformDate } from '@services/date';

import Image from 'next/image';
import Author from './Author';
import Tag from './Tag';

interface props {
  imageUrl: string;
  description: string;
  title: string;
  tags: [string];
  slug: string;
  authorName: string;
  authorImage: any;
  publishedAt: Date;
}

const NewsCard = ({
  imageUrl,
  description,
  title,
  tags,
  slug,
  authorName,
  authorImage,
  publishedAt,
}: props) => {
  return (
    <div className="w-full  bg-ivory-500 bg-gradient-to-t from-white to-ivory-500 drop-shadow-lg hover:drop-shadow-2xl transition-all rounded-xl hover:-translate-y-2 mb-6 overflow-hidden">
      <div className="flex flex-col">
        <div className="relative h-40">
          <Image
            src={imageUrl}
            alt="JVG achtergrond image van een steiger"
            priority={true}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8/B8AAssB5CY77SMAAAAASUVORK5CYII="
            fill
            sizes="(max-width: 768px) 200px,
              (max-width: 1200px) 200px,
              200px"
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          ></Image>
        </div>
        <div className="p-4">
          <div className="flex flex-col">
            {/* TAG */}
            <div className="tags">
              {tags.map((tag) => {
                return <Tag color="bg-blue-violet-500" key={tag} title={tag} />;
              })}
            </div>
            <Link href={`nieuws/${slug}`}>
              <h3
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
                {title}
              </h3>
            </Link>
            <p className="font-roboto leading-relaxed text-base text-gray-500 mb-5">
              {description}
            </p>
            {/* Author */}
            <Author name={authorName} date={transformDate(publishedAt)} imageUrl={authorImage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
