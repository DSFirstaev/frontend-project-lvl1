import { getRandomNumber, gameEngine } from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = () => {
  const num = getRandomNumber(1, 100);
  const task = `Question: ${num}`;
  const rightAnswer = (num % 2 === 0) ? 'yes' : 'no';
  return [rightAnswer, task];
};

const startGame = () => gameEngine(rules, isEven);

export default startGame;
