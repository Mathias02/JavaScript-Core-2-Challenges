const outPut = document.querySelector('.final-output');
const btnGuess = document.querySelector('.btnGuess');
const userInput = document.querySelector(".inputs-Values");
const clearInput = document.querySelector('.btnNewGame');
let randomNumber = Math.floor(Math.random() * 100 + 1);
const tries = document.querySelector('.Tries-output');


clearInput.addEventListener('click', newGame);
document.addEventListener("DOMContentLoaded", newGame);
let counts = 10;
console.log(randomNumber);

function newGame() {
  //Your code here
  //Reset randomNumber
  userInput.value = '';
  //Reset users input field
  outPut.textContent = "Guess a number between 1 and 100";
  //Reset tries, and triesTaken by the user
  tries.textContent = `Number of tries ${10}`; 
  userInput.removeAttribute('disabled');
  btnGuess.removeAttribute('disabled');
}

function guessNumber() {
  //Collect input from the user
let guess = userInput.value;
  
//If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
  //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)
  //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)
  //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"

  if(guess === '' || guess <= 0 || guess > 100){
    outPut.textContent = 'Please enter a number between 1 and 100';
  }else if(guess > randomNumber){
    outPut.textContent = 'Number is too high, try again';
  }else if(guess < randomNumber){
    outPut.textContent = 'Number is too low, try again';
  }else if(guess === randomNumber){
    outPut.textContent = 'Guess is correct. You win!';
  }
  
  if(!guess) return false;
  
}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button


//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}


btnGuess.addEventListener("click", guessNumber);
document.addEventListener("keypress", keyBoardEvents);
