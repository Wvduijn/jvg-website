import { ReactNode } from 'react';
import Paragraph from '../content/Paragraph';
import Heading from '../content/Heading';
import Image from 'next/image';
import Hyperlink from '../content/Hyperlink';

interface props {
  color: string;
  children?: ReactNode;
}
const Complaint = ({ color, children }: props) => {
  return (
    <div className={`my-6 rounded-2xl ${color} flex`}>
      <div className="w-2/3 p-12 ">
        <Heading type="h2" weight="font-bold" color="text-slate-50">
          Klacht of tevreden?
        </Heading>
        <Paragraph color="text-white">
          Klacht of bent u tevreden: Wij doen ons best om het u zo goed en
          gezellig mogelijk te maken. Natuurlijk kan het gebeuren dat u niet
          helemaal tevreden bent, of juist heel tevreden bent.
          <br />
          <br />
          Laat het ons gerust weten via{' '}
          <Hyperlink
            href="mailto:contact@dejeugdvangisteren.nl"
            text="contact@dejeugdvangisteren.nl"
            target="_blank"
            title="Contact de jeugd van gisteren"
            color="text-blue-violet-100"
            hoverColor="hover:text-blue-violet-500"
          ></Hyperlink>
        </Paragraph>
        {children}
      </div>
      <div className="w-1/3 relative">
        <Image
          src="/images/sfeer/thumbs_up.jpg"
          alt="Klacht of bent u tevreden?"
          priority={true}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8/B8AAssB5CY77SMAAAAASUVORK5CYII="
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            borderTopRightRadius: '16px',
            borderBottomRightRadius: '16px',
          }}
        ></Image>
      </div>
    </div>
  );
};

export default Complaint;
