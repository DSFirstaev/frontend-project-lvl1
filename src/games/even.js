import gameEngine from '../index.js';
import { getRandomNumber } from '../utils.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no"';
const isEven = (number) => (number % 2 === 0);

const getAnswerAndQuestion = () => {
  const question = getRandomNumber(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';

  return [answer, question];
};

export default () => gameEngine(rule, getAnswerAndQuestion);
