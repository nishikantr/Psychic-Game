//var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var computerChoices = ['a', 'b', 'c', 'd'];


var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;

document.querySelector('#Wins').innerHTML = "Wins: " + wins;
document.querySelector('#Losses').innerHTML = "Losses: " + losses;
document.querySelector('#guessesLeft').innerHTML = "Guesses Left: " + guessesLeft;


document.onkeyup = function(event) {
	guessesLeft --;
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

console.log(userGuess);

	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


console.log("computerGuess" + computerGuess);

if (guessesLeft > 0) {
 		if (userGuess === computerGuess) {
 			wins++;
 			document.querySelector('#Wins').innerHTML = "Wins: " + wins;
 			guessesLeft = guessesLeft - 1;
 			console.log("guessesleft" + guessesLeft);
 		} else if (userGuess != computerGuess) {
 			guessesLeft = guessesLeft - 1;
 			console.log("loser guessesleft" + guesses);

 		}

} else if (guessesLeft = 0 ) {
	alert("You lost, Play Again?")
}
 
}

  
 




        

           
