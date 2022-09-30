import Image from 'next/image';

const Footer = () => {
  return (
    <div className="bg-ebony-200 text-gray-100 mt-auto">
      <div className="max-w-screen-xl pt-16 pb-16 mx-6">
        <div className="flex flex-wrap justify-between">
          {/* company column */}
          <div className="text-center md:text-left mb-16 lg:mb-0 w-full lg:w-1/5">
            <div className="flex items-center justify-center lg:justify-start relative">
              <div className="w-full">
                <Image
                  src="/images/JVG_beeldmerk.svg"
                  alt="JVG De jeugd van gisteren"
                  width={150}
                  height={78}
                  priority={true}
                />
              </div>
            </div>
          </div>
          <div className="lg:w-1/5 grow">
          <p className="mt-4 max-w-xs font-medium text-sm mx-auto lg:mx-0 lg:mr-4 leading-loose text-center lg:text-left ">
                    <span className='block font-bold'>Stichting JVG</span>
                    <span className='block'>De jeugd van gisteren</span>
                    <span className='block'>Hoofddorp</span>
                    <span className='block'>Nederland</span>
                </p>
          </div>
          <div className='lg:w-1/5'>
            <h4 className='font-bold uppercase'>Contact</h4>
          </div>
        </div>

        <div className="my-8 border-b-2 border-saffron-500"></div>
        <div className="pb-0 text-sm font-normal flex flex-col sm:flex-row justify-between items-center">
            <div className='w-full text-center'>&copy; Copyright 2022, Stichting De jeugd van gisteren</div>
            <div></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
