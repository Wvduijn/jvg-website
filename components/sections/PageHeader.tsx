import Image from 'next/image';
import { getRandomColor } from '@services/random-color';

Image;
const PageHeader = (props: any) => {
    const { imageUrl } = props;
  const imageStyle = {
    opacity: 0.5,
  };
  const backgroundColorizer = getRandomColor();
  return (
    <section className={`${backgroundColorizer} dark:text-gray-100 h-200 relative`}>
      <Image
        style={imageStyle}
        src={imageUrl}
        alt="JVG achtergrond image van een steiger"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority={true}
      ></Image>
      <div className="relative">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl z-10">
          <h1 className="text-4xl font-bold leading-none sm:text-5xl">
            PageName
          </h1>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
