#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

const name = greeting();

const primeCalc = (num) => {
  let count = 0;
  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      count += 1;
    }
  }
  return count;
};

const yesNo = (num) => {
  if (primeCalc(num) === 2) {
    return 'yes';
  }
  return 'no';
};

const ifEnded = (count, result, gainedAns) => {
  if ((count !== 2) || !(yesNo(result) === gainedAns)) {
    console.log(`'${gainedAns}' is wrong answer ;(. Correct answer was '${yesNo(result)}'.\nLet's try again, ${name}!`);
  } else {
    console.log(`Congratulations, ${name}!`);
  }
};

const main = () => {
  let count = 0;
  let result = Math.floor(Math.random() * 101);
  let gainedAns = (readlineSync.question(`Answer "yes" if given number is prime. Otherwise answer "no".\nQuestion: ${result}\nYour answer: `));
  while ((count !== 2)) {
    if (gainedAns === yesNo(result)) {
      result = Math.floor(Math.random() * 101);
      gainedAns = (readlineSync.question(`Correct!\nQuestion: ${result}\nYour answer: `));
      count += 1;
    } else {
      break;
    }
  }
  ifEnded(count, result, gainedAns);
};

main();
