"use strict";

const check = document.querySelector(".check");

const message = document.querySelector(".message");
const show = document.querySelector(".number");

const secretNumber = Math.trunc(Math.random() * 20 + 1);

const showScore = document.querySelector(".score");

let score = 20;

function checkScore() {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    message.textContent = "NO INPUT⛔⛔";
  } else if (guess < secretNumber) {
    if (score > 0) {
      message.textContent = "too less 📉";
      score--;
      showScore.textContent = score;
    } else {
      message.textContent = "YOU LOST THE SAME 😢😢";
    }
  } else if (guess > secretNumber) {
    if (score > 0) {
      message.textContent = "too more ☝☝";
      score--;

      showScore.textContent = score;
    } else {
      message.textContent = "YOU LOST THE SAME 😢😢";
    }
  } else if (guess === secretNumber) {
    message.textContent = "Yor Are Correct🥳🥳";
    score++;
    showScore.textContent = score;
  }
}

check.addEventListener("click", checkScore);
