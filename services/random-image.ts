// fetches a random image from the header image list
const imagesList = [
  '/images/docks-background.jpg',
  '/images/sfeer/guitar-hero.jpg'
]

export const getRandomImage = () => {
  // can extend this with multiple backgrounds to choose from
  const imageUrls: Array<string> = imagesList;
  const randomImage = imageUrls[Math.floor(Math.random() * imageUrls.length)];
  return randomImage;
};
