import runRound from '../index.js';
import { getRandomNumber } from '../utils.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no"';
const minRange = 1;
const maxRange = 100;

const isEven = (number) => (number % 2 === 0);

const generateRound = () => {
  const question = getRandomNumber(minRange, maxRange);
  const answer = isEven(question) ? 'yes' : 'no';

  return [answer, question];
};

export default () => runRound(rule, generateRound);
