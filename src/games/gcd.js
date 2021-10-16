import getRandom from '../utilities.js';
import runGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';
const genGcd = (a, b) => {
  let result = 1;
  const arr = [];
  let bigger = 0;
  if (a > b) {
    bigger = a;
  } else {
    bigger = b;
  }
  while ((result <= bigger)) {
    if ((a % result === 0) && (b % result === 0)) {
      arr.push(result);
    }
    result += 1;
  }
  return arr[arr.length - 1];
};

const getGcd = () => {
  const a = getRandom(0, 100);
  const b = getRandom(0, 100);
  const answer = String(genGcd(a, b));
  const question = `${a} ${b}`;
  const array = [answer, question];
  return array;
};
export default () => runGame(getGcd, description);
