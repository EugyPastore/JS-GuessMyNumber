// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs";
import Turbolinks from "turbolinks";
import * as ActiveStorage from "@rails/activestorage";
import "channels";

Rails.start();
Turbolinks.start();
ActiveStorage.start();

import "controllers";
import "bootstrap";

("use strict");
// define secret number once we start application! to the secret number we will compare all the guesses. secretNumber - is state variable.
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// variable score keeps data in our code! which is good! we don't need to rely on the DOM to keep our data. it is STATE VARIABLE- because it is relavant to the application.
let score = 20;
// document.querySelector('.number').textContent = secretNumber;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //no number provided
  if (!guess) {
    //  document.querySelector('.message').textContent = '⛔️ Provide a number';
    displayMessage("⛔️ Provide a number");

    // player wins
  } else if (guess === secretNumber) {
    //  document.querySelector('.message').textContent = '🌟 Correct number!';
    displayMessage("🌟 Correct number!");
    document.querySelector(".score").textContent = score;
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;

    highScore < score ? (highScore = score) : highScore;
    document.querySelector(".highscore").textContent = highScore;
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '⛔️ Too high!' : '⛔️ Too low!';
      displayMessage(guess > secretNumber ? "⛔️ Too high!" : "⛔️ Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    }
  } else {
    //  document.querySelector('.message').textContent = '💥  You lost the game!';
    displayMessage("💥  You lost the game!");
    document.querySelector(".score").textContent = 0;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = score;
  //   document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage("Start guessing...");
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
});
