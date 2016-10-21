// array of words
var words = ["springfield","jebediah","smithers","monorail","isotopes","millhouse","flanders","saxophone","shelbyville","bartholomew"]

//choose random word from array
var wordChoice = words[Math.floor(Math.random() * words.length)];

//set globals
var s;
var count = 10;
var answers = [];
var wrongGuesses = [];
var guessedLetters = [];

//game start
function gameStart() {
	for(var i=0; i<wordChoice.length; i++){
		answers[i] = "_";
	}

	s = answers.join("  ");
	document.getElementById("counter").innerHTML = "Guesses remaining:  " + count;
	document.getElementById("answer").innerHTML = s;
	document.getElementById("guessed").innerHTML = "Incorrect guesses:  " + wrongGuesses.join(",  ");
}

//listen for key input
document.onkeyup = function(event){
	var letter = String.fromCharCode(event.keyCode).toLowerCase();

	if (guessedLetters.indexOf(letter) == -1 && letter.match(/[a-z]/i)){
			guessedLetters.push(letter)

		for (var i=0; i<wordChoice.length; i++) {

			if (wordChoice[i] === letter) {
				answers[i] = letter;
			}

			if(answers.indexOf("_") == -1)
			{
				document.getElementById("lossDisplay").style.opacity = "0";
				document.getElementById("winDisplay").style.opacity = "1";
				document.getElementById("playAgain").innerHTML = "Press any key to play again!";
				document.onkeyup = function(event){
				location.reload();
				}
			}

			if (wrongGuesses.indexOf(letter) == -1 && wordChoice.indexOf(letter) == -1){
				wrongGuesses.push(letter);
				count--;
				if (count==0) {
					document.getElementById("lossDisplay").style.opacity = "1";
					document.getElementById("winDisplay").style.opacity = "0";
					document.getElementById("playAgain").innerHTML = "Press any key to play again!";
					document.onkeyup = function(event){
					location.reload();
					}
				}
			}
			
		}
		
	}

	document.getElementById("counter").innerHTML = "Guesses remaining:  " + count;
	document.getElementById("answer").innerHTML = answers.join("  ");
	document.getElementById("guessed").innerHTML = "Incorrect guesses:  " + "<br>" + wrongGuesses.join(",   ");
}