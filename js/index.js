const NAMES = ['Ivan', 'Piter', 'Alex', 'Jon', 'Anna', 'Bob'];

const SURNAMES = ['Petrov', 'Ivanov', 'Cidorov'];

const COLORS = ['Red', 'Blue', 'Black', 'Orange', 'White'];

const numberHuman = 4;

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
};

const getRandArr = (element) => (
  element[getRandomInt(0, element.length)]
);

const createHuman = () => {
  return {
    name: getRandArr(NAMES),
    surname: getRandArr(SURNAMES),
    color: getRandArr(COLORS),
  };
};

const people = new Array(numberHuman).fill(null).map(() => createHuman());
console.log(people);
