import  readlineSync from 'readline-sync';

export const greetUser = () => {
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
};

