import getRandom from '../utilities.js';
import runGame from '../index.js';

const description = 'What number is missing in the progression?';

const genProgression = () => {
  const step = getRandom(1, 10);
  const first = getRandom(1, 10);
  const row = [0,1,2,3,4,5,6,7,8,9];
  const progression = row.map((element) =>{
    element = step + first * element;
    return element;
  });
  return progression;
};

const getQuestion = (goneItemIndex, progression) => {
  progression[goneItemIndex] = '..';
  const resultString = progression.join(' ');
  return resultString;
};

const getCorrectAnswer = (goneItemIndex, progression) => {
  return progression[goneItemIndex];;
};

const getProgression = () => {
  const progression = genProgression();
  const goneItemIndex = getRandom(0, 9);
  const correctAnswer = getCorrectAnswer(goneItemIndex, progression)
  const question = getQuestion(goneItemIndex, progression);
  const gameData = [String(correctAnswer), question];
  return gameData;
};


export default () => runGame(getProgression, description);
