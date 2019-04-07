//Declaring variables
var winsElement = document.getElementById("wins");
var lossesElement = document.getElementById("losses");
var guessesLeftElement = document.getElementById("guessesLeft");
var guessesSoFar = document.getElementById("guessesSoFar");

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var userGuess = [];

var wins = 0;
var losses = 0;
var guessesLeft = 9;


//This selects the first letter to guess//
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess);

//This function tracks the user guess and determines a win or loss
document.onkeyup = function (event) {
    var uGuess = event.key;
    if (userGuess.includes(uGuess) === false && computerChoices.includes(uGuess)){
    userGuess.push(uGuess);
    guessesLeft--;
    }
    
    //This function randomly chooses a new letter to guess and clears the users guess display
    function reset(){;
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log(computerGuess);
        userGuess = [];
        guessesLeft = 9;
    }

if (uGuess === computerGuess) {
    wins++;
    reset();
}

if (guessesLeft === 0) {
    losses++;
    reset();
}

winsElement.textContent = wins;
lossesElement.textContent = losses;
guessesLeftElement.textContent = guessesLeft;
guessesSoFar.textContent = userGuess.join(",\xa0");
}

winsElement.textContent = wins;
lossesElement.textContent = losses;
guessesLeftElement.textContent = guessesLeft;
