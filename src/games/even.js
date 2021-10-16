import getRandom from '../utilities.js';
import runGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const getEven = () => {
  const number = getRandom(0, 100);
  const result = isEven(number);
  const question = `${number}`;
  const array = [result, question];
  return array;
};
export default () => runGame(getEven, description);
