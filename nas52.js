
// Variables
let instruction = document.getElementById('instruction');
let guessedNumber;
let numberOfGuesses;
let selectedRanges;
let message;
let userGuesse = document.getElementById('userGuessesDisplayed').innerHTML;
let dialog = document.getElementById('dialog');
let dialogLost = document.getElementById('dialogLost');
let sectionOne = document.getElementById('sectionOne');
let sectionTwo = document.getElementById('sectionTwo');
let selectionMsg = document.getElementById('selectionMsg');
let guessingRecord = document.getElementById('userGuessesDisplayed');
let checkButton = document.getElementById('checkBtn');
let attemptsFor10 = 3;
let attemptsFor100 = 7;
let attemptsFor1000 = 10;



// Make the range be 10 when the "10" radio button is selected and uses the getRandomInt.
function selectedRange10(){
    selectedRanges = 10;
    document.getElementById('selectedRange').innerHTML = selectedRanges;
    numberOfGuesses = attemptsFor10;
    document.getElementById('guessesLeft').innerHTML = numberOfGuesses;
    randomNumber = getRandomInt(1, 10);
}

// Make the range be 100 when the "100" radio button is selected and uses the getRandomInt.
function selectedRange100(){
    selectedRanges = 100;
    document.getElementById('selectedRange').innerHTML = selectedRanges;
    numberOfGuesses = attemptsFor100;
    document.getElementById('guessesLeft').innerHTML = numberOfGuesses;
    randomNumber = getRandomInt(1, 100);
}

// Make the range be 1000 when the "1000" radio button is selected and uses the getRandomInt.
function selectedRange1000(){
    selectedRanges = 1000;
    document.getElementById('selectedRange').innerHTML = selectedRanges;
    numberOfGuesses = attemptsFor1000;
    document.getElementById('guessesLeft').innerHTML = numberOfGuesses;
    randomNumber = getRandomInt(1, 1000);
}


// Generates a random number between 1 and the range selected by the user.
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Check the user's guess and displays messages based on the input to help the user guess the number.
function checkGuess() {
    guessedNumber = parseInt(document.getElementById('guessField').value);
    
    if (isNaN(guessedNumber) || guessedNumber < 1 || guessedNumber > selectedRanges) {
        message = "Please enter a valid number.";
        document.getElementById('message').innerHTML = message;
        return;
    }

    if (guessedNumber === randomNumber){
        message = "Correct. Well done!";
        document.getElementById('message').innerHTML = message;
        dialog.style.display = 'block';
        checkButton.disabled = true;
    } else if (guessedNumber < randomNumber){
        message = "Too low. Try again!";
        document.getElementById('message').innerHTML = message;
    } else if (guessedNumber > randomNumber){
        message = "Too high. Try again!";
        document.getElementById('message').innerHTML = message;
    }

    numberOfGuesses--;
    document.getElementById('guessesLeft').innerHTML = numberOfGuesses;

    if (guessedNumber !== randomNumber && numberOfGuesses === 0){
        document.getElementById('randomNumberDisplay').innerHTML = 'No more guesses left!'; // <br> The random number was: ' + randomNumber;
        dialogLost.style.display = 'block';
        checkButton.disabled = true;


    }

// Adds the user's guess to the list of guess record.

    var userInput = document.getElementById('guessField').value;

    var ListItem = document.createElement('li');

    ListItem.textContent = userInput;

    document.getElementById('userGuessesDisplayed').appendChild(ListItem);
}

//Allows the user to press the "Enter" key to submit their guess.
document.getElementById('guessField').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        checkGuess();
        event.target.value = '';
    }
});

// Reloads the page to start the game again.
function playAgain(){
    location.reload();
}


// Starts the game and checks if the user has selected a range, as well as hiding the first section and displaying the second section of the game.
function startGame(){
    
    if (selectedRanges === undefined){
        selectionMsg.style.display = 'block';
        
    } else {
    sectionOne.style.display = 'none';
    sectionTwo.style.display = 'block';
    guessingRecord.style.display = 'block';
    instruction.style.display = 'none';
    }
}


// states the initial status of the objects when the game is loaded.
guessingRecord.style.display = 'none';
selectionMsg.style.display = 'none';
dialog.style.display = 'none';
dialogLost.style.display = 'none';
sectionTwo.style.display = 'none';

