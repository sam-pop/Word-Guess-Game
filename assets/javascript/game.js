/* Global Variables */
var wordDB = ["the legend of zelda", "pacman", "mario bros", "super mario bros", "donkey kong", "super mario kart", "doom", "mortal kombat", "space invaders", "pokemon", "street fighter", "ms pacman", "tetris", "simcity", "final fantasy", "asteroids", "prince of persia", "duck hunt", "defender", "lemmings", "sonic the hedgehog", "worms", "crash bandicoot", "civilization", "pong", "frogger", "warcraft", "tekken", "golden axe", "diablo", "monkey island", "wolfenstein", "bubble bobble", "commando", "twisted metal", "duke nukem", "carmageddon"]; // the DB of words to pick from TODO: enter words into the DB
var music = ["pacman", "mario", "frogger", "tron", "donkykong", "doom", "princeofpersia", "sonic", "crash"];
var currentLetter; // holds the current letter the user has input
var currentWord = []; // holds an array of letters the represent the current word
var playerWord = []; // holds the word the player sees 
var lettersLeft; // holds the number of letters left for the player to guess
var currentLetter; // holds the current user input
var pastLetters = []; // letter already used by the player
var maxGuesses = 10; // number of guess left for the player
var numOfGuessesLeft; // number of guess left for the player
var numOfWins = 0; // total number of player wins this round
var lose = false; // holds the current win/lose statues

// returns a random index in the range [0..max)
function randIndex(max) {
    var index = Math.floor((Math.random() * max));
    return index;
}

// init variables to default values
function init() {
    this.rightGuess = 0;
    this.numOfGuessesLeft = maxGuesses;
    this.currentLetter = "";
    this.lettersLeft = 0;
    this.playerWord = [];
    this.pastLetters = [];
    this.lose = false;
}

// checks if the arg is a letter (convers it to lowercase if true or error msg for the user if false)
function isLetter(str) {
    if (str.length == 1 && str.match(/[a-zA-Z]/i)) {
        document.getElementById("messages").innerHTML = "";
        currentLetter = str.toLowerCase();
        return true;
    } else if (str !== 'Shift' && str !== 'CapsLock' && str !== 'F5') {
        document.getElementById("messages").innerHTML = "Please input letters only!";
        return false;
    }
}

// init a random word from the DB using a random index value & split the word into an array of its letters
function initWord() {
    var ind = randIndex(wordDB.length);
    var randWord = wordDB[ind];
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
    updateIcons();
}

function updateIcons() {
    document.getElementById("lives").innerHTML = "";
    for (var i = 0; i < numOfGuessesLeft; i++) {
        document.getElementById("lives").innerHTML += "<img src='./assets/images/heart.png' width='20px' />";
    }
    document.getElementById("wins").innerHTML = "";
    for (var j = 0; j < numOfWins; j++) {
        document.getElementById("wins").innerHTML += "<img src='./assets/images/trophy.png' width='20px' />";
    }
}

// adds a win to the total wins tally
function addWin() {
    this.numOfWins++;
}

// checks the player win/lose statues
function checkIfLost() {
    if (numOfGuessesLeft == 1) { //compensating for the runGame call order
        lose = true;
        return lose;
    } else return lose;
}

// checks if the player won the game
function checkIfWon() {
    if (lettersLeft == 0) {
        return true;
    } else return false;
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

// plays audio file (.mp3)
function playAudio() {
    var audio = new Audio("./assets/media/" + music[randIndex(music.length)] + ".mp3");
    audio.play();
}

function initGame() {
    init();
    initWord();
    initPlayerWord();
    updateIcons();
}


function runGame() {
    initGame();
    document.addEventListener("keyup", function (event) {
        if (!checkIfLost()) {
            printPlayerWord();
            isLetter(event.key);
            checkLetter(currentLetter);
            printPlayerWord();
            if (checkIfWon()) {
                playAudio();
                addWin();
                initGame();
                document.getElementById("messages").innerHTML = "YOU WON! Congratulations.";

                document.getElementById("playerWord").innerHTML = "<h2>Press any key to start...</h2>";
            }
        } else {
            document.getElementById("messages").innerHTML = "YOU LOST!<br>Try again.";
            document.getElementById("playerWord").innerHTML = "<h2>Press any key to start...</h2>";
            initGame();
        }

    });



}

// EXECUTE
runGame();