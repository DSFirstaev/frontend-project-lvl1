import { getRandomNumber, gameEngine } from '../index.js';

const rules = 'What number is missing in the progression?';

const progression = () => {
  const startNum = getRandomNumber(0, 20);
  const progNum = getRandomNumber(1, 10);
  const result = [];
  const lengthOfProgression = getRandomNumber(5, 10);
  for (let i = 0; i <= lengthOfProgression; i += 1) {
    result.push(startNum + i * progNum);
  }
  const randomIndex = getRandomNumber(0, lengthOfProgression - 1);
  const dots = '..';
  const rightAnswer = String(result[randomIndex]);
  result[randomIndex] = dots;
  const task = `Question: ${result.join([' '])}`;
  return [rightAnswer, task];
};

const startGame = () => gameEngine(rules, progression);

export default startGame;
