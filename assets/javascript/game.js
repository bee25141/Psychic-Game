var winsElement = document.getElementById("wins");
var lossesElement = document.getElementById("losses");
var guessesLeftElement = document.getElementById("guessesLeft");
var guessesSoFar = document.getElementById("guessesSoFar");

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var userGuess = []

wins = 0;
losses = 0;
guessesLeft = 9;
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess);

function reset() {
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    guessesLeft = 9;
    userGuess = [" "];
}

function win(){
    wins++;
    reset();
}

function loss(){
    losses++;
}

document.onkeyup = function (event) {
    var uGuess = event.key;
    console.log(uGuess);
    userGuess.push(uGuess);
    guessesSoFar.textContent = userGuess.join(",\xa0");

if (uGuess == computerGuess) {
    win();
}
if (uGuess != computerGuess){
    (guessesLeft--);
}
if (guessesLeft ==0) {
    loss();
}
}

winsElement.textContent = (wins);
lossesElement.textContent = losses;
guessesLeftElement.textContent = guessesLeft;