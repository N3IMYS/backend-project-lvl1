import {
  greeting, failure, congrats, pass, askQuest,
} from './cli.js';

export default (getRndmKit) => {
  const name = greeting();
  const maxRound = 2;
  let round = 0;
  let question = '';
  let result = '';
  let expression = '';
  let gainedAns = '';
  const parse = (array) => {
    [question, result, expression] = array;
    return result;
  };
  let array = getRndmKit;
  array = getRndmKit();
  result = parse(array);
  gainedAns = askQuest(question, expression);
  for (round; round < maxRound; round += 1) {
    if (String(result) === gainedAns) {
      array = getRndmKit();
      result = parse(array);
      gainedAns = pass(expression);
    } else {
      failure(result, gainedAns, name);
      break;
    }
  }
  congrats(gainedAns, result, round, name);
};
