import Image from 'next/image';

const Header = () => {
  const imageStyle = {
    opacity: 0.5,
  };
  return (
    <section className="dark:bg-blue-violet-500 dark:text-gray-100 h-500 relative">
      <Image
        style={imageStyle}
        src="/images/docks-background.jpg"
        alt="JVG achtergrond image van een steiger"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority={true}
      ></Image>
      <div className="relative">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl z-10">
          <h1 className="text-4xl font-bold leading-none sm:text-5xl">
            Quisquam necessita vel
            <span className="dark:text-violet-400">laborum doloribus</span>
            delectus
          </h1>
          <p className="px-8 mt-8 mb-12 text-lg">
            Cupiditate minima voluptate temporibus quia? Architecto beatae esse
            ab amet vero eaque explicabo!
          </p>
          <div className="flex flex-wrap justify-center">
            <button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-blue-violet-500 dark:hover:bg-blue-violet-400 dark:text-white transition-colors ease-in">
              Get started
            </button>
            <button className="px-8 py-3 m-2 text-lg border rounded bg-saffron-500 hover:bg-saffron-400 dark:text-gray-50 dark:border-gray-700 transition-colors ease-in">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
