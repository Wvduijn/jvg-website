// fetches a random image from the header image list
export const getRandomImage = () => {
  // can extend this with multiple backgrounds to choose from
  const imageUrls: Array<string> = ['/images/docks-background.jpg'];
  const randomImage = imageUrls[Math.floor(Math.random() * imageUrls.length)];
  return randomImage;
};
