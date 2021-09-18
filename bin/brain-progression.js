#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

const name = greeting();

const ifEnded = (count, result, gainedAns) => {
  if ((count !== 2) || (result !== Number(gainedAns))) {
    console.log(`'${gainedAns}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${name}!`);
  } else {
    console.log(`Congratulations, ${name}!`);
  }
};

const progCalc = () => {
  const arr = [];
  const step = Math.floor(Math.random() * 20) + 1;
  const start = Math.floor(Math.random() * 20) + 1;
  for (let i = 0; i < 10; i += 1) {
    arr.push((i * step) + start);
  }
  return arr;
};

const resString = (arr) => {
  let resultString = '';
  for (let i = 0; i < arr.length; i += 1) {
    resultString += `${arr[i]} `;
  }
  return resultString;
};

const progKit = () => {
  let count = 0;
  let arr = progCalc();
  let invis = Math.floor(Math.random() * 10);
  let result = arr[invis];
  arr[invis] = '..';
  let gainedAns = (readlineSync.question(`What number is missing in the progression?\nQuestion: ${resString(arr)}\nYour answer: `));
  while ((count !== 2)) {
    if (Number(gainedAns) === result) {
      arr = progCalc();
      invis = Math.floor(Math.random() * 10);
      result = arr[invis];
      arr[invis] = '..';
      gainedAns = (readlineSync.question(`Correct!\nQuestion: ${resString(arr)}\nYour answer: `));
      count += 1;
    } else {
      break;
    }
  }
  ifEnded(count, result, gainedAns);
};

progKit();
