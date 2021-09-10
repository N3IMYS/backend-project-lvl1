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
  if ((count === 3) && (yesNo(num) === ans)) {
    console.log(`Congratulations, ${name} !`);
  } else {
    console.log(`'${ans}' is wrong answer ;(. Correct answer was '${yesNo(num)}'.\nLet's try again, ${name} !`);
  }
};

const evenCheck = () => {
  let aNumber = getRndmNum();
  let count = 1;
  let gainedAns = readlineSync.question(`Answer "yes" if the number is even, otherwise answer "no".\nQuestion: ${aNumber}\nYour answer: `);
  while (count !== 3) {
    if ((yesNo(aNumber)) === gainedAns) {
      aNumber = getRndmNum();
      gainedAns = readlineSync.question(`Correct!\nQuestion: ${aNumber} \nYour answer: `);
      count += 1;
    } else {
      if (count !== 3) {
        console.log(`'${gainedAns}' is wrong answer ;(. Correct answer was '${yesNo(aNumber)}'.\nLet's try again, ${name} !`);
      }
      break;
    }
    ifEnded(count, aNumber, gainedAns);
  }
};
evenCheck();
