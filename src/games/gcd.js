import gameEngine from '../index.js';
import { getRandomNumber } from '../utils.js';

const rule = 'Find the greatest common divisor of given numbers.';

const findGCD = (pair) => {
  const min = Math.min(...pair);
  const max = Math.max(...pair);

  for (let i = min; i >= 1; i -= 1) {
    const isCommonDivisor = (min % i === 0 && max % i === 0);
    if (isCommonDivisor) {
      return i;
    }
  }

  return 1;
};

const getAnswerAndQuestion = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);

  const answer = String(findGCD([num1, num2]));
  const question = `${num1} ${num2}`;

  return [answer, question];
};

export default () => gameEngine(rule, getAnswerAndQuestion);
