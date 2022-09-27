const button = document.querySelector('#btnStart');
const inputEl = document.querySelector('#inputEl');
const counter = document.querySelector('#show');
let playerOne = document.querySelector('#playerOneScore');
let playerTwo = document.querySelector('#playerTwoScore')
const winning = document.querySelector('#wonText');
let idTimer;
let scoreOne = 0;
let scoreTwo = 0;
let gameStart = false;
button.addEventListener("click", startGame);

function startGame(e) {
  e.preventDefault();
  gameStart = true;
  clearScore();
  let val = inputEl.value * 1000;
  if(!val && val !== 'number'){
     alert('Invalid command, enter a number please');
     return;
  }else if(val < 0){
   alert('Please enter a valid number above zero')
   inputEl.value = '';
   return;
  }else{
    return timer(val);
  }
}

function clearScore(){
  inputEl.innerText = '';
  scoreOne = 0;
  scoreTwo = 0;
  winning.innerText = '';
  playerOne.innerText = "Score: " + scoreOne;
  playerTwo.innerText = "Score: " + scoreTwo;
}

function timer(minusNum){
  idTimer = setTimeout(function(){
    gameStart = false;
    winner();
  }, minusNum);
}

function keyBoardEvents(e) {
  if (gameStart) {
    if (e.keyCode === 76) {
      scoreOne++;
    } else if (e.keyCode === 83) {
      scoreTwo++;
    }
    playerOne.innerText = "Score: " + scoreOne ;
    playerTwo.innerText = "Score: " + scoreTwo;
  }
  }

  function winner() {
    if (scoreOne > scoreTwo) {
      winning.innerText = "Player One Won!!";
    } else if (scoreOne < scoreTwo) {
      winning.innerText = "Player Two Won!!";
    } else if (scoreOne=== scoreTwo) {
      winning.innerText = "Players Tied!";
    }
  }


document.addEventListener("keyup", keyBoardEvents);
