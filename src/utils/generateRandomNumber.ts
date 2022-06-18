export const generateRandomNumber = (min: number = 1, max: number) => {
  const randomNumber: number = Math.floor(Math.random() * (max - min) + min);
  return randomNumber;
};
