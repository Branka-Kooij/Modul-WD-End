let numberToBeGuessed = null;
let  youName;
let guess;
const min = 0;
const max = 25;

while (youName === undefined || youName=== null || youName.length === 0) {
  youName = prompt("What is your name?");
}

alert("Guess the Number " + youName + "!!");

numberToBeGuessed  = Math.floor(Math.random() * (max - min)) + min;

while (guess !== numberToBeGuessed ) {
  guess = parseInt(prompt("Enter   your number"));
  alert("You guessed this number :" + guess);
  if (guess > numberToBeGuessed ) {
    alert("Too high! True it again:");
  } else if (guess <numberToBeGuessed ) {
    alert("Too low, try it again");
  } else {
    alert("You guessed the right number: " + guess);
    alert(
      "See you!"
      
    );
  }
}