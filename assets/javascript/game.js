/* Global Variables */
var wordDB = ["the legend of zelda", "pacman", "mario bros", "super mario bros", "donkey kong", "super mario kart", "doom", "mortal kombat", "space invaders", "pokemon", "street fighter", "ms pacman", "tetris", "simcity", "final fantasy", "asteroids", "prince of persia", "duck hunt", "defender", "lemmings", "sonic the hedgehog", "worms", "crash bandicoot", "civilization", "pong", "frogger", "warcraft", "tekken", "golden axe", "diablo", "monkey island", "wolfenstein", "bubble bobble", "commando", "twisted metal", "duke nukem", "carmageddon"]; // the DB of words to pick from TODO: enter words into the DB
var currentLetter; // holds the current letter the user has input
var currentWord = []; // holds an array of letters the represent the current word
var playerWord = []; // holds the word the player sees 
var lettersLeft = 0; // holds the number of letters left for the player to guess FIXME: make sure to update this value in-game
var currentLetter; // holds the current user input
var pastLetters = []; // letter already used by the player
var numOfGuessesLeft; // number of guess left for the player TODO: init with a value
var numOfWins = 0; // total number of player wins this round
var lose = false; // holds the current win/lose statues

// init variables to default values
function initVars() {
    this.lose = false;
    this.rightGuess = 0;
    this.numOfGuessesLeft = 3; //FIXME: change value
}

// checks if the arg is a letter (convers it to lowercase if true or error msg for the user if false)
function isLetter(str) {
    if (str.length == 1 && str.match(/[a-zA-Z]/i)) {
        currentLetter = str.toLowerCase();
        return true;
    } else if (str !== 'Shift' && str !== 'CapsLock' && str !== 'F5')
        alert("Please input letters only!");
}

// init a random word from the DB using a random index value &  split the word into an array of its letters
function initWord() {
    var randIndex = Math.floor((Math.random() * wordDB.length)); // returns an index from the following interval: [0,wordDB.length)
    var randWord = wordDB[randIndex];
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

function checkIfWon() {
    if (lettersLeft == 0)
        return true;
    else return false;

}

// prints the playerWord to the html
function printPlayerWord() {
    document.getElementById("playerWord").innerHTML = "";
    for (var i = 0; i < playerWord.length; i++) {
        document.getElementById("playerWord").innerHTML += playerWord[i];
    }
}

// checks if 'ltr' exists in the currentWord: exists - update playerWord accordingly.
//                                            doesn't exist - it updates the number of guesses left and push the letter to the pastLetters array
function checkLetter(ltr) {
    if (currentWord.indexOf(ltr) !== -1) {
        for (var i = 0; i < currentWord.length; i++) {
            if (currentWord[i] === ltr) {
                playerWord[i] = ltr;
                currentWord[i] = "";
                lettersLeft--;
            }
        }
    } else {
        if (pastLetters.indexOf(ltr) == -1) {
            decGuesses();
            pastLetters.push(ltr);
        }

    }
}

//TODO: finish!
function runGame() {
    initVars();
    initWord();
    initPlayerWord();
    console.log(currentWord); //FIXME: delete
    console.log(playerWord); //FIXME: delete
    document.addEventListener("keyup", function (event) {
        isLetter(event.key);
        checkLetter(currentLetter);
        printPlayerWord();
        console.log(lettersLeft); //FIXME: delete
        // if (checkIfLost()) {
        //     alert("game over! you LOST.");
        // }
        // if (checkIfWon()) {
        //     alert("YOU WON!");
        // }
    });
}

// EXECUTE
runGame();