#!/usr/bin/env node
import { getRndm } from '../cli.js';

const question = 'What is the result of the expression?';
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

const getRndmKit = () => {
  const operator = operators[getRndm(operMin, operMax)];
  const a = getRndm(0, 50);
  const b = getRndm(0, 10);
  const result = String(calcKit(a, b, operator));
  const expression = `${a} ${operator} ${b}`;
  const array = [question, result, expression];
  return array;
};

export default getRndmKit;
