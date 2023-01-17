// components import
import Hyperlink from '../content/Hyperlink';
import Paragraph from '../content/Paragraph';

interface props {
  info: string;
}
const ContactInfo = ({ info }: props) => {
  return (
    <div className="yolo">
      <Paragraph>{info}</Paragraph>
      <Hyperlink
            href="mailto:contact@jeugdvangisteren.nl"
            text="contact@jeugdvangisteren.nl"
            target="_blank"
            title="Contact de jeugd van gisteren"
            color="text-saffron-500"
            hoverColor="hover:text-saffron-400"
       ></Hyperlink>
    </div>
  );
};

export default ContactInfo;
