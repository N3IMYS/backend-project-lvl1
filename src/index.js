import {
  congrats, pass, askQuest,
} from './utilities.js';
import firstMessage from './cli.js';

export default (gameRound, text) => {
  const maxRound = 2;
  const name = firstMessage();
  let array = gameRound();
  let gainedAns = askQuest(text, array[1]);
  for (let round = 0; round < maxRound; round += 1) {
    if (String(array[0]) === gainedAns) {
      array = gameRound();
      gainedAns = pass(array[1]);
    } else {
      break;
    }
  }
  congrats(gainedAns, array[0], name);
};
