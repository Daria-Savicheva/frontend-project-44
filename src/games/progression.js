import readlineSync from 'readline-sync';
import { welcomeUser, randomNum } from '../cli.js';
import roundResult from '../index.js';

const rules = 'What number is missing in the progression?';
const userName = welcomeUser();
console.log(rules);

export default function progression() {
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
  for (let i = 0; i < 3; i += 1) {
    const progressionNumbers = arrayProgression();
    const changedSymbol = randomNum(0, 9);
    const rightAnswer = progressionNumbers[changedSymbol];
    const getChangeSymbolInProgression = progressionNumbers.fill('..', changedSymbol, changedSymbol + 1);
    const questionGame = readlineSync.question(`Question: ${getChangeSymbolInProgression.join(' ')} \nYour answer: `);
    const usersAnswer = Number(questionGame);
    const finishGame = roundResult(rightAnswer, usersAnswer, userName);
    console.log(finishGame);
    if (finishGame !== 'Correct!') return;
  }
  console.log(`Congratulations, ${userName}!`);
}
