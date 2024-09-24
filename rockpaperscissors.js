/*
let score = JSON.parse(localStorage.getItem("score")) || {
  humanScore:0,
  computerScore: 0,
  ties : 0
};
*/


function getComputerChoice(){
  let randomNumber = Math.random();
  let computerChoice = '';
  if(randomNumber > 0 && randomNumber <= 1/3){
    computerChoice = 'rock';
  } else if ( randomNumber > 1/3 && randomNumber <= 2/3){
    computerChoice = 'paper';
  } else if ( randomNumber > 2/3 && randomNumber <= 3/3){
    computerChoice = 'scisors';
  }
  return computerChoice;
}

function getHumanChoice(){
  let humanChoice = prompt('what is your choice?');
  if(humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors'){
    return humanChoice.toLowerCase();;
  }else{
    alert('please select a valid choice');
  }

}

function playRound(humanChoice,computerChoice){
  let result = '';
  let score = JSON.parse(localStorage.getItem('score')) ||  {wins:0,
    losses:0,
    ties:0
  };
  localStorage.setItem('score', JSON.stringify(score));
  let retreivedScore = JSON.parse(localStorage.getItem('score'));//change the score from a string back to an object to retireive it//
 if (humanChoice === computerChoice){
  result = 'its a tie';
 } else if(
  (humanChoice === 'rock' && computerChoice === 'paper') ||
  (humanChoice === 'paper' && computerChoice === 'scissors') ||
  (humanChoice === 'scissors' && computerChoice === 'rock')){
    result = "you lose";
  }else{
    result = "you win";
  }

  if (result === 'you win'){
    retreivedScore.humanScore +=1;
  } else if(result === 'you lose'){
    retreivedScore.computerScore +=1;
  }else if(result === 'its a tie'){
    retreivedScore.ties += 1;
  }

  return console.log(`${result}, ${retreivedScore.humanScore}, ${retreivedScore.computerScore}, ${retreivedScore.ties}`);
};



function playGame(){
  for(i = 0; i < 5; i ++){
    let score = {
    humanScore : 0,
    computerScore: 0,
    ties : 0
  };
   localStorage.setItem('score', JSON.stringify(score));
   let retreivedScore = JSON.parse(localStorage.getItem('score'));
   let humanSelection = getHumanChoice();
   let computerSelection = getComputerChoice();
   playRound(humanSelection, computerSelection);

    if(i === 5 &&  retreivedScore.humanScore > retreivedScore.computerScore ){
      console.log("game over! you win");
      break;
    } else if (i === 5 && retreivedScore.computerScore > retreivedScore.humanScore){
      console.log('game over! you lose');
      break;
    } 
   
  }
};

playGame();

