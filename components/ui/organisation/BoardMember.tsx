import Image from 'next/image';

interface props {
  name: string;
  position: string;
  image: string;
}

const BoardMember = ({ name, position, image }: props) => {
  return (
    <div className="p-2 lg:w-1/2 md:w-1/2 w-full">
      <div className="h-full flex items-center bg-white border-gray-200 border p-4 m-r-4">
        <Image
          src={image}
          alt={name}
          priority={true}
          placeholder="blur"
          width={100}
          height={100}
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8/B8AAssB5CY77SMAAAAASUVORK5CYII="
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            flexShrink: 0,
            borderRadius: '50%',
            marginRight: '16px',
            minHeight: '100px'
          }}
        ></Image>
        <div className="flex-grow text-left">
          <h2 className="text-gray-900 title-font font-medium">{name}</h2>
          <p className="text-gray-500">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default BoardMember;
