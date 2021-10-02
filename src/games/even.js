import { getRndm } from '../utilities.js';
import game from '../index.js';

const text = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenKit = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const evenRound = () => {
  const number = getRndm(0, 100);
  const result = evenKit(number);
  const question = `${number}`;
  const array = [result, question];
  return array;
};
export default () => game(evenRound, text);
