document.addEventListener("DOMContentLoaded", function() {

// Choices and choice Map

const choices = ["rock", "paper", "scissors"];

const choicesMap = {
  rock: '<i class="fa-solid fa-hand-back-fist"></i>',
  paper: '<i class="fa-solid fa-hand"></i>',
  scissors: '<i class="fa-solid fa-hand-scissors"></i>'
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

// Messages to display after each round depending on the result

const WIN_MESSAGES = [
  "Congratulations! You won!",
  "You win! What a hero!",
  "WooHoo",
  "Wow so Impressive!",
  "The Computer Never Stood a Chance!",
  "Winner Winner Winner"
];

const LOSE_MESSAGES = [
  "The Computer Cheated",
  "So unlucky",
  "Better luck next time",
  "Try again, you'll win this time",
  "Oh No, You Lost 😞"
];

// Maximum score reached before game ends
const MAX_MOVES = 5;

let playerScore = 0;
let computerScore = 0;

// Function to handle computer choice

function computerTurn() {
  let cTurn = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[cTurn];
  computerPick.innerHTML = choicesMap[computerChoice];
  return computerChoice;
}

//  

function gamePlay(event) {
  const playerChoice = this.dataset.choice;
  const computerChoice = computerTurn();
  renderChoice(true, playerChoice);
  renderChoice(false, computerChoice);
  const moveResult = checkMoveResult(playerChoice, computerChoice);
  renderMoveResult(moveResult);
  checkIfGameEnd();
}

// Function to render the player or computer choice and display the last choice

function renderChoice(isPlayer, choice) {
  const element = isPlayer ? playerPick : computerPick;
  element.innerHTML = choicesMap[choice];
  console.log(choice);
}

// Gets the result and calls the appropriate function to handle the result

function renderMoveResult(moveResult) {
  if (moveResult === "win") {
    handleWin();
  } else if (moveResult === "lose") {
    handleLoss();
  } else {
    handleDraw();
  }
}

// compares the player choice and computer choice and returns win lose or draw depending on the choices

function checkMoveResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "draw";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return "win";
  } else {
    return "lose";
  }
}

// Function to pick a message to display fro the win messages and lose message arrays 

function pickMessage(win) {
  const messageList = win ? WIN_MESSAGES : LOSE_MESSAGES;
  const index = Math.floor(Math.random() * messageList.length);
  return messageList[index];
}

/* Function called when the player wins the round,  displays a message increments player 
score and changes the border of the last pick display checks if game has ended */

function handleWin() {
  const winMessage = pickMessage(true);
  message.textContent = winMessage;
  playerScore++;
  yourScore.textContent = "Player Score: " + playerScore;
  playerPick.style.borderColor = "green";
  computerPick.style.borderColor = "red";
  checkIfGameEnd();
}

/* Function to handle the player losing the round displays a message increments computer  
score and changes the border of the last pick display checks if game has ended */

function handleLoss() {
  const loseMessage = pickMessage(false);
  message.textContent = loseMessage;
  computerScore++;
  cpuScore.textContent = "Computer Score: " + computerScore;
  playerPick.style.borderColor = "red";
  computerPick.style.borderColor = "green";
  checkIfGameEnd();
}

/* Function called when the round is  a draw, displays a message and changed border of last pick
checks if game has ended */

function handleDraw() {
  message.textContent = "A Draw! Everybody Loses!";
  playerPick.style.borderColor = "black";
  computerPick.style.borderColor = "black";
  checkIfGameEnd();
}

// Disables the choice buttons 

function disableButtons() {
  rockBtn.style.display = "none";
  paperBtn.style.display = "none";
  scissorsBtn.style.display = "none";

}

// enables the choice buttons and hides the reset button

function enableButtons() {
  rockBtn.style.display = "block";
  paperBtn.style.display = "block";
  scissorsBtn.style.display = "block";
  restartGame.style.display = "none";
}

// Function to check if the game has ended if either player or computer reaches score of five

function checkIfGameEnd() {
  if (playerScore === MAX_MOVES || computerScore === MAX_MOVES) {
    endGame();
  }
}

// ends the game displays win or loss game message and calls the function to disable the buttons

function endGame() {
  restartGame.style.display = "block";
  disableButtons();
  let gameResultMessage;
  if (playerScore === MAX_MOVES) {
    gameResultMessage = "Congratulations! You won the game!";
  } else {
    gameResultMessage = "Disaster strikes The computer Won!";
  }
  message.textContent = gameResultMessage;
  choose.innerHTML = "<p>Game Over!</p>";
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
  message.textContent = "Rock Beats Scissors Beats Paper Beats Rock";
  choose.innerHTML = "<p>Choose Rock Paper Scissors</p>";
  enableButtons();

}

// Event listeners for choice buttons

document.querySelectorAll(".hand").forEach((element) => {
  element.addEventListener("click", gamePlay);
});

// Event listener for the button to play again

restartGame.addEventListener("click", resetGame);
})
