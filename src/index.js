export default function getRoundResult(isRightAnswer, userAnswer, userName) {
  let result;
  if (isRightAnswer === userAnswer) {
    result = 'Correct!';
  } else {
    result = `'${userAnswer}' is wrong answer ;(. Correct answer was '${isRightAnswer}'.\nLet's try again, ${userName}!`;
  }
  return result;
}
