// choices
const choices = ["rock", "paper", "scissors"]

// choices map for updating the previous selection
const  choicesMap = {
    rock: '<i class="fa-solid fa-hand-back-fist" style="color: #00203fff;"></i>',
    paper: '<i class="fa-solid fa-hand" style="color: #00203fff;"></i>',
    scissors: '<i class="fa-solid fa-hand-scissors" style="color: #00203fff;"></i>'
  };
  
// Elements 

const playerPick = document.getElementById("player_choice");
const ComputerPick = document.getElementById("computer_choice");
const yourScore = document.getElementById("player_score");
const cpuscore = document.getElementById("cpu_score");
const restartGame = document.getElementById("restart_button");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

let playerScore = 0;
let ComputerScore = 0;

// function to generate the computers turn and display previous pick
function computerTurn () {
    const choices = ["rock", "paper", "scissors"];
    let cTurn = Math.floor(Math.random()* choices.length);
    return choices[cTurn];
}

// function to handle the players turn display result message and update score
function gamePlay(playerChoice) {
  const computerChoice = computerTurn();

  if (playerChoice === computerChoice) {
    message.innerHTML = "its a draw";
    playerPick.innerHTML = choicesMap[playerChoice];
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    message.innerHTML =" you won the Round";
    playerPick.innerHTML = choicesMap[playerChoice];
    playerScore++;
    yourScore.textContent = "Player Score: " + playerScore;

  } else {
    message.innerHTML=" Oh No, You Lost (sad face)";
    playerPick.innerHTML = choicesMap[playerChoice];
    computerScore++;
    cpuScore.textContent = "Computer Score: " + computerScore;

  }
}



document.getElementById('rock').addEventListener('click', function () {
    gamePlay('rock');
  });
  document.getElementById('paper').addEventListener('click', function () {
    gamePlay('paper');
  });
  document.getElementById('scissors').addEventListener('click', function () {
    gamePlay('scissors');
  });
  