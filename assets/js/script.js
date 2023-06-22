// choices

const choices = ["rock", "paper", "scissors"];
const choicesMap = {
  rock: '<i class="fa-solid fa-hand-back-fist" style="color: #00203fff;"></i>',
  paper: '<i class="fa-solid fa-hand" style="color: #00203fff;"></i>',
  scissors: '<i class="fa-solid fa-hand-scissors" style="color: #00203fff;"></i>'
};

// dom elementds

const playerPick = document.getElementById("player_choice");
const computerPick = document.getElementById("cpu_choice");
const yourScore = document.getElementById("player_score");
const cpuScore = document.getElementById("cpu_score");
const restartGame = document.getElementById("restart_button");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const message = document.getElementById("message")
const choose = document.getElementById("choose")


let playerScore = 0;
let computerScore = 0;

// function to handle computer choice
function computerTurn() {
  const choices = ["rock", "paper", "scissors"];
  let cTurn = Math.floor(Math.random() * choices.length);
  computerPick.innerHTML = choicesMap[choices[cTurn]];
  return choices[cTurn];
}

// function to handle choice of win messages 
function pickMessage() {
  const winMessages = [
    "Congratulations! You won!",
    "You win! What a hero!",
    "WooHoo ",
    "Victory is yours! Well done!",
    "The Computer Never Stood a Chance!",
    "Win Win Win"
   ];

  const winIndex = Math.floor(Math.random() * winMessages.length);
  const winMessage = winMessages[winIndex];

  return winMessage;
}


// function to handle player choice and the main game logic

function gamePlay(playerChoice) {
  const computerChoice = computerTurn();
  playerPick.innerHTML = choicesMap[playerChoice];

  if (playerChoice === computerChoice) {
    message.innerHTML = "A Draw! Everybody Loses!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    const winMessage = pickMessage();
    message.innerHTML = winMessage;
    playerScore++;
    yourScore.textContent = "Player Score: " + playerScore;

  } else {
    message.innerHTML = " Oh No, You Lost (sad face)";
    computerScore++;
    cpuScore.textContent = "Computer Score: " + computerScore;

  }
  endGame()
}
// check if score of 5 has been reached and disaes the buttons

function endGame() {
  if (playerScore === 3) {
    message.innerHTML = "Congratulations, you Won! Somewhere theres Fireworks";
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    restartGame.style.display = "block";
    choose.innerHTML = "<h2>Game Over!</h2>";

  } else if (computerScore === 3) {
    message.innerHTML = "Disaster strikes, you lost! Try again you can do it!";
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    restartGame.style.display = "block";
    choose.innerHTML = "<h2>Game Over!</h2>";

  }

}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  yourScore.textContent = "Player Score: " + playerScore;
  cpuScore.textContent = "Computer Score: " + computerScore;
  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorsBtn.disabled = false;
  restartGame.style.display = "none";
  message.innerHTML = "Rock Beats Scissors Beats Paper Beats Rock";
  choose.innerHTML = "<h2>Choose Rock Paper Scissors</h2>";
}
// event listeners for choice buttons

document.getElementById('rock').addEventListener('click', function () {
  gamePlay('rock');
});
document.getElementById('paper').addEventListener('click', function () {
  gamePlay('paper');
});
document.getElementById('scissors').addEventListener('click', function () {
  gamePlay('scissors');
});

// eventy listener for button to play again 
document.getElementById("restart_button").addEventListener('click', function () {
  resetGame();
});