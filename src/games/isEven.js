import gameEngine from '../index.js';

import { getRandomNumber } from '../utils.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no"';

const getTask = () => {
  const num = getRandomNumber(1, 100);
  const task = `${num}`;
  const isEven = (number) => ((number % 2 === 0));
  const answer = isEven(num) ? 'yes' : 'no';
  return [answer, task];
};

export default () => gameEngine(rule, getTask);
