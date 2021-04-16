let guessedNumber = null;
let  youName;
let guess;
const min = 0;
const max = 25;

while (youName === undefined || youName=== null || youName.length === 0) {
  youName = prompt("What is your name?");
}

alert("Guess the Number " + youName + "!!");

guessedNumber = Math.floor(Math.random() * (max - min)) + min;

while (guess !== guessedNumber) {
  guess = parseInt(prompt("Enter   your number"));
  alert("You guessed this number :" + guess);
  if (guess > guessedNumber) {
    alert("Too high! True it again:");
  } else if (guess < guessedNumber) {
    alert("Too low, try it again");
  } else {
    alert("You guessed the right number: " + guess);
    alert(
      "See you!"
      
    );
  }
}