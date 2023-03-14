import readlineSync from 'readline-sync';
import { welcomeUser, getRandomNum } from '../cli.js';
import getRoundResult from '../index.js';

const rules = 'What number is missing in the progression?';
const getUserName = welcomeUser();
console.log(rules);

export default function progression() {
  function arrayProgression() {
    let ranNumber = getRandomNum(1, 20);
    const stepProgression = getRandomNum(1, 9);
    const result = [];
    for (let i = 0; i < 10; i += 1) {
      result.push(ranNumber);
      ranNumber += stepProgression;
    }
    return result;
  }
  for (let i = 0; i < 3; i += 1) {
    const progressionNumbers = arrayProgression();
    const getChangedSymbolIndex = getRandomNum(0, 9);
    const isRightAnswer = progressionNumbers[getChangedSymbolIndex];
    const getChangeSymbolInProgression = progressionNumbers.fill('..', getChangedSymbolIndex, getChangedSymbolIndex + 1);
    const questionGame = readlineSync.question(`Question: ${getChangeSymbolInProgression.join(' ')} \nYour answer: `);
    const usersAnswer = Number(questionGame);
    const finishGame = getRoundResult(isRightAnswer, usersAnswer, getUserName);
    console.log(finishGame);
    if (finishGame !== 'Correct!') return;
  }
  console.log(`Congratulations, ${getUserName}!`);
}
