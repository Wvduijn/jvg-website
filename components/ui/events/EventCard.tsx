import CalendarIcon from 'components/icons/CalendarIcon';
import Link from 'next/link';
import Tag from '../news/Tag';
import Image from 'next/image';

interface eventProps {
  imageUrl: string;
  imageAlt: string;
  description: string;
  title: string;
  tags: [string];
  slug: string;
  date: string;
}

const EventCard = ({
  imageUrl,
  imageAlt,
  description,
  title,
  tags,
  slug,
  date
}: eventProps) => {
  return (
    <div className={`bg-ebony-300 overflow-hidden rounded-lg shadow-lg mb-6 w-full`}>
      <div className="flex items-stretch flex-col sm:flex-row">
        <div className="basis-1/2 min-h-[200px] relative">
        <Image
            src={imageUrl}
            alt={imageAlt}
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
        <div className="p-6 basis-1/2 flex flex-col">
          <div>
            <div className="tags">
              {tags.map((tag) => {
                return <Tag color="bg-saffron-500" key={tag} title={tag} />;
              })}
            </div>
          </div>
          <div>
            <Link href={`activiteiten/${slug}`}>
              <h3 className="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-saffron-500">
                { title }
              </h3>
            </Link>
            <p className="mt-2 text-sm text-slate-100 dark:text-slate-100">
              { description }
            </p>
          </div>
          <div className="mt-6">
            <div className="flex items-center">
              <div className="ml-auto font-semibold text-gray-700 dark:text-gray-200">
                Datum:
              </div>

              <div className="ml-4 text-xs text-gray-600 dark:text-gray-300">
                { date }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
