import gameEngine from '../index.js';
import { getRandomNumber, getRandomIndex } from '../utils.js';

const rule = 'What number is missing in the progression?';
const dots = '..';

const getProgression = (start, step, length) => {
  const result = [];

  for (let i = 0; i <= length; i += 1) {
    result.push(start + i * step);
  }

  return result;
};

const getAnswerAndQuestion = () => {
  const start = getRandomNumber(0, 20);
  const step = getRandomNumber(1, 10);
  const length = getRandomNumber(5, 10);

  const progression = getProgression(start, step, length);
  const hidenIndex = getRandomIndex(progression);

  const answer = String(progression[hidenIndex]);
  progression[hidenIndex] = dots;
  const question = `${progression.join([' '])}`;

  return [answer, question];
};

export default () => gameEngine(rule, getAnswerAndQuestion);
