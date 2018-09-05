

// An array that lists out all of the computer options

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Holds the wins, losses, guesses left, and users choice
wins = 0,
losses = 0,
guessNum = 9,
userChoices = [];

// Hold the references to the HTML that will display the items
winsText = document.getElementById('wins-text'),
lossesText = document.getElementById('losses-text'),
usersGuessesText = document.getElementById('users-guesses'),
guessesLeftText = document.getElementById('guesses-left'),

// Get the user's key press
document.onkeyup = function(event) {
// User key pressed:
var userGuess = event.key

// Computers's random choice
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]

var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Let's determine the outcome of the game
if (options.indexOf(userGuess) > -1) {

    if (userGuess === computerGuess) {
        wins++;
        guessNum = 9;
        userChoices = [];
    }

    if (userGuess != computerGuess) {
        guessNum --;
        userChoices.push(userGuess);
    }

    if (guessNum === 0) {
    guessNum = 9;
    losses ++;
    userChoices = [];
    alert("Game Over, Try Again");
    }
                
    // Display the wins/losses/guesses left/guesses so far
    guessesLeftText.textContent = "Guesses Left: " + guessNum
    usersGuessesText.textContent = "You chose: " + userChoices    
    winsText.textContent = "Wins: " + wins
    lossesText.textContent = "Losses: " + losses

    }

    function resetGame() {
        psychicGuess = psychicChoices[Math.floor(Math.random() * psychicChoices.length)];
        userChoices = [];
        guessNum = 9;
        
    }

}
