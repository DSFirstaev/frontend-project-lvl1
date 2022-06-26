import { getRandomNumber, gameEngine } from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = () => {
  const num = getRandomNumber(2, 100);
  const task = `Question: ${num}`;
  const result = [];
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      result.push(i);
    }
  }
  const rightAnswer = (result.length === 0) ? 'yes' : 'no';
  return [rightAnswer, task];
};

const startGame = () => gameEngine(rules, isPrime);

export default startGame;
