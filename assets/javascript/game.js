/* Global Variables */
var wordDB = []; // the DB of words to pick from
var randIndex; // random value to be used as an index to pull a random word from DB
var currentWord = []; // holds the current word
var currentLetter; // holds the current user input
var pastLetters = []; // letter already used by the player
var numOfGuessesLeft; // number of guess left for the player 
var numOfWins = []; // total number of player wins this round

// checks if the arg is a letter (returns: true or error msg for the user)
function isLetter(str) {
    if (str.length === 1 && str.match(/[a-zA-Z]/i))
        return true;
    else return "Please input letters only!";
}

// adds a win to the total wins tally
function addWin() {
    this.numOfWins++;
}

// decrement the number of guesses left
function decGuesses() {
    this.numOfGuessesLeft--;
}

function splitIntoLetters(word) {
    currentWord = word.split('');
}

//TODO: runs the game!
function runGame() {

}