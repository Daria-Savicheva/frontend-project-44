import readlineSync from 'readline-sync';
import { welcomeUser, randomNum } from '../cli.js';
import roundResult from '../index.js';

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

const userName = welcomeUser();
console.log(rules);

export default function prime() {
  for (let i = 0; i < 3; i += 1) {
    const random = randomNum(min, max);
    const questionGame = readlineSync.question(`Question: ${random} \nYour answer: `);
    const rightAnswer = isPrime(random) ? 'yes' : 'no';
    const finishGame = roundResult(rightAnswer, questionGame, userName);
    console.log(finishGame);
    if (finishGame !== 'Correct!') return;
  }
  console.log(`Congratulations, ${userName}!`);
}
