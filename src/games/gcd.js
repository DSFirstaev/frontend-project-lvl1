import runRound from '../index.js';
import { getRandomNumber } from '../utils.js';

const rule = 'Find the greatest common divisor of given numbers.';
const minRange = 0;
const maxRange = 100;

const findGCD = (num1, num2) => ((num1 !== 0) ? findGCD(num2 % num1, num1) : Math.abs(num2));

const generateRound = () => {
  const number1 = getRandomNumber(minRange, maxRange);
  const number2 = getRandomNumber(minRange, maxRange);

  const answer = String(findGCD(number1, number2));
  const question = `${number1} ${number2}`;

  return [answer, question];
};

export default () => runRound(rule, generateRound);
