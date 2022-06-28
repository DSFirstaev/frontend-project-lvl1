import gameEngine from '../index.js';

import { getRandomNumber, getRandomIndex } from '../utils.js';

const rule = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const randomOperator = () => operators[getRandomIndex(operators)];

const getAnswer = (num1, num2, operator) => {
  if (operator === '+') {
    return num1 + num2;
  }
  if (operator === '-') {
    return num1 - num2;
  }
  return num1 * num2;
};

const getTask = () => {
  const num1 = getRandomNumber(0, 10);
  const num2 = getRandomNumber(0, 10);
  const operator = randomOperator();
  const task = `${num1} ${operator} ${num2}`;
  const answer = String(getAnswer(num1, num2, operator));
  return [answer, task];
};

export default () => gameEngine(rule, getTask);
