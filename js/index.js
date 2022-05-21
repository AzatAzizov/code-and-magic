import { random } from 'lodash';

const NAMES = [
  'Ivan',
  'Piter',
  'Alex',
];

const SURNAMES = [
  'Petrov',
  'Ivanov',
  'Cidorov',
];

const COLORS = [
  'Red',
  'blue',
  'black',
];

const createWizard = () => {
  const randomNameIndex = random(0, NAMES.length - 1);
  const randomSurnamesIndex = random(0, SURNAMES.length - 1);

  return {
    name: NAMES[randomNameIndex] + ' ' + SURNAMES[randomSurnamesIndex],
    coatColor: '',
  };
};

console.log(
  createWizard()
);
