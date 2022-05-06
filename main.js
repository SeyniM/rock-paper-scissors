


const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const winText = document.querySelector('.win-text');
const score = document.querySelector('.score');

rock.addEventListener('click', round);
paper.addEventListener('click', round);
scissors.addEventListener('click', round);



function computerPlay(){
    let randNumber;
    let computerSelection;
    randNumber = Math.floor(Math.random()*90)+1;
    if (randNumber<=30) {
        computerSelection="rock";
    } else if((randNumber>30) && (randNumber<=60)){
        computerSelection="paper";
    } else {
        computerSelection="scissors";
    }
    return computerSelection;
}


let playerWinCount=0;
let computerWinCount=0;
let scoreMatrix=[];

function round(){
    const playerSelection = this.classList;
    computerSelection=computerPlay();
    if (playerSelection==computerSelection){
        winText.textContent="Tie";
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
    scoreMatrix=[playerWinCount, computerWinCount];
    game();
}




function game(){
    if ((computerWinCount<5) && (playerWinCount<5)){
        score.textContent=`Human : ${scoreMatrix[0]}     Computer : ${scoreMatrix[1]}`;
        computerWinCount=scoreMatrix[1];
        playerWinCount=scoreMatrix[0];
    } else if (computerWinCount>playerWinCount){
        score.textContent="Computer won the game !";
        computerWinCount=0;
        playerWinCount=0;
    } else {
        score.textContent="You won the game !";
        computerWinCount=0;
        playerWinCount=0;
    }
}

