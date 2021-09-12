#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

const name = greeting();

const getRndmNum = () => Math.floor(Math.random() * 101);

const yesNo = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const ifEnded = (count, num, ans) => {
  if ((count !== 2) || !(yesNo(num) === ans)) {
    console.log(`'${ans}' is wrong answer ;(. Correct answer was '${yesNo(num)}'.\nLet's try again, ${name}!`);
  } else {
    console.log(`Congratulations, ${name}!`);
  }
};

const evenCheck = () => {
  let aNumber = getRndmNum();
  let count = 0;
  let gainedAns = readlineSync.question(`Answer "yes" if the number is even, otherwise answer "no".\nQuestion: ${aNumber}\nYour answer: `);
  while (count !== 2) {
    if ((yesNo(aNumber)) === gainedAns) {
      aNumber = getRndmNum();
      gainedAns = readlineSync.question(`Correct!\nQuestion: ${aNumber} \nYour answer: `);
      count += 1;
    } else {
      break;
    }
  }
  ifEnded(count, aNumber, gainedAns);
};
evenCheck();
