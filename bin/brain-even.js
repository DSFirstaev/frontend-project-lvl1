#!/usr/bin/env node

//  игра на определение чётности

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

const rules = 'Answer "yes" if the number is even, otherwise answer "no"';
console.log(rules);

const numberOfLevels = 3;

const isEven = () => {
  for (let i = 0; i < numberOfLevels; i += 1) {
    const randomNumberInit = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNumberInit}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (randomNumberInit % 2 === 0) {
      if (userAnswer === 'yes') {
        console.log('Correct!');
      }
      if (userAnswer !== 'yes') {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'yes'.`);
        return console.log(`Let's try again, ${userName}!`);
      }
    }
    if (randomNumberInit % 2 !== 0) {
      if (userAnswer === 'no') {
        console.log('Correct!');
      }
      if (userAnswer !== 'no') {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'no'.`);
        return console.log(`Let's try again, ${userName}!`);
      }
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

isEven();

export default isEven;
