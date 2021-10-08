import getRandom from '../utilities.js';
import game from '../index.js';

const text = 'Answer "yes" if the number is even, otherwise answer "no".';

const genEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const getEven = () => {
  const number = getRandom(0, 100);
  const result = genEven(number);
  const question = `${number}`;
  const array = [result, question];
  return array;
};
export default () => game(getEven, text);
