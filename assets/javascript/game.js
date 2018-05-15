/* Global Variables */
var wordDB = []; // the DB of words to pick from
var randIndex; // random value to be used as an index to pull a random word from DB
var currentWord = []; // holds the current word
var numOfGuessesLeft; // number of guess left for the player 
var pastLetters = []; // letter already used by the player
var numOfWins = []; // total number of player wins this round