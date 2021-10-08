import sayHello from './cli.js';
import readlineSync from 'readline-sync';

const name = sayHello();
const maxRound = 3;

export default (getRound, text) => {
  let gainedAns = console.log((text));
  for (let round = 1; round <= maxRound; round += 1) {
    const[result, question] = getRound();
    gainedAns = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (result !== gainedAns) {
      return console.log(`'${gainedAns}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${name}!`);
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`)
};
