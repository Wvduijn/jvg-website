interface props {
  text: string;
  href: string;
  title: string;
  target: string;
  color?: string;
  hoverColor?: string;
}
const Hyperlink = ({ text, href, title, target = '_blank', color = 'text-saffron-300', hoverColor = 'hover:text-saffron-400' }: props) => {
  return (
    <a
      className={`${color} ${hoverColor} cursor-pointer font-bold`}
      href={href}
      title={title}
      target={target}
    >
      {text}
    </a>
  );
};

export default Hyperlink;
