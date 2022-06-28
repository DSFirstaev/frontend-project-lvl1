import gameEngine from '../index.js';

import { getRandomNumber } from '../utils.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  const result = [];
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      result.push(i);
    }
  }
  const isEmpty = ((result.length === 0));
  return isEmpty;
};

function getTask() {
  const num = getRandomNumber(2, 100);
  const task = `${num}`;
  const answer = isPrime(num) ? 'yes' : 'no';
  return [answer, task];
}

export default () => gameEngine(rule, getTask);
