const choices = ["rock", "paper", "scissors"]

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
    return choices[cTurn];
   
}
let test = computerTurn()
console.log(test)