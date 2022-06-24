import readlineSync from 'readline-sync';

export const getRandomNumber = (max) => Math.floor(Math.random() * max);

const numberOfRounds = 3;

export const gameEngine = (rules, getRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);
  for (let i = 0; i < numberOfRounds; i += 1) {
    const [rightAnswer, task] = getRound();
    console.log(task);
    const userAnswer = readlineSync.question('Your answer: ');
    if (rightAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
