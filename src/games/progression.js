import getRandom from '../utilities.js';
import game from '../index.js';

const text = 'What number is missing in the progression?';
let expression = '';
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
  expression = aLine;
  return result[goneItem];
};

const getProgression = () => {
  const goneItem = getRandom(0, 9);
  const step = getRandom(1, 10);
  const first = getRandom(1, 100);
  const result = genProgression(step, first, goneItem);
  const array = [String(result), expression];
  return array;
};
export default () => game(getProgression, text);
