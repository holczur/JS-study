const body = document.querySelector("body");
const againBtn = document.querySelector(".again");
const checkBtn = document.querySelector(".check");
const message = document.querySelector(".message");
const elScore = document.querySelector(".score");
const elHighScore = document.querySelector(".highscore");
const between = document.querySelector(".between");
const number = document.querySelector(".number");
const elGuess = document.querySelector(".guess");

/**
 A game, where user have to guess a number between 1-20. If She clicks to the 'Check!' button she'll get a message if the number is too low, or too high. If she finds out the number, the backround color will change to green and she gets a message about the answer was correct, also the secret number will be revealed in place of the question mark. Each wrong guess will decrease her score. The score when his guess is correct, will be stored while it is the highscore (or until page is reloaded). Pressing the 'Again!' button will restart the game.
 
 Ingredients:
 ✔- random number generator
 
 ✔- when Check! is pressed:
 check if guess == secret number || higher || lower
 
 ✔- when low || high:
 change message
 decrease score
 
 ✔- when loose:
 stop game
 change message
 
 ✔-when correct
 stop game
 change message
 change backgroud color
 reveal number
 set up highscore if needed
 
 ✔- when Again! is pressed:
 reset message
 reset score
 reset background color
 reset question mark
 generate new secret number
 */

const randomGenerator = function () {
  return Math.floor(Math.random() * 20) + 1;
};

let secretNumber = randomGenerator();
let highScore = 0;
let score = 20;

checkBtn.addEventListener("click", function () {
  let guess = Number(elGuess.value);
  if (guess > secretNumber) {
    message.textContent = "📈 too high";
    score--;
    elScore.textContent = score;
  } else if (guess < secretNumber) {
    message.textContent = "📉 too low";
    score--;
    elScore.textContent = score;
  } else {
    message.textContent = "🥳You win";
    body.style.backgroundColor = "#60b347";
    number.textContent = secretNumber;
    checkBtn.disabled = true;
    if (score > highScore) {
      highScore = score;
      elHighScore.textContent = highScore;
    }
  }
  if (score < 1) {
    message.textContent = "😥You loose";
    checkBtn.disabled = true;
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
