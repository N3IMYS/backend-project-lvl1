import  getRandom  from '../utilities.js';
import game from '../index.js';

const text = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const genPrime = (number) => {
  const res = [];
  for (let count = 1; count <= number; count += 1) {
    if (number % count === 0) {
      res.push(count);
    }
  }
  if (res.length !== 2) {
    return 'no';
  }
  return 'yes';
};

const getPrime = () => {
  const number = getRandom(0, 100);
  const result = genPrime(number);
  const array = [result, String(number)];
  return array;
};

export default () => game(getPrime, text);
