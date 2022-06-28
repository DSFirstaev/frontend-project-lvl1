import gameEngine from '../index.js';

import { getRandomNumber } from '../utils.js';

const rule = 'Find the greatest common divisor of given numbers.';

const findGCD = (numbers) => {
  const result = [];
  const minNumber = Math.min(...numbers);
  const maxNumber = Math.max(...numbers);
  for (let i = 1; i <= minNumber; i += 1) {
    const isCommonDivisor = (minNumber % i === 0 && maxNumber % i === 0);
    if (isCommonDivisor) {
      result.push(i);
    }
  }
  return result.pop();
};

const getTask = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const task = `${num1} ${num2}`;
  const answer = String(findGCD([num1, num2]));
  return [answer, task];
};

export default () => gameEngine(rule, getTask);
