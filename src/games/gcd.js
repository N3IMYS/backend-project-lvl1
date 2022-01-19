import getRandom from '../utilities.js';
import runGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const genGcd = (a, b) => {
  if (!b) {
    return a;
  }

  return genGcd(b, a % b);
};

const getGcd = () => {
  const a = getRandom(0, 100);
  const b = getRandom(0, 100);
  const correctAnswer = String(genGcd(a, b));
  const question = `${a} ${b}`;
  const gameData = [correctAnswer, question];
  return gameData;
};
export default () => runGame(getGcd, description);
