import startGame from './game.js';

const FIREBALL_SIZE = 22; // размер фаербола
const WIZARD_WIDTH = 50; // ширина мага
const WIZARD_SPEED = 3; // скорость мага

const getFireballSpeed = (isMovingLeft) => isMovingLeft ? 2 : 5; // скорость движения фаербола (вчсл)

const getWizardHeight = () => 1.337 * WIZARD_WIDTH; // высота мага (вчсл)

const getWizardX = (gameFieldWidth) => (gameFieldWidth - WIZARD_WIDTH) / 2; // начальное положение на игровом поле (вчсл)

const getWizardY = (gameFieldHeight) => gameFieldHeight / 3;

startGame(
  FIREBALL_SIZE,
  getFireballSpeed,
  WIZARD_WIDTH,
  WIZARD_SPEED,
  getWizardHeight,
  getWizardX,
  getWizardY,
);
