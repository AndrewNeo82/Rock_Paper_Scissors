const choices = ["rock", "paper", "scissors"]
const  choicesMap = {
    rock: '<i class="fa-solid fa-hand-back-fist" style="color: #00203fff;"></i>',
    paper: '<i class="fa-solid fa-hand" style="color: #00203fff;"></i>',
    scissors: '<i class="fa-solid fa-hand-scissors" style="color: #00203fff;"></i>'
  };
  

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

function computerTurn () {
    const choices = ["rock", "paper", "scissors"];
    let cTurn = Math.floor(Math.random()* choices.length);
    document.getElementById("player_choice").innerHTML= choicesMap[computerTurn]
    return choices[cTurn];
   
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
  