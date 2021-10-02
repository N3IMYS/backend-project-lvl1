import { getRndm } from '../utilities.js';
import game from '../index.js';

const text = 'Find the greatest common divisor of given numbers.';
const gcdCalc = (a, b) => {
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

const gcdRound = () => {
  const a = getRndm(0, 100);
  const b = getRndm(0, 100);
  const result = String(gcdCalc(a, b));
  const expression = `${a} ${b}`;
  const array = [result, expression];
  return array;
};
export default () => game(gcdRound, text);
