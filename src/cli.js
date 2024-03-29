/* eslint-disable no-console */
import readlineSync from 'readline-sync';

export function welcomeUser() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}

export function getRandomNum(min, max) {
  const x = Math.floor(Math.random() * (max - min + 1) + min);
  return x;
}
