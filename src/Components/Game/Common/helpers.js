const COUNTRIES_LEN = 249;
const SELECTION_LEN = 4;
const NUM_OF_TURNS = 10;
const NUM_OF_LEVELS = 3;
const MAX_ACCURACY_BONUS = 250;
const CORRECT_GUESS_SCORE = 100;
const SPEED_BONUS = 50;

export const MAX_SCORE =
  (NUM_OF_LEVELS - 1) * (NUM_OF_TURNS * (CORRECT_GUESS_SCORE)) + (NUM_OF_TURNS * (CORRECT_GUESS_SCORE + SPEED_BONUS)) + NUM_OF_TURNS * CORRECT_GUESS_SCORE + MAX_ACCURACY_BONUS;

const getRandInt = (len) => {
  return Math.floor(Math.random() * len);
};

const hasDuplicates = (arr) => {
  return new Set(arr).size !== arr.length;
};

export const getPercentile = (score) => {
  return (score / MAX_SCORE) * 100;
};

export const makeUniqueSelection = () => {
  let finalSelection = [];
  let selectionIndeces = [];
  while (selectionIndeces < 4 || hasDuplicates(selectionIndeces)) {
    for (let i = 0; i < 4; i++) {
      const num = getRandInt(COUNTRIES_LEN);
      selectionIndeces.push(num);
    }
  }
  finalSelection = selectionIndeces;
  return finalSelection;
};

export const pickWinner = (arr) => {
  const randIdx = getRandInt(SELECTION_LEN);
  return arr[randIdx];
};

export const isCorrect = (value1, value2) => {
  return value1 === value2;
};

export const gameLost = (mistakes) => {
  return mistakes === 0;
};

export const nextLevel = (turn) => {
  return turn === NUM_OF_TURNS;
};