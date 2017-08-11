var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];



var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;

document.querySelector('#Wins').innerHTML = "Wins: " + wins;
document.querySelector('#Losses').innerHTML = "Losses: " + losses;
document.querySelector('#guessesLeft').innerHTML = "Guesses Left: " + guessesLeft;


document.onkeyup = function(event) {

	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();


	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


if (guessesLeft > 0) {
 		if (userGuess === computerGuess) {
 			wins++;
 			document.querySelector('#Wins').innerHTML = "Wins: " + wins;
 			guessesLeft = 9 ;
 			document.querySelector('#guessesLeft').innerHTML = "Guesses Left: " + guessesLeft;

 		} else if (userGuess != computerGuess) {
			 guessesLeft --;
			 document.querySelector('#guessesLeft').innerHTML = "Guesses Left: " + guessesLeft;
			 if (guessesLeft == 0 ) {
			 	losses ++;
	 			document.querySelector('#Losses').innerHTML = "Losses: " + losses;
			    guessesLeft = 9 ;
 			    document.querySelector('#guessesLeft').innerHTML = "Guesses Left: " + guessesLeft;

			 }

 		}

} 
 
}

  
 




        

           
