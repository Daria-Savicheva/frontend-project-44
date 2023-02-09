import readlineSync from 'readline-sync';
import { welcomeUser, randomNum } from '../cli.js';

export default function prime() {
  const userName = welcomeUser();
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const min = 2;
  const max = 100;
  console.log(rules);
  function isPrime(n) {
    if (n === 2) {
      return true;
    }
    let i = 2;
    const limit = Math.sqrt(n);
    while (i <= limit) {
      if (n % i === 0) {
        return false;
      }
      i += 1;
    }
    return true;
  }
  let result;
  for (let i = 0; i < 3; i += 1) {
    const random = randomNum(min, max);
    const questionGame = readlineSync.question(`Question: ${random} \nYour answer: `);
    const rightAnswer = isPrime(random) ? 'yes' : 'no';
    if (questionGame === rightAnswer) {
      result = 'Correct!';
      console.log(result);
    } else {
      console.log(`'${questionGame}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}
