//create a function that randomly reutrns rock paper or scissors (getcomputermove)
function getComputerChoice(){
  let randomNumber = Math.random();
  let computerMove = "";

  if(randomNumber >= 0 && randomNumber < 1/3 ){
    computerMove = "rock";
  } else if(randomNumber >=  1/3 && randomNumber < 2/3){
    computerMove = "paper";
  } else if(randomNumber >= 2/3 && randomNumber < 3/3){
    computerMove = "scissors"
  }
  return computerMove;
};

//getComputerChoice();

//create a function that returns the valid human choice
/*
function getHumanChoice(){
  let humanChoice = prompt("what is your choice?");
  if(humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors'){
    return humanChoice;
  } else {
    alert('please pick a valid choice!');
  }
};
*/

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const Div1 = document.getElementById("results-div");
const Div2 = document.getElementById("score-div");
const resetButton = document.getElementById("reset");
const Div3 = document.getElementById("container");
const buttons = document.querySelector(".button");
let humanMove = "";
rockButton.addEventListener("click", ()=>{
  humanMove = "rock";
  playRound(getComputerChoice());
});

paperButton.addEventListener("click", ()=>{
  humanMove = "paper";
  playRound(getComputerChoice());
});

scissorsButton.addEventListener("click", ()=>{
  humanMove = "scissors";
  playRound(getComputerChoice());
});

resetButton.addEventListener("click", ()=>{
  score.humanScore = 0;
  score.computerScore = 0;
  score.ties = 0;
  updateScores();
  Div1.innerHTML = "";
});


// create 2 variables, humanScore and computerScore to keep track of the scores
let score = {
  humanScore : 0,
  computerScore : 0,
  ties:0
};

//write a function that takes the human and computer choices as 
// arguments, plays a single round, increments the winner's score
//and announces a winner

function playRound(computerMove){
 let result = '';

 if(computerMove === humanMove ){
   result = "its a tie!";
   score.ties += 1;
  } else if(humanMove === "rock"){
   if(computerMove === "paper"){
    result = "you lose! paper beats rock!";
    score.computerScore += 1;
   } else if(computerMove === "scissors"){
    result = "you win! rock beats scissors!";
    score.humanScore += 1;
   }
 } else if(humanMove === "paper"){
  if(computerMove === "rock"){
    result = "you win! paper beats rock!"
    score.humanScore += 1;
  } else if(computerMove === "scissors"){
    result = "you lose! scissors beats paper";
    score.computerScore += 1;
  }
 } else if(humanMove === "scissors"){
   if(computerMove === "rock"){
    result = "you lose! rock beats scissors!";
    score.computerScore += 1;
   } else if(computerMove === "paper"){
    result = "you win! scissors beats paper!";
    score.humanScore += 1;
   }
 }
  
  localStorage.setItem('scores' , JSON.stringify(score));
  Div1.innerHTML = ` you picked ${humanMove},\n the computer picked ${computerMove},\n ${result}.`;
  updateScores();
};


//playRound(getHumanChoice(), getComputerChoice());
//create a function that automatially updates the scores
function updateScores(){
 Div2.innerHTML = ` your score:${score.humanScore},\n computer score:${score.computerScore},\n ties:${score.ties}`;
};

//create a function named playgame() that calls playround()to play 5 
//rounds, keeps track of the scores and displays the winner at the end

function playGame(){
  for(i = 0; i < 5; i ++){
    playRound(getHumanChoice(), getComputerChoice());
  }
  let result2 = declareWinner();
  return console.log(result2);
};

//create a funtion to compate the scores at the end of a round
//and delare a winner
function declareWinner(){
  let winner = '';
  let updatedScores = JSON.parse(localStorage.getItem('scores'));  
  if(updatedScores.humanScore > updatedScores.computerScore){
    winner = 'you win! congratulations, i\'ll get you next time!';
  } else if(updatedScores.computerScore > updatedScores.humanScore){
    winner = 'the computer wins! you snooze you loose!';
  } else if(updatedScores.humanScore === updatedScores.computerScore){
    winner = 'its a tie!';
  }
  return winner;
};

//add styles
Div1.setAttribute(
  "style", 
  "color:white;font-family:arial;font-size:20px;margin:20px;"
);
Div2.setAttribute(
  "style", 
  "color:white;font-family:arial;font-size:20px;margin:20px;"
);
Div3.setAttribute(
  "style",
  "width:80%; height:300px;display:flex;justify-content:space-between; padding:10px;"
);
rockButton.setAttribute(
  "style",
  "width:200px; border:none; cursor:pointer; height:200px; border-radius:100px;background:yellow; color:black; font-size:40px;"
);
paperButton.setAttribute(
  "style",
  "width:200px; border:none; cursor:pointer; height:200px; border-radius:100px;background:yellow; color:black; font-size:40px;"
);
scissorsButton.setAttribute(
  "style",
  "width:200px; border:none; cursor:pointer; height:200px; border-radius:100px;background:yellow; color:black; font-size:40px;"
);
resetButton.setAttribute(
  "style",
  "width:200px; border:none; cursor:pointer; height:200px; border-radius:100px;background:yellow; color:black; font-size:40px;"
);