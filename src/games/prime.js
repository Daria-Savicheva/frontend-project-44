import readlineSync from 'readline-sync';
import { welcomeUser, getRandomNum } from '../cli.js';
import getRoundResult from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const min = 2;
const max = 100;
function isPrime(number) {
  if (number === 2) return true;
  let i = 2;
  const limit = Math.sqrt(number);
  while (i <= limit) {
    if (number % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
}

const getUserName = welcomeUser();
console.log(rules);

export default function prime() {
  for (let i = 0; i < 3; i += 1) {
    const random = getRandomNum(min, max);
    const questionGame = readlineSync.question(`Question: ${random} \nYour answer: `);
    const isRightAnswer = isPrime(random) ? 'yes' : 'no';
    const finishGame = getRoundResult(isRightAnswer, questionGame, getUserName);
    console.log(finishGame);
    if (finishGame !== 'Correct!') return;
  }
  console.log(`Congratulations, ${getUserName}!`);
}
