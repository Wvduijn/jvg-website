const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

export const getTodayDate = () => new Date().toISOString().slice(0, 10);
export const getReadableDate = () =>
  new Date().toLocaleDateString('nl-NL', options);


export const transformDate = (date: Date) => {
  return new Date(date).toLocaleDateString('nl-NL', options);
}

