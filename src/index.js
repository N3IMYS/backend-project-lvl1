import readlineSync from 'readline-sync';

const maxRound = 3;
const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
console.log(`Hello, ${name}`);

export default (getRound, text) => {
  for (let round = 1; round <= maxRound; round += 1) {
    const [correctAnswer, question] = getRound();
    console.log(text);
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
