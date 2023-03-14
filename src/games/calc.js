import readlineSync from 'readline-sync';
import { welcomeUser, getRandomNum } from '../cli.js';
import getRoundResult from '../index.js';

const rules = 'What is the result of the expression?';
const min = 1;
const max = 10;
const arrayOperator = ['+', '-', '*'];
const getUserName = welcomeUser();
console.log(rules);

export default function calc() {
  for (let i = 0; i < 3; i += 1) {
    const firstNum = getRandomNum(min, max);
    const secondNum = getRandomNum(min, max);
    const randomOperator = arrayOperator[getRandomNum(0, 2)];
    const questionGame = readlineSync.question(`Question: ${firstNum} ${randomOperator} ${secondNum} \nYour answer: `);
    let isRightAnswer = 0;
    switch (randomOperator) {
      case arrayOperator[0]:
        isRightAnswer = firstNum + secondNum;
        break;
      case arrayOperator[1]:
        isRightAnswer = firstNum - secondNum;
        break;
      case arrayOperator[2]:
        isRightAnswer = firstNum * secondNum;
        break;
      default:
    }
    const userAnswer = Number(questionGame);
    const finishGame = getRoundResult(isRightAnswer, userAnswer, getUserName);
    console.log(finishGame);
    if (finishGame !== 'Correct!') return;
  }
  console.log(`Congratulations, ${getUserName}!`);
}
