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
    const playerSelection = prompt("What's your name?").toLowerCase();
    computerSelection=computerPlay();
    if (playerSelection==computerSelection){
        console.log("tie");
    } else if (playerSelection=="rock" && computerSelection=="paper"){
        computerWinCount+=1;
        console.log("You Lose! Paper beats Rock");
    } else if(playerSelection=="rock" && computerSelection=="scissors"){
        playerWinCount+=1;
        console.log("You Won! Rock beats Scissors");
    } else if (playerSelection=="paper" && computerSelection=="scissors"){
        computerWinCount+=1;
        console.log("You Lose! Rock beats Scissors");
    } else if(playerSelection=="paper" && computerSelection=="rock"){
        playerWinCount+=1;
        console.log("You Won! Paper beats Rock");
    } else if (playerSelection=="scissors" && computerSelection=="rock"){
        computerWinCount+=1;
        console.log("You Lose! Rock beats Scissors");
    } else if(playerSelection=="scissors" && computerSelection=="paper"){
        playerWinCount+=1;
        console.log("You Won! Scissors beats Paper");
    } else {
        console.log("error")
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

game();