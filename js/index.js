const NAMES = ['Ivan', 'Piter', 'Alex', 'John', 'Anna', 'Bob'];

const SURNAMES = ['Petrov', 'Ivanov', 'Sidorov'];

const COLORS = ['Red', 'Blue', 'Black', 'Orange', 'White'];

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
    name: getRandomElementFromArray(NAMES),
    surname: getRandomElementFromArray(SURNAMES),
    color: getRandomElementFromArray(COLORS),
  };
};

const people = new Array(NUMBER_OF_HUMANS).fill(null).map(() => createHuman());