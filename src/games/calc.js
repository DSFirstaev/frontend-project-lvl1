import gameEngine from '../index.js';
import { getRandomNumber, getRandomIndex } from '../utils.js';

const rule = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const randomOperator = () => operators[getRandomIndex(operators)];

const getCalculation = (number1, nummer2, operator) => {
  switch (operator) {
    case '+':
      return number1 + nummer2;
    case '-':
      return number1 - nummer2;
    default:
      return number1 * nummer2;
  }
};

const getAnswerAndQuestion = () => {
  const num1 = getRandomNumber(0, 10);
  const num2 = getRandomNumber(0, 10);
  const operator = randomOperator();

  const answer = String(getCalculation(num1, num2, operator));
  const question = `${num1} ${operator} ${num2}`;

  return [answer, question];
};

export default () => gameEngine(rule, getAnswerAndQuestion);
