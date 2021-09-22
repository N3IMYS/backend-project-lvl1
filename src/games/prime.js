import { getRndm } from '../cli.js';

const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const primeKit = (number) => {
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

const getRndmKit = () => {
  const number = getRndm(0, 100);
  const result = primeKit(number);
  const expression = ` ${number}`;
  const array = [question, result, expression];
  return array;
};

export default getRndmKit;
