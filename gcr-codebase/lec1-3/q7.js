
const secretNumber = Math.floor(Math.random() * 50) + 1;
const userGuess = 25; // Change this value to test the game.

// Compare the user's guess with the secret number.
if (userGuess === secretNumber) {
    console.log("Correct guess!");
} else {
    // Check whether the guess is within 3 of the secret number.
    if (Math.abs(userGuess - secretNumber) <= 3) {
        console.log("Very close!");
    } else if (userGuess > secretNumber) {
        console.log("Too high");
    } else {
        console.log("Too low");
    }
}

console.log(`Secret Number: ${secretNumber}`);
console.log(`Your Guess: ${userGuess}`);
