interface props {
  title: string;
}
const Tag = ({ title }: props) => {
  return (
    <span className="bg-blue-violet-500 rounded-lg text-center inline-block py-1 px-4 text-xs leading-loose font-semibold text-white mb-3 mr-2">
      {title}
    </span>
  );
};

export default Tag;
