import { getRandomNumber, gameEngine } from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const findGCD = (numbers) => {
  const result = [];
  const sortNumbers = numbers.sort();
  for (let i = 1; i <= sortNumbers[0]; i += 1) {
    if (sortNumbers[0] % i === 0 && sortNumbers[1] % i === 0) {
      result.push(i);
    }
  }
  return result.pop();
};

const greatestCommonDivider = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const numbers = [num1, num2];
  const task = `Question: ${num1} ${num2}`;
  const rightAnswer = String(findGCD(numbers));
  return [rightAnswer, task];
};

const startGame = () => gameEngine(rules, greatestCommonDivider);

export default startGame;
