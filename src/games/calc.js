import readlineSync from 'readline-sync';
import { welcomeUser, randomNum } from '../cli.js';

export default function calc() {
  const userName = welcomeUser();
  const rules = 'What is the result of the expression?';
  console.log(rules);
  const min = 1;
  const max = 10;
  for (let i = 0; i < 3; i += 1) {
    const firstNum = randomNum(min, max);
    const secondNum = randomNum(min, max);
    const arrayOperator = ['+', '-', '*'];
    const randomOperator = arrayOperator[randomNum(0, 2)];
    const questionGame = readlineSync.question(`Question: ${firstNum} ${randomOperator} ${secondNum} \nYour answer: `);
    let result = 0;
    switch (randomOperator) {
      case arrayOperator[0]:
        result = firstNum + secondNum;
        break;
      case arrayOperator[1]:
        result = firstNum - secondNum;
        break;
      case arrayOperator[2]:
        result = firstNum * secondNum;
        break;
      default:
    }
    const rightAnswer = Number(questionGame);
    if (rightAnswer === result) {
      result = 'Correct!';
      console.log(result);
    } else {
      console.log(`'${rightAnswer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}
