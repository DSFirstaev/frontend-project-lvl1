import runRound from '../index.js';
import { getRandomNumber, getRandomIndex } from '../utils.js';

const rule = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const minRange = 0;
const maxRange = 10;

const randomOperator = () => operators[getRandomIndex(operators)];

const getCalculation = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return null;
  }
};

const generateRound = () => {
  const number1 = getRandomNumber(minRange, maxRange);
  const number2 = getRandomNumber(minRange, maxRange);
  const operator = randomOperator();

  const answer = String(getCalculation(number1, number2, operator));
  const question = `${number1} ${operator} ${number2}`;

  return [answer, question];
};

export default () => runRound(rule, generateRound);
