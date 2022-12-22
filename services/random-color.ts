// return a random color from array of theme colors - Used for Subpage Headers and activity cards

export const getRandomColor = () => {
  // can extend this with type to also return random text colors etc
  const colorNames: Array<string> = [
    'bg-saffron-500',
    'bg-saffron-200',
    'bg-blue-violet-500',
    'bg-blue-violet-200',
    'bg-kombu-500',
    'bg-kombu-200',
    'bg-ivory-500',
    'bg-ebony-500',
    'bg-ebony-200',
  ];
  const randomColor = colorNames[Math.floor(Math.random() * colorNames.length)];
  console.log('randomCOLOR', randomColor)
  return randomColor;
};
