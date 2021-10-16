import getRandom from '../utilities.js';
import runGame from '../index.js';

const description = 'What number is missing in the progression?';
let question = '';
const genProgression = (step, first, goneItem) => {
  const result = [];
  let aLine = '';
  for (let i = 0; i < 10; i += 1) {
    const num = first + step * i;
    result.push(num);
  }
  for (let i = 0; i < result.length; i += 1) {
    if (i === goneItem) {
      aLine += '.. ';
    } else {
      aLine += `${result[i]} `;
    }
  }
  question = aLine;
  return result[goneItem];
};

const getProgression = () => {
  const goneItem = getRandom(0, 9);
  const step = getRandom(1, 10);
  const first = getRandom(1, 100);
  const answer = genProgression(step, first, goneItem);
  const array = [String(answer), question];
  return array;
};
export default () => runGame(getProgression, description);
