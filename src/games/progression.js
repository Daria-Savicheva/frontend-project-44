import readlineSync from 'readline-sync';
import { welcomeUser, randomNum } from '../cli.js';

export default function progression() {
  const userName = welcomeUser();
  const rules = 'What number is missing in the progression?';
  console.log(rules);
  function arrayProgression() {
    let ranNumber = randomNum(1, 20);
    const stepProgression = randomNum(1, 9);
    const result = [];
    for (let i = 0; i < 10; i += 1) {
      result.push(ranNumber);
      ranNumber += stepProgression;
    }
    return result;
  }
  let result;
  for (let i = 0; i < 3; i += 1) {
    const progressionNumbers = arrayProgression();
    const changedSymbol = randomNum(0, 9);
    const rightAnswer = progressionNumbers[changedSymbol];
    const getChangeSymbolInProgression = progressionNumbers.fill('..', changedSymbol, changedSymbol + 1);
    const questionGame = readlineSync.question(`Question: ${getChangeSymbolInProgression} \nYour answer: `);
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
