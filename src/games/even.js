import readlineSync from 'readline-sync';
import { welcomeUser, getRandomNum } from '../cli.js';
import getRoundResult from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const min = 1;
const max = 20;
const getUserName = welcomeUser();
console.log(rules);

export default function even() {
  for (let i = 0; i < 3; i += 1) {
    const random = getRandomNum(min, max);
    const questionGame = readlineSync.question(`Question: ${random} \nYour answer: `);
    const isRightAnswer = random % 2 === 0 ? 'yes' : 'no';
    const finishGame = getRoundResult(isRightAnswer, questionGame, getUserName);
    console.log(finishGame);
    if (finishGame !== 'Correct!') return;
  }
  console.log(`Congratulations, ${getUserName}!`);
}
