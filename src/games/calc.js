import { getRandomInt } from '../utils.js';

const operators = ['+', '-', '*'];

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    default: throw new Error(`Unknown operator: ${operator}`);
  }
};

export const description = 'What is the result of the expression?';

export const generateRound = () => {
  const a = getRandomInt(1, 30);
  const b = getRandomInt(1, 20);
  const operatorIndex = getRandomInt(0, operators.length - 1);
  const operator = operators[operatorIndex];

  const question = `${a} ${operator} ${b}`;
  const correctAnswer = String(calculate(a, b, operator));

  return { question, correctAnswer };
};

export const calcGame = {
  description,
  generateRound,
};
