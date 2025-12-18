import { getRandomInt } from '../utils.js';

const findGcd = (a, b) => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

export const description = 'Find the greatest common divisor of given numbers.';

export const generateRound = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);

  const question = `${num1} ${num2}`;
  const correctAnswer = String(findGcd(num1, num2));

  return { question, correctAnswer };
};

export const gcdGame = {
  description,
  generateRound,
};
