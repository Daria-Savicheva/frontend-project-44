import readlineSync from 'readline-sync';
import { welcomeUser, randomNum } from '../cli.js';
import roundResult from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';
const min = 1;
const max = 30;
function NOD(a, b) {
  if (b > a) return NOD(b, a);
  if (!b) return a;
  return NOD(b, a % b);
}

const userName = welcomeUser();
console.log(rules);

export default function gcd() {
  for (let i = 0; i < 3; i += 1) {
    const firstNum = randomNum(min, max);
    const secondNum = randomNum(min, max);
    const rightNOD = NOD(firstNum, secondNum);
    const rightAnswer = Number(rightNOD);
    const questionGame = readlineSync.question(`Question: ${firstNum} ${secondNum} \nYour answer: `);
    const usersAnswer = Number(questionGame);
    const finishGame = roundResult(rightAnswer, usersAnswer, userName);
    console.log(finishGame);
    if (finishGame !== 'Correct!') return;
  }
  console.log(`Congratulations, ${userName}!`);
}
