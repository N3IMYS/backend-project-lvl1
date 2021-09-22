import { getRndm } from '../cli.js';

const question = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenKit = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const getRndmKit = () => {
  const number = getRndm(0, 100);
  const result = evenKit(number);
  const expression = `${number}`;
  const array = [question, result, expression];
  return array;
};
export default getRndmKit;
