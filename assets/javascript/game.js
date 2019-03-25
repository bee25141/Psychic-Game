var wins = document.getElementById("wins");
var losses = document.getElementById("losses");
var ties = document.getElementById("ties");
var guessesLeft = document.getElementById("guessesLeft");
var guessesSoFar = document.getElementById("guessesSoFar");

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var userChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var userGuess = []

wins.textContent = parseInt(0);
losses.textContent = parseInt(0);
guessesLeft.textContent = parseInt(9);

document.onkeyup = function (event) {
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    var uGuess = event.key;
    if (userChoices.includes(uGuess)) {
        userGuess.push(uGuess);
        guessesSoFar.textContent = userGuess;
    }
    if (uGuess === computerGuess){
        wins.textContent++;
        guessesLeft.textContent = parseInt(9);
    }
    if (uGuess != computerGuess){
        losses.textContent++;
        guessesLeft.textContent--;
    }
}