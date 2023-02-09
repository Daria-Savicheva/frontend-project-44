import readlineSync from 'readline-sync';
import { welcomeUser, randomNum } from '../cli.js';
import roundResult from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const min = 1;
const max = 20;

export default function even() {
  const userName = welcomeUser();
  console.log(rules);
  for (let i = 0; i < 3; i += 1) {
    const random = randomNum(min, max);
    const questionGame = readlineSync.question(`Question: ${random} \nYour answer: `);
    const rightAnswer = random % 2 === 0 ? 'yes' : 'no';
    const finishGame = roundResult(rightAnswer, questionGame, userName);
    console.log(finishGame);
    if (finishGame !== 'Correct!') return;
  }
  console.log(`Congratulations, ${userName}!`);
}
