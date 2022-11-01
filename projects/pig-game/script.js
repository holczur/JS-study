'use strict';

const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');

let activePlayer = 0;
let currentScores = [0, 0];
let scores = [0, 0];

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

btnRoll.addEventListener('click', diceRoll);
btnHold.addEventListener('click', hold);

/*
const changePlayer = function () {
  player1.classList.contains('player--active')
    ? (p1CurrentScore.textContent = score)
    : (p2CurrentScore.textContent = score);
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};


btnRoll.addEventListener('click', diceRoll);
btnHold.addEventListener('click', function () {
  player1.classList.contains('player--active')
    ? (elP1Score.textContent = score)
    : (elP2Score.textContent = score);
  changePlayer();
});
*/
