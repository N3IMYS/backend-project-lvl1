import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}!`);
  return name;
};

const getRndm = (a, b) => {
  const min = Math.ceil(a);
  const max = Math.floor(b);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const failure = (res, ans, name) => {
  console.log(`'${ans}' is wrong answer ;(. Correct answer was '${res}'.\nLet's try again, ${name}!`);
};

const pass = (expression) => (readlineSync.question(`Correct!\nQuestion: ${expression}\nYour answer: `));

const congrats = (answer, result, round, name) => {
  if (String(result) === answer) {
    console.log(`Congratulations, ${name}!`);
  } else if (round === 2) {
    failure(result, answer, name);
  }
};

const askQuest = (question, expression) => {
  const gainedAns = (readlineSync.question(`${question}\nQuestion: ${expression}\nYour answer: `));
  return gainedAns;
};
export {
  greeting, failure, congrats, pass, getRndm, askQuest,
};
