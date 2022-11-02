'use strict';

const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const btnNew = document.querySelector('.btn--new');
const scoresEL = document.querySelectorAll('.score');

let activePlayer = 0;
const currentScores = [0, 0];
const scores = [0, 0];

const diceRoll = function () {
  const diceNum = Math.floor(Math.random() * 6) + 1;
  dice.src = `./dice-${diceNum}.png`;
  if (diceNum !== 1) {
    currentScores[activePlayer] += diceNum;
    displayCurrent();
  } else {
    currentScores[activePlayer] = 0;
    displayCurrent();
    toggleActive();
  }
};

const toggleActive = function () {
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
};

const hold = function () {
  scores[activePlayer] += currentScores[activePlayer];
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  currentScores[activePlayer] = 0;
  displayCurrent();
  toggleActive();
};

const displayCurrent = function () {
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScores[activePlayer];
};

const reset = function () {
  activePlayer = 0;
  scores[0] = scores[1] = 0;
  currentScores[0] = currentScores[1] = 0;
  displayCurrent();
  for (let i = 0; i < scoresEL.length; i++) {
    scoresEL[i].textContent = scores[i];
  }
  if (!player1.classList.contains('player--active')) {
    player1.classList.toggle('player--active');
    player2.classList.toggle('player--active');
  }
};

btnRoll.addEventListener('click', diceRoll);
btnHold.addEventListener('click', hold);
btnNew.addEventListener('click', reset);
