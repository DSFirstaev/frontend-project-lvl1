import runRound from '../index.js';
import { getRandomNumber, getRandomIndex } from '../utils.js';

const rule = 'What number is missing in the progression?';
const dots = '..';
const minStart = 0;
const maxStart = 20;
const minStep = 1;
const maxStep = 10;
const minLength = 5;
const maxLength = 10;

const getProgression = (start, step, length) => {
  const result = [];

  for (let i = 0; i <= length; i += 1) {
    result.push(start + i * step);
  }

  return result;
};

const generateRound = () => {
  const start = getRandomNumber(minStart, maxStart);
  const step = getRandomNumber(minStep, maxStep);
  const length = getRandomNumber(minLength, maxLength);

  const progression = getProgression(start, step, length);
  const hidenIndex = getRandomIndex(progression);

  const answer = String(progression[hidenIndex]);
  progression[hidenIndex] = dots;
  const question = `${progression.join([' '])}`;

  return [answer, question];
};

export default () => runRound(rule, generateRound);
