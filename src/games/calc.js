import { getRandomNumber, gameEngine } from '../index.js';

const rules = 'What is the result of the expression?';

const randomOperand = () => {
  const operands = ['+', '-', '*'];
  return operands[getRandomNumber(0, 2)];
};

const culc = (num1, num2, operand) => {
  switch (operand) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const calc = () => {
  const num1 = getRandomNumber(0, 10);
  const num2 = getRandomNumber(0, 10);
  const operand = randomOperand();
  const task = `Question: ${num1} ${operand} ${num2}`;
  const rightAnswer = String(culc(num1, num2, operand));
  return [rightAnswer, task];
};

const startGame = () => gameEngine(rules, calc);

export default startGame;
