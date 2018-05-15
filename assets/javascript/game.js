/* Global Variables */
var wordDB = ["the legend of zelda", "pacman", "mario bros", "super mario bros", "donkey kong", "super mario kart", "doom", "mortal kombat", "space invaders", "pokemon", "street fighter", "ms pacman", "tetris", "simcity", "final fantasy", "asteroids", "prince of persia", "duck hunt", "defender", "lemmings", "sonic the hedgehog", "worms", "crash bandicoot", "civilization", "pong", "frogger", "warcraft", "tekken", "golden axe", "diablo", "monkey island", "wolfenstein", "bubble bobble", "commando", "twisted metal", "duke nukem", "carmageddon"]; // the DB of words to pick from TODO: enter words into the DB
var randWord; // random word from the DB TODO: check if needed or can be switched to a local variable
var currentLetter; // holds the current letter the user has input
var currentWord = []; // holds an array of letters the represent the current word
var playerWord = []; // holds the word the player sees 
var lettersLeft; // holds the number of letters left for the player to guess FIXME: make sure to update this value in-game
var currentLetter; // holds the current user input
var pastLetters = []; // letter already used by the player
var numOfGuessesLeft; // number of guess left for the player TODO: init with a value
var numOfWins = []; // total number of player wins this round
var lose = false; // holds the current win/lose statues


// checks if the arg is a letter (convers it to lowercase if true or error msg for the user if false)
function isLetter(str) {
    if (str.length == 1 && str.match(/[a-zA-Z]/i)) {
        currentLetter = str.toLowerCase();
        return true;
    } else if (str !== 'Shift')
        alert("Please input letters only!");
}

// init a random word from the DB using a random index value &  split the word into an array of its letters
function initWord() {
    var randIndex = Math.floor((Math.random() * wordDB.length)); // returns an index from the following interval: [0,wordDB.length)
    randWord = wordDB[randIndex];
    currentWord = randWord.split('');
}

// initialize the player word with _'s
function initPlayerWord() {
    for (var i = 0; i < currentWord.length; i++) {
        if (currentWord[i] == ' ')
            playerWord[i] = "-";
        else {
            playerWord[i] = " _ ";
            lettersLeft++;
        }
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

// checks the player win/lose statues TODO: check if obsolete
function checkIfLost() {
    return lose;
}

// prints the playerWord to the html
function printPlayerWord() {
    document.getElementById("playerWord").innerHTML = "";
    for (var i = 0; i < playerWord.length; i++) {
        document.getElementById("playerWord").innerHTML += playerWord[i];
    }
}

// checks if 'ltr' exists in the currentWord, if it does update playerWord accordingly
function checkLetter(ltr) {
    if (currentWord.indexOf(currentLetter) !== -1) {
        for (var i = 0; i < currentWord.length; i++) {
            if (currentWord[i] === currentLetter)
                playerWord[i] = currentLetter;
        }
    }
}

//TODO: runs the game!
function runGame() {
    initWord();
    initPlayerWord();
    console.log(currentWord);
    console.log(playerWord);
    document.addEventListener("keyup", function (event) {
        if (isLetter(event.key)) {
            currentLetter = event.key;
        }
        checkLetter(currentLetter);
        printPlayerWord();
    });


    // document.getElementById("game").innerHTML = playerWord;

}

runGame();

//TODO: DELETE TESTS
/* TESTS */
// function testWords() {
//     var word = "first second third"
//     word = word.split('');
//     console.log(word);
// }
// testWords();

// console.log(isLetter("A"));