const NAMES = ['Ivan', 'Piter', 'Alex', 'John', 'Bob'];

const SURNAMES = ['Petrov', 'Ivanov', 'Sidorov', 'Kuznetsov', 'Popov'];

const EYES_COLORS = ['Red', 'Blue', 'Orange', 'White', 'Green', 'Darkmagenta'];

const COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(255, 189, 0)',
  'rgb(24, 166, 8)',
  'rgb(106, 90, 205)',
  'rgb(176, 0, 0)',
];

const NUMBER_OF_HUMANS = 4;

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const getRandomElementFromArray = (array) => (
  array[getRandomInt(0, array.length)]
);

const createHuman = () => {
  return {
    name: getRandomElementFromArray(NAMES) + ' ' + getRandomElementFromArray(SURNAMES),
    coatColor: getRandomElementFromArray(COAT_COLORS),
    eyesColor: getRandomElementFromArray(EYES_COLORS),
  };
};

export const createWizards = () => new Array(NUMBER_OF_HUMANS).fill(null).map(() => createHuman());

