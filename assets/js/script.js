// Choices

const choices = ["rock", "paper", "scissors"];
const choicesMap = {
  rock: '<i class="fa-solid fa-hand-back-fist" style="color: #00203fff;"></i>',
  paper: '<i class="fa-solid fa-hand" style="color: #00203fff;"></i>',
  scissors: '<i class="fa-solid fa-hand-scissors" style="color: #00203fff;"></i>'
};

// Get Dom Elements

const playerPick = document.getElementById("player-choice");
const computerPick = document.getElementById("cpu-choice");
const yourScore = document.getElementById("player-score");
const cpuScore = document.getElementById("cpu-score");
const restartGame = document.getElementById("restart-button");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const message = document.getElementById("message");
const choose = document.getElementById("choose");

let playerScore = 0;
let computerScore = 0;

// Function to handle computer choice

function computerTurn() {
  let cTurn = Math.floor(Math.random() * choices.length);
  computerPick.innerHTML = choicesMap[choices[cTurn]];
  return choices[cTurn];
}

// Function to handle choice of win messages 

function pickMessage() {
  const winMessages = [
    "Congratulations! You won!",
    "You win! What a hero!",
    "WooHoo ",
    "Wow so Impressive!",
    "The Computer Never Stood a Chance!",
    "Winner Winner Winner"
  ];

  const winIndex = Math.floor(Math.random() * winMessages.length);
  const winMessage = winMessages[winIndex];

  return winMessage;
}

// Function to pick a message to display if the computer wins the round 

function pickLoseMessage() {
  const loseMessages = [
    "The Computer Cheated",
    "So unlucky",
    " Better luck next time ",
    "Try again you'll win this time",
    " Oh No, You Lost (sad face)"
  ];

  const loseIndex = Math.floor(Math.random() * loseMessages.length);
  const loseMessage = loseMessages[loseIndex];

  return loseMessage;
}


/* Function to handle player choice and the main game logic which 
 calls the functions that handle if the player wins loses or draws the round */

function gamePlay(playerChoice) {
  const computerChoice = computerTurn();
  playerPick.innerHTML = choicesMap[playerChoice];

  if (playerChoice === computerChoice) {
    handleDraw();
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    handleWin();

  } else {
    handleLoss();
  }
  endGame();
}

/* Function called when the player wins the round,  displays a message increments player 
score and changes the border of the last pick display */

function handleWin() {
  const winMessage = pickMessage();
  message.textContent = winMessage;
  playerScore++;
  yourScore.textContent = "Player Score: " + playerScore;
  playerPick.style.borderColor = "green";
  computerPick.style.borderColor = "red";
}
/* Function called when the player loses the round,  displays a message increments computer 
score and changes the border of the last pick display. */

function handleLoss() {
  const loseMessage = pickLoseMessage();
  message.textContent = loseMessage;
  computerScore++;
  cpuScore.textContent = "Computer Score: " + computerScore;
  playerPick.style.borderColor = "red";
  computerPick.style.borderColor = "green";
}

// Function called when the round is  a draw, displays a message and changed border of last pick.

function handleDraw() {
  message.textContent = "A Draw! Everybody Loses!";
  playerPick.style.borderColor = "black";
  computerPick.style.borderColor = "black";
}

// Disables the choice buttons 

function disableButtons (){
  rockBtn.style.display = "none";
    paperBtn.style.display = "none";
    scissorsBtn.style.display = "none";
}

/* Check if score of 5 has been reached and if it has ends the game 
hides the choice buttons displays the message game over and shows the reset button */

function endGame() {
  if (playerScore === 5) {
    message.innerHTML = "Congratulations, you Won! Somewhere theres Fireworks";
    restartGame.style.display = "block";
    choose.innerHTML = "<p>Game Over!</p>";
    disableButtons ();

  } else if (computerScore === 5) {
    message.innerHTML = "Disaster strikes, you lost! Play again you can do it!";
    restartGame.style.display = "block";
    choose.innerHTML = "<p>Game Over!</p>";
    disableButtons ();
  }
  
}

// Function to reset the game, when the reset button is clicked the game is restored to its default values

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerPick.style.borderColor = "#adefd1ff";
  playerPick.innerHTML = "<p>Your Pick</p>";
  computerPick.style.borderColor = "#adefd1ff";
  computerPick.innerHTML = "<p>Computer Pick</p>";
  yourScore.textContent = "Player Score: " + playerScore;
  cpuScore.textContent = "Computer Score: " + computerScore;
  rockBtn.style.display = "block";
  paperBtn.style.display = "block";
  scissorsBtn.style.display = "block";
  restartGame.style.display = "none";
  message.textContent = "Rock Beats Scissors Beats Paper Beats Rock";
  choose.innerHTML = "<p>Choose Rock Paper Scissors</p>";

}
// Event listeners for choice buttons

document.getElementById('rock').addEventListener('click', function () {
  gamePlay('rock');
});
document.getElementById('paper').addEventListener('click', function () {
  gamePlay('paper');
});
document.getElementById('scissors').addEventListener('click', function () {
  gamePlay('scissors');
});

// Event listener for button to play again 

document.getElementById("restart-button").addEventListener('click', function () {
  resetGame();
});