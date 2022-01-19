import getRandom from '../utilities.js';
import runGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const getEven = () => {
  const number = getRandom(0, 100);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  const question = `${number}`;
  const gameData = [correctAnswer, question];
  return gameData;
};
export default () => runGame(getEven, description);
