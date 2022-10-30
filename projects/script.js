/**
 A game, where user have to guess a number between 1-20. If She clicks to the 'Check!' button she'll get a message if the number is too low, or too high. If she finds out the number, the backround color will change to green and she gets a message about the answer was correct, also the secret number will be revealed in place of the question mark. Each wrong guess will decrease her score. The score when his guess is correct, will be stored while it is the highscore (or until page is reloaded). Pressing the 'Again!' button will restart the game.
 */

const body = document.querySelector("body");
const againBtn = document.querySelector(".again");
const checkBtn = document.querySelector(".check");
const message = document.querySelector(".message");
const elScore = document.querySelector(".score");
const elHighScore = document.querySelector(".highscore");
const number = document.querySelector(".number");
const elGuess = document.querySelector(".guess");

const randomGenerator = () => Math.floor(Math.random() * 20) + 1;
const setScore = () => {
  score--;
  elScore.textContent = score;
};

let secretNumber = randomGenerator();
let highScore = 0;
let score = 20;

checkBtn.addEventListener("click", function () {
  let guess = Number(elGuess.value);
  if (guess < 1 || guess > 20) {
    message.textContent = " Your guess is invalid";
  } else if (guess === secretNumber) {
    message.textContent = "🥳You win";
    body.style.backgroundColor = "#60b347";
    number.textContent = secretNumber;
    checkBtn.disabled = true;
    if (score > highScore) {
      highScore = score;
      elHighScore.textContent = highScore;
    }
  } else {
    message.textContent = `${
      guess > secretNumber
        ? (message.textContent = "📈 too high")
        : (message.textContent = "📉 too low")
    }`;
    setScore();
  }
});
againBtn.addEventListener("click", function () {
  message.textContent = "Start guessing...";
  body.style.backgroundColor = "#222";
  number.textContent = "?";
  checkBtn.disabled = false;
  score = 20;
  elScore.textContent = score;
  elGuess.value = "";
  secretNumber = randomGenerator();
});
