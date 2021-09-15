#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

const name = greeting();

const getRndmNum = () => Math.floor(Math.random() * 100);

const ifEnded = (count, result, gainedAns) => {
  if ((count !== 2) || (result !== Number(gainedAns))) {
    console.log(`'${gainedAns}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${name}!`);
  } else {
    console.log(`Congratulations, ${name}!`);
  }
};

const gcdCalc = (a, b) => {
  let result = 1;
  const arr = [];
  let bigger = 0;
  if (a > b) {
    bigger = a;
  } else {
    bigger = b;
  }
  while ((result <= bigger)) {
    if ((a % result === 0) && (b % result === 0)) {
      arr.push(result);
    }
    result += 1;
  }
  return arr[arr.length - 1];
};

const gcdKit = () => {
  let count = 0;
  let a = getRndmNum();
  let b = getRndmNum();
  let result = gcdCalc(a, b);
  let gainedAns = (readlineSync.question(`Find the greatest common divisor of given numbers.\nQuestion: ${a} ${b}\nYour answer: `));
  while ((count !== 2)) {
    if (Number(gainedAns) === result) {
      a = getRndmNum();
      b = getRndmNum();
      result = gcdCalc(a, b);
      gainedAns = (readlineSync.question(`Correct!\nQuestion: ${a}  ${b}\nYour answer: `));
      count += 1;
    } else {
      break;
    }
  }
  ifEnded(count, result, gainedAns);
};

gcdKit();
