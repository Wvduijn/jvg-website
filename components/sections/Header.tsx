import Image from "next/image";

const Header = () => {
  const imageStyle = {
    opacity: 0.5,
  };
  return (
    <section className="bg-blue-violet-500 text-gray-100 relative">
      <Image
        src="/images/docks-background.jpg"
        alt="JVG achtergrond image van een steiger"
        priority={true}
        fill
        sizes="100vw"
        style={{
          ...imageStyle,
          objectFit: "cover",
          objectPosition: "center"
        }}></Image>
      <div className="relative">
        <div className="container mx-auto flex flex-col items-center px-4 py-8 text-center md:py-16 md:px-10 lg:px-32 xl:max-w-5xl z-10">
          <h1 className="font-montserrat text-4xl font-bold leading-none sm:text-5xl">
           Stichting <span className="text-saffron-500">De Jeugd van Gisteren</span>
          </h1>
          <p className="font-roboto px-8 mt-8 mb-12 text-lg">
          Onze belangrijkste taak is het faciliteren van een veilige en gezellige omgeving waarin senioren zich op een prettige manier kunnen ontspannen. <br/>Ons motto: <span className="font-bold">Gezelligheid hoeft niet duur te zijn!</span>
          </p>
          <div className="flex flex-wrap justify-center">
            <button className="px-8 py-3 m-2 text-lg font-semibold rounded-lg bg-blue-violet-500 hover:bg-blue-violet-400 text-white transition-colors ease-in">
              Onze activiteiten
            </button>
            <button className="px-8 py-3 m-2 text-lg font-semibold rounded-lg bg-saffron-500 hover:bg-saffron-400 text-white transition-colors ease-in">
              Over ons
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
