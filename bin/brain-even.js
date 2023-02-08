#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { welcomeUser, randomNum } from '../src/cli.js';

const userName = welcomeUser();
const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const min = 1;
const max = 20;
console.log(rules);

function rounds() {
  let result;
  for (let i = 0; i < 3; i += 1) {
    const random = randomNum(min, max);
    const questionGame = readlineSync.question(`Question: ${random} \nYour answer: `);
    const rightAnswer = random % 2 === 0 ? 'yes' : 'no';
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

rounds();
