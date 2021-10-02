import { getRndm } from '../utilities.js';
import game from '../index.js';

const text = 'What is the result of the expression?';
const operMin = 0;
const operMax = 2;
const operators = ['+', '-', '*'];
const calcKit = (a, b, operator) => {
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

const calcRound = () => {
  const operator = operators[getRndm(operMin, operMax)];
  const a = getRndm(0, 50);
  const b = getRndm(0, 10);
  const result = String(calcKit(a, b, operator));
  const question = `${a} ${operator} ${b}`;
  const array = [result, question];
  return array;
};

export default () => game(calcRound, text);
