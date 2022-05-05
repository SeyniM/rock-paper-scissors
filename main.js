const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const winText = document.querySelector('.win-text');
const score = document.querySelector('.score');
console.log(score);

rock.addEventListener('click', round);
paper.addEventListener('click', round);
scissors.addEventListener('click', round);



function computerPlay (){
    let randNumber;
    let computerSelection;
    randNumber = Math.floor(Math.random()*90)+1;
    if (randNumber<=30) {
        computerSelection="rock";
        console.log("rock");
    } else if((randNumber>30) && (randNumber<=60)){
        computerSelection="paper";
        console.log("paper");
    } else {
        computerSelection="scissors";
        console.log("scissors");
    }
    return computerSelection;
}
let playerWinCount=0;
let computerWinCount=0;
let computerSelection;
let winner;



function round(){
    const playerSelection = this.classList;
    computerSelection=computerPlay();
    if (playerSelection==computerSelection){
        winText.textContent="tie";
    } else if (playerSelection=="rock" && computerSelection=="paper"){
        computerWinCount+=1;
        winText.textContent="You Lose! Paper beats Rock";
    } else if(playerSelection=="rock" && computerSelection=="scissors"){
        playerWinCount+=1;
        winText.textContent="You Won! Rock beats Scissors";
    } else if (playerSelection=="paper" && computerSelection=="scissors"){
        computerWinCount+=1;
        winText.textContent="You Lose! Rock beats Scissors";
    } else if(playerSelection=="paper" && computerSelection=="rock"){
        playerWinCount+=1;
        winText.textContent="You Won! Paper beats Rock";
    } else if (playerSelection=="scissors" && computerSelection=="rock"){
        computerWinCount+=1;
        winText.textContent="You Lose! Rock beats Scissors";
    } else if(playerSelection=="scissors" && computerSelection=="paper"){
        playerWinCount+=1;
        winText.textContent="You Won! Scissors beats Paper";
    } else {
        winText.textContent="error";
    }
    
    return [playerWinCount, computerWinCount];
}




function game(){
    while ((computerWinCount<5) && (playerWinCount<5)){
        winner=round();
        console.log(winner);
        computerWinCount=winner[1];
        playerWinCount=winner[0];
    } 
    if (computerWinCount>playerWinCount){
        console.log("computer won the game !");
    } else {
        console.log("player won the game !");
    }
}

// game();

// const buttons = document.querySelectorAll('button');




