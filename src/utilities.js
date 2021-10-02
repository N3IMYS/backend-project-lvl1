import readlineSync from 'readline-sync';

const getRndm = (a, b) => {
  const min = Math.ceil(a);
  const max = Math.floor(b);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const failure = (res, ans, name) => {
  console.log(`'${ans}' is wrong answer ;(. Correct answer was '${res}'.\nLet's try again, ${name}!`);
};

const pass = (expression) => {
  const answer = readlineSync.question(`Correct!\nQuestion: ${expression}\nYour answer: `);
  return answer;
};

const congrats = (answer, result, name) => {
  if (result === answer) {
    console.log(`Congratulations, ${name}!`);
    return;
  }
  failure(result, answer, name);
};

const askQuest = (question, expression) => {
  const gainedAns = (readlineSync.question(`${question}\nQuestion: ${expression}\nYour answer: `));
  return gainedAns;
};

export {
  failure, congrats, pass, getRndm, askQuest,
};
