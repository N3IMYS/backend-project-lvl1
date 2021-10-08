import readlineSync from 'readline-sync';
import sayHello from './cli.js';

const name = sayHello();
const maxRound = 3;

export default (getRound, text) => {
  let gainedAns = console.log((text));
  for (let round = 1; round <= maxRound; round += 1) {
    const [result, question] = getRound();
    gainedAns = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (result !== gainedAns) {
      console.log(`'${gainedAns}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};
