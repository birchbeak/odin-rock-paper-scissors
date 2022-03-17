//script.js
const rock='Rock';
const paper='Paper';
const scissors='Scissors';
const tied='Tied';
const win='Win';
const lose='Lose';
const problem='Problem';

let score=[0,0];

const rockButton= document.querySelector('#rock');
const paperButton= document.querySelector('#paper');
const scissorsButton= document.querySelector('#scissors');
const resultBox= document.querySelector('#result');

rockButton.addEventListener('click', ()=>{playRound(rock, computerPlay())});
paperButton.addEventListener('click', ()=>{playRound(paper, computerPlay())});
scissorsButton.addEventListener('click', ()=>{playRound(scissors, computerPlay())});


function computerPlay(){
    rand = Math.random();
    console.log(rand);
    if(rand <=.33) return rock;
    else if (rand >.33 && rand <=.66) return paper;
    else return scissors;
}

function playRound(playerChoice, computerChoice){
    if (playerChoice !== rock && playerChoice !== paper && playerChoice !== scissors) return null;

    if(playerChoice === computerChoice) handleResult(tied,playerChoice,computerChoice);
    else if(playerChoice === rock){
        if (computerChoice===scissors) handleResult(win,playerChoice,computerChoice);
        if (computerChoice===paper) handleResult(lose,playerChoice,computerChoice);
    }
    else if(playerChoice === paper){
        if (computerChoice===rock) handleResult(win,playerChoice,computerChoice);
        if (computerChoice===scissors) handleResult(lose,playerChoice,computerChoice);
    }
    else if(playerChoice === scissors){
        if (computerChoice===paper) handleResult(win,playerChoice,computerChoice);
        if (computerChoice===rock) handleResult(lose,playerChoice,computerChoice);
    }
    else return null;
}

function handleResult(res, pChoice, cChoice){

    if (res===tied) 
        resultBox.textContent=`You ${res}, ${pChoice} To ${cChoice}`;
    else if (res===win) {
        resultBox.textContent=`You ${res}, ${pChoice} beats ${cChoice}`
        score[0]++;
    ;}
    else if(res===lose) {
        resultBox.textContent=`You ${res}, ${cChoice} beats ${pChoice}`
        score[1]++;
        ;}
    else resultBox.textContent=`There was a problem`;
    
    if (score[0]+score[1] === 5) {
        if (score[0]>score[1]) resultBox.textContent+=`\nYou Won The Set${score[0]} To ${score[1]}`;
        else if (score[0]<score[1]) resultBox.textContent+=`\nYou Lost The Set ${score[0]} To ${score[1]}`;
        else resultBox.textContent=`What is going on??`;
        score[0]=0;
        score[1]=0;
    }
}
