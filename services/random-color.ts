// return a random color from array of theme colors - Used for Subpage Headers

export const getRandomColor = () => {
  // can extend this with type to also return random text colors etc
  const colorNames: Array<string> = [
    'bg-saffron-500',
    'bg-saffron-100',
    'bg-blue-violet-500',
    'bg-blue-violet-100',
    'bg-kombu-500',
    'bg-kombu-100',
    'bg-ivory-500',
    'bg-ivory-100',
    'bg-ebony-500',
    'bg-ebony-100',
  ];
  const randomColor = colorNames[Math.floor(Math.random() * colorNames.length)];
  return randomColor;
};
