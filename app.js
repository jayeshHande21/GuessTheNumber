"use strict";

const check = document.querySelector(".check");

let message = document.querySelector(".message");
let show = document.querySelector(".number");
const showScore = document.querySelector(".score");
let again = document.querySelector(".again");
let showHighScore = document.querySelector(".highscore");

let secretNumber = Math.trunc(Math.random() * 20 + 1);
// show.textContent = secretNumber;
let score = 20;
let HighScore = 0;

function checkScore() {
  let guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    // message.textContent = "NO INPUT⛔⛔";
    displayMessage("NO INPUT⛔⛔");
  } else if (guess === secretNumber) {
    displayMessage("Yor Are Correct🥳🥳");
    // message.textContent = "Yor Are Correct🥳🥳";
    show.textContent = secretNumber;
    // score++;
    body.style.backgroundColor = "green";
    show.style.width = "30rem";
    if (score > HighScore) {
      HighScore = score;
      showHighScore.textContent = HighScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess < secretNumber ? "too less 📉" : "too more 📈");
      score--;
      showScore.textContent = score;
    } else {
      body.style.backgroundColor = "red";
      displayMessage("YOU LOST THE SAME 😢😢");
      // message.textContent = "YOU LOST THE SAME 😢😢";
      show.textContent = 0;
    }
    // } else if (guess > secretNumber) {
    //   if (score > 0) {
    //     message.textContent = "too more ☝☝";
    //     score--;
    //     showScore.textContent = score;
    //   } else {
    //     body.style.backgroundColor = "red";
    //     message.textContent = "YOU LOST THE SAME 😢😢";
    //   }
  }
}

function displayMessage(msg) {
  message.textContent = msg;
}

again.addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  displayMessage("Start Guessing...");
  // message.textContent = "Start Guessing...";
  show.textContent = "?";
  body.style.backgroundColor = "black";
  show.style.width = "15rem";
  document.querySelector(".guess").value = "";
  showScore.textContent = score;
});
check.addEventListener("click", checkScore);
