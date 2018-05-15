/* Global Variables */
var wordDB = []; // the DB of words to pick from TODO: enter words into the DB
var randWord; // random word from the DB TODO: check if needed or can be switched to a local variable
var currentWord = []; // holds an array of letters the represent the current word
var playerWord = []; // holds the word the player sees 
var currentLetter; // holds the current user input
var pastLetters = []; // letter already used by the player
var numOfGuessesLeft; // number of guess left for the player TODO: init with a value
var numOfWins = []; // total number of player wins this round
var lose = false; // holds the current win/lose statues


// checks if the arg is a letter (returns: true or error msg for the user)
function isLetter(str) {
    if (str.length === 1 && str.match(/[a-zA-Z]/i))
        return true;
    else return "Please input letters only!";
}


// init a random word from the DB using a random index value &  split the word into an array of its letters
function initWord() {
    var randIndex = Math.floor((Math.random() * wordDB.length) + 0);
    randWord = wordDB[randIndex];
    currentWord = randWord.split('');
}

// initialize the player word with _'s
function initPlayerWord() {
    for (var i = 0; i < currentWord.length; i++)
        playerWord[i] = "_";
}


// decrement the number of guesses left
function decGuesses() {
    this.numOfGuessesLeft--;
    if (numOfGuessesLeft === 0)
        lose = true;
}

// adds a win to the total wins tally
function addWin() {
    this.numOfWins++;
}


//TODO: runs the game!
function runGame() {

}