import Image from 'next/image';
// import { getRandomColor } from "@services/random-color";
import { getRandomImage } from '@services/random-image';
import { useState, useEffect } from 'react';

const PageHeader = (props: any) => {
  const { pageName, color, featuredImage } = props;
  // The default value is '', it will be used during pre-rendering and the first render in the browser (hydration)
  const [image, setImage] = useState(
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8/B8AAssB5CY77SMAAAAASUVORK5CYII='
  );
  const background = getRandomImage();

  let pageBackground = featuredImage ? featuredImage : background;

  // During hydration `useEffect` is called. `window` is available in `useEffect`. In this case because we know we're in the browser checking for window is not needed. If you need to read something from window that is fine.
  // By calling `setColor` in `useEffect` a render is triggered after hydrating, this causes the "browser specific" value to be available. In this case 'red'.
  useEffect(() => setImage(pageBackground), []);

  // As color is a state passed as a prop there is no mismatch between what was rendered server-side vs what was rendered in the first render. After useEffect runs the color is set to 'random color from the function'
  const imageStyle = {
    opacity: 0.5,
  };

  return (
    <section className={`${color} dark:text-gray-100 h-200 relative`}>
     
      <Image
        src={image}
        alt="pagina achtergrond"
        priority={true}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8/B8AAssB5CY77SMAAAAASUVORK5CYII="
        fill
        sizes="100vw"
        style={{
          ...imageStyle,
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      ></Image>
      <div className="relative">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl z-10">
          <h1 className="text-4xl font-bold leading-none sm:text-5xl">
            {pageName}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
