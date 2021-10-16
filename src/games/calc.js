import getRandom from '../utilities.js';
import runGame from '../index.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const calc = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unsupported operator: '${operator}'!`);
  }
};

const getCalc = () => {
  const operator = operators[getRandom(0, operators.length - 1)];
  const a = getRandom(0, 50);
  const b = getRandom(0, 10);
  const answer = String(calc(a, b, operator));
  const question = `${a} ${operator} ${b}`;
  const array = [answer, question];
  return array;
};

export default () => runGame(getCalc, description);
