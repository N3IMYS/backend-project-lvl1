import readlineSync from 'readline-sync';
import getName from './cli.js';

const roundsCount = 3;
const name = getName();

export default (getRound, gameCondition) => {
  for (let round = 1; round <= roundsCount; round += 1) {
    const [correctAnswer, question] = getRound();
    console.log(gameCondition);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};
