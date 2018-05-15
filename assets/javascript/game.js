/* Global Variables */
var wordDB = []; // the DB of words to pick from TODO: enter words into the DB
var randWord; // random word from the DB TODO: check if needed or can be switched to a local variable
var currentLetter; // holds the current letter the user has input
var currentWord = []; // holds an array of letters the represent the current word
var playerWord = []; // holds the word the player sees 
var currentLetter; // holds the current user input
var pastLetters = []; // letter already used by the player
var numOfGuessesLeft; // number of guess left for the player TODO: init with a value
var numOfWins = []; // total number of player wins this round
var lose = false; // holds the current win/lose statues


// checks if the arg is a letter (convers it to lowercase if true or error msg for the user if false)
function isLetter(str) {
    if (str.length === 1 && str.match(/[a-zA-Z]/i)) {
        currentLetter = str.toLowerCase();
        return true;
    } else return "Please input letters only!";
}


// init a random word from the DB using a random index value &  split the word into an array of its letters
function initWord() {
    var randIndex = Math.floor((Math.random() * wordDB.length) + 0);
    randWord = wordDB[randIndex];
    currentWord = randWord.split('');
}

// initialize the player word with _'s
function initPlayerWord() {
    for (var i = 0; i < currentWord.length; i++) {
        if (currentWord[i] !== ' ')
            playerWord[i] = " _ ";
    }
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

//checks the player win/lose statues TODO: check if obsolete
function checkIfLost() {
    return lose;
}


//TODO: runs the game!
function runGame() {

}


//TODO: DELETE TESTS
/* TESTS */
// function testWords() {
//     var word = "the legened of zelda"
//     word = word.split('');
//     console.log(word);
// }
// testWords();

// console.log(isLetter("A"));