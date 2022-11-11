interface props {
  imageUrl?: string;
  name: string;
  date: string;
}
const Author = ({
  imageUrl = 'https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60',
  name,
  date,
}: props) => {
  return (
    <div className="flex items-center mt-auto">
      <div className="flex items-center">
        <img
          className="object-cover h-10 rounded-full mr-2"
          src={imageUrl}
          alt="Avatar"
        />
        <span className="text-gray-300">{name}</span>
      </div>
      <span className="ml-auto text-xs text-gray-300">{date}</span>
    </div>
  );
};

export default Author;
