function getComputerChoice(){
  let computerChoice = '';
  let randomNumber = Math.random();

  if(randomNumber >= 0 && randomNumber < 1/3){
    computerChoice = 'rock';
  }else if(randomNumber >= 1/3 && randomNumber < 2/3){
    computerChoice = 'paper';
  } else if (randomNumber >= 2/3 && randomNumber < 3/3){
    computerChoice = 'scissors';
  }
  return computerChoice;
}

function getHumanChoice(){
  let humanChoice = prompt('what is your choice?')
  if (humanChoice === 'rock' || humanChoice === 'paper' || humanChoice ==='scissors'){
    return humanChoice;
  } else {
    alert('please pick a valid choice!');
  }
}

let score = {
  humanScore : 0,
  computerScore: 0,
  ties: 0
}

function playRound(humanChoice, computerChoice){
  let result = '';
  if (humanChoice === computerChoice){
    result = 'tie!';
    score.ties += 1;
  } else if(humanChoice === 'rock'){
    if(computerChoice === 'paper'){
      result = 'you lose!';
      score.computerScore +=1;
    } else if(computerChoice === 'scissors'){
      result = 'you win!';
      score.humanScore += 1;
    }
  } else if (humanChoice === 'paper'){
    if(computerChoice === 'rock'){
      result = 'you win!';
      score.humanScore += 1;
    } else if (computerChoice === 'scissors'){
      result = 'you lose!';
      score.computerScore +=1;
    }
  } else if(humanChoice === 'scissors'){
    if(computerChoice === 'rock'){
      result = 'you lose!';
      score.computerScore +=1;
    } else if (computerChoice === 'paper'){
      result = 'you win! ';
      score.humanScore += 1;
    }
  }

 /*
  if(result === 'you win!'){
    score.humanScore += 1;
  }else if(result === 'you lose!'){
    score.computerScore +=1;
  }else if (result === 'tie!'){
    score.ties += 1;
  }
 */

  localStorage.setItem('score', JSON.stringify(score));
  updateScore();
  return result
}

function updateScore(){
  console.log (` wins: ${score.humanScore} \n losses:${score.computerScore} \n ties:${score.ties}`);
}

/*
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
*/

function playGame(){
  let score = {
    humanScore : 0,
    computerScore: 0,
    ties: 0
  }
  
  for (i = 1 ; i < 6 ; i ++ ){
    playRound(getHumanChoice(), getComputerChoice());
  }

  compareScores(score.humanScore, score.computerScore);
}

playGame();

function compareScores(humanScore,computerScore){
  if(humanScore > computerScore){
    alert('you win the game');
  } else if(humanScore < computerScore){
    alert('you lost the game');
  } 
  
}