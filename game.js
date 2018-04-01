// JavaScript Psychic Game

// Game config
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberGuesses = 12;
var wins = 0;
var losses = 0;
var guesses = [];
var randomLetter = "";

// JS into HTML
function updateOutput() {
    var html =
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Guesses Left: " + (numberGuesses - guesses.length) + "</p>" +
    "<p>Guesses: " + guesses + "</p>";

    document.querySelector("#game").innerHTML = html;
}
updateOutput();


function pickRandomLetter() {
    var letter = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(letter);
    return letter;
}
// press any key in the alphabet
document.onkeyup = function(event) {
    var guess = event.key.toLowerCase();
    if (! alphabet.includes(guess)) { return; }  
    if (guesses.includes(guess))    { return; }  

// Tracking guesses
    guesses.push(guess); 
    guesses.sort(); 
// When guessed correctly, win!
    if (guess === randomLetter)  {
        wins++;  

// Reset the game 
        guesses = [];
        targetLetter = pickRandomLetter();
    } else {
// Incorrect guess 
        if (guesses.length >= numberGuesses) {
            losses++; 
// reset the game state for another round
            guesses = [];
            targetLetter = pickRandomLetter();
        }
    }

// update the displayed info
    updateOutput();
}
