import { getRndm } from '../utilities.js';
import game from '../index.js';

const text = 'What number is missing in the progression?';
let expression = '';
const progressionKit = (step, first, goneItem) => {
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

const getRndmKit = () => {
  const goneItem = getRndm(0, 9);
  const step = getRndm(1, 10);
  const first = getRndm(1, 100);
  const result = progressionKit(step, first, goneItem);
  const array = [String(result), expression];
  return array;
};
export default () => game(getRndmKit, text);
