import getRandom from '../utilities.js';
import game from '../index.js';

const text = 'What is the result of the expression?';
const operMin = 0;
const operMax = 2;
const operators = ['+', '-', '*'];
const genCalc = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return null;
  }
};

const getCalc = () => {
  const operator = operators[getRandom(operMin, operMax)];
  const a = getRandom(0, 50);
  const b = getRandom(0, 10);
  const result = String(genCalc(a, b, operator));
  const question = `${a} ${operator} ${b}`;
  const array = [result, question];
  return array;
};

export default () => game(getCalc, text);
