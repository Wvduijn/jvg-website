interface props {
  title: string;
  color: string;
}
const Tag = ({ title, color }: props) => {
  return (
    <span className={`${color} rounded-lg text-center inline-block py-1 px-4 text-xs leading-loose font-semibold text-white mb-3 mr-2`}>
      {title}
    </span>
  );
};

export default Tag;
