import Image from 'next/image';

interface componentProps {
  imageUrl: string;
  alt: string;
}

const NewsPostImage = ({ imageUrl, alt }: componentProps) => {
  return (
    <div className="w-full relative h-80 mb-6">
      <Image
        src={imageUrl}
        alt={alt}
        priority={true}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8/B8AAssB5CY77SMAAAAASUVORK5CYII="
        fill
        style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        className="rounded-xl"
      />
    </div>
  );
};

export default NewsPostImage;
