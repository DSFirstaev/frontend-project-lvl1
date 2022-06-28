export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const getRandomIndex = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return randomIndex;
};
