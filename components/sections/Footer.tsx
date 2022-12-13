import Image from 'next/image';
import { useRouter } from 'next/router';

const Footer = () => {
  const router = useRouter();
  console.log('ROUTER OBJECT', router);

  return (
    <footer className="bg-ebony-200 text-gray-100 mt-auto">
      {/* When page = contact enable the map in footer */}
      {router.pathname === '/contact' && (
        <div className="h-72">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2439.400222369442!2d4.693283917064436!3d52.30873977977477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5e7ab033aaaab%3A0x3c759d138d93f83b!2sSeniorenvereniging%20Haarlemmermeer%20Noord!5e0!3m2!1snl!2snl!4v1664551382180!5m2!1snl!2snl"
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      )}

      <div className="pt-16 pb-16 mx-6">
        <div className="flex flex-wrap justify-between">
          {/* company column */}
          <div className="text-center md:text-left mb-16 lg:mb-0 w-full lg:w-1/5">
            <div className="flex items-center lg:justify-center relative">
              <Image
                src="/images/JVG_beeldmerk.svg"
                alt="JVG De jeugd van gisteren"
                width={150}
                height={78}
                priority={true}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
            </div>
          </div>
          <div className="sm:w-full lg:w-1/5 grow text-left mb-6">
            <h4 className="font-bold uppercase">Adres</h4>
            <p className="font-roboto mt-4 font-medium text-sm leading-loose">
            <span className="block">Stichting de JVG | De jeugd van gisteren</span>
              <span className="block">Beemsterstraat 4</span>
              <span className="block">2131 ZB Hoofddorp</span>
            </p>
          </div>
          <div className="sm:w-full lg:w-1/5 text-left">
            <h4 className="font-bold uppercase">Contact</h4>
            <p className="font-roboto mt-4 font-medium text-sm lg:mx-0 leading-loose">
              Voor alle vragen over de mogelijkheden bij JvG, de zaalhuur, activiteiten, etc. kunt u terecht bij de voorzitter.
            </p>
            <p className="font-roboto mt-4 font-medium text-sm lg:mx-0 leading-loose">
              <span className="block"><span className="font-bold">Telefoonnummer:</span> 0000000 </span>
              <span className="block"><span className="font-bold">Email:</span> info@jvg.nl </span>
            </p>
          </div>
        </div>

        <div className="my-8 border-b-2 border-saffron-500"></div>
        <div className="pb-0 text-sm font-normal flex flex-col sm:flex-row justify-between items-center">
          <div className="w-full text-center">
            &copy; Copyright 2022, Stichting De jeugd van gisteren
          </div>
          <div></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
