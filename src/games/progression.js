import gameEngine from '../index.js';

import { getRandomNumber, getRandomIndex } from '../utils.js';

const rule = 'What number is missing in the progression?';

const dots = '..';

const getProgression = () => {
  const startNum = getRandomNumber(0, 20);
  const progNum = getRandomNumber(1, 10);
  const result = [];
  const lengthOfProgression = getRandomNumber(5, 10);
  for (let i = 0; i <= lengthOfProgression; i += 1) {
    result.push(startNum + i * progNum);
  }
  return result;
};

const getTask = () => {
  const progression = getProgression();
  const randomIndex = getRandomIndex(progression);
  const answer = String(progression[randomIndex]);
  progression[randomIndex] = dots;
  const task = `${progression.join([' '])}`;
  return [answer, task];
};

export default () => gameEngine(rule, getTask);
