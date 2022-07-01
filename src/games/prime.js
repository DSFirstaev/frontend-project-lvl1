import runRound from '../index.js';
import { getRandomNumber } from '../utils.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minRange = 0;
const maxRange = 100;

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= number ** 0.5; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const generateRound = () => {
  const question = getRandomNumber(minRange, maxRange);
  const answer = isPrime(question) ? 'yes' : 'no';

  return [answer, question];
};

export default () => runRound(rule, generateRound);
