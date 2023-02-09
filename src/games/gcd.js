import readlineSync from 'readline-sync';
import { welcomeUser, randomNum } from '../cli.js';

export default function gcd() {
  const userName = welcomeUser();
  const rules = 'Find the greatest common divisor of given numbers.';
  const min = 1;
  const max = 30;
  console.log(rules);
  function NOD(a, b) {
    if (b > a) {
      return NOD(b, a);
    } if (!b) {
      return a;
    }
    return NOD(b, a % b);
  }
  let result;
  for (let i = 0; i < 3; i += 1) {
    const firstNum = randomNum(min, max);
    const secondNum = randomNum(min, max);
    const rightNOD = NOD(firstNum, secondNum);
    const rightAnswer = Number(rightNOD);
    const questionGame = readlineSync.question(`Question: ${firstNum} ${secondNum} \nYour answer: `);
    const usersAnswer = Number(questionGame);
    if (usersAnswer === rightAnswer) {
      result = 'Correct!';
      console.log(result);
    } else {
      console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}
