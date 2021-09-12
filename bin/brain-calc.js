#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

const name = greeting();
let a = 0;
let b = 0;
let operator = 0;

const getRndmKit = () => {
  let result = 0;
  a = Math.floor(Math.random() * 50);
  b = Math.floor(Math.random() * 15);
  const operand = Math.floor(Math.random() * 3);

  switch (operand) {
    case 0:
      operator = '+';
      result = a + b;
      break;
    case 1:
      operator = '-';
      result = a - b;
      break;
    case 2:
      operator = '*';
      result = a * b;
      break;
    default:
      console.log(`${name}`);
  }

  return result;
};

const ifEnded = (count, result, answer) => {
  if ((count !== 2) || !(result === Number(answer))) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${name}!`);
  } else {
    console.log(`Congratulations, ${name}!`);
  }
};

const calcKit = () => {
  let count = 0;
  let result = 0;
  result = getRndmKit();
  let gainedAns = (readlineSync.question(`What is the result of the expression?\nQuestion: ${a} ${operator} ${b}\nYour answer: `));
  while ((count !== 2)) {
    if (Number(gainedAns) === result) {
      result = getRndmKit();
      gainedAns = (readlineSync.question(`Correct!\nQuestion: ${a} ${operator} ${b}\nYour answer: `));
      count += 1;
    } else {
      break;
    }
  }
  ifEnded(count, result, gainedAns);
};
calcKit();
