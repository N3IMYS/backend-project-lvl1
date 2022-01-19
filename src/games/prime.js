import getRandom from '../utilities.js';
import runGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number >= 2) {
    let divider = 2;
    while (divider < Math.sqrt(number)) {
      if (number % divider === 0) {
        return false;
      }
      divider += 1;
    }
    return true;
  }
  return false;
};

const getPrime = () => {
  const number = getRandom(1, 100);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  const gameData = [correctAnswer, String(number)];
  return gameData;
};

export default () => runGame(getPrime, description);
