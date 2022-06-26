import { getRandomNumber, gameEngine } from '../index.js';

const rules = 'What number is missing in the progression?';

const progression = () => {
  const startNum = getRandomNumber(0, 20);
  const progNum = getRandomNumber(1, 10);
  const result = [];
  const countNum = 10;
  for (let i = 0; i < countNum; i += 1) {
    result.push(startNum + i * progNum);
  }
  const randomIndex = getRandomNumber(0, countNum - 1);
  const dots = '..';
  const rightAnswer = String(result[randomIndex]);
  result[randomIndex] = dots;
  const task = `Question: ${result[0]} ${result[1]} ${result[2]} ${result[3]} ${result[4]} ${result[5]} ${result[6]} ${result[7]} ${result[8]} ${result[9]}`;
  return [rightAnswer, task];
};

const startGame = () => gameEngine(rules, progression);

export default startGame;
