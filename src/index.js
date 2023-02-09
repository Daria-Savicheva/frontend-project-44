export default function roundResult(rightAnswer, userAnswer, userName) {
  let result;
  if (rightAnswer === userAnswer) {
    result = 'Correct!';
  } else {
    result = `'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`;
  }
  return result;
}
