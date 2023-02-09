import readlineSync from 'readline-sync';
import { welcomeUser, randomNum } from '../cli.js';
import roundResult from '../index.js';

const rules = 'What is the result of the expression?';
const min = 1;
const max = 10;
const arrayOperator = ['+', '-', '*'];
const userName = welcomeUser();
console.log(rules);

export default function calc() {
  for (let i = 0; i < 3; i += 1) {
    const firstNum = randomNum(min, max);
    const secondNum = randomNum(min, max);
    const randomOperator = arrayOperator[randomNum(0, 2)];
    const questionGame = readlineSync.question(`Question: ${firstNum} ${randomOperator} ${secondNum} \nYour answer: `);
    let rightAnswer = 0;
    switch (randomOperator) {
      case arrayOperator[0]:
        rightAnswer = firstNum + secondNum;
        break;
      case arrayOperator[1]:
        rightAnswer = firstNum - secondNum;
        break;
      case arrayOperator[2]:
        rightAnswer = firstNum * secondNum;
        break;
      default:
    }
    const userAnswer = Number(questionGame);
    const finishGame = roundResult(rightAnswer, userAnswer, userName);
    console.log(finishGame);
    if (finishGame !== 'Correct!') return;
  }
  console.log(`Congratulations, ${userName}!`);
}
