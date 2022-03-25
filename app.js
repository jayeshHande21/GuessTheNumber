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
    message.textContent = "NO INPUT⛔⛔";
  } else if (guess < secretNumber) {
    if (score > 0) {
      message.textContent = "too less 📉";
      score--;
      showScore.textContent = score;
    } else {
      body.style.backgroundColor = "red";
      message.textContent = "YOU LOST THE SAME 😢😢";
    }
  } else if (guess > secretNumber) {
    if (score > 0) {
      message.textContent = "too more ☝☝";
      score--;

      showScore.textContent = score;
    } else {
      body.style.backgroundColor = "red";
      message.textContent = "YOU LOST THE SAME 😢😢";
    }
  } else if (guess === secretNumber) {
    message.textContent = "Yor Are Correct🥳🥳";
    show.textContent = secretNumber;
    // score++;
    body.style.backgroundColor = "green";
    show.style.width = "30rem";
    if (score > HighScore) {
      HighScore = score;
      showHighScore.textContent = HighScore;
    }
  }
}

again.addEventListener("click", function () {
  console.log("refresh done");
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  message.textContent = "Start Guessing";
  show.textContent = "?";
  body.style.backgroundColor = "black";
  show.style.width = "15rem";
  document.querySelector(".guess").value = "";
  showScore.textContent = score;
});
check.addEventListener("click", checkScore);
