//script.js

function computerPlay(){
    rand = Math.random();
    console.log(rand);
    if(rand <=.33) return 'Rock';
    else if (rand >.33 && rand <=.66) return 'Paper';
    else return 'Scissors';
}

function rpsResult(playerChoice, computerChoice){
    playerChoice= firstCapitalized(playerChoice);
    if(playerChoice === computerChoice) return `You Tied! ${playerChoice} Ties ${computerChoice}`;
    else if(playerChoice === "Rock"){
        if (computerChoice==="Scissors") return `You Win! ${playerChoice} beats ${computerChoice}`;
        if (computerChoice==="Paper") return `You lose! ${computerChoice} beats ${playerChoice}`;
    }
    else if(playerChoice === "Paper"){
        if (computerChoice==="Rock") return `You Win! ${playerChoice} beats ${computerChoice}`;
        if (computerChoice==="Scissors") return `You lose! ${computerChoice} beats ${playerChoice}`;
    }
    else if(playerChoice === "Scissors"){
        if (computerChoice==="Paper") return `You Win! ${playerChoice} beats ${computerChoice}`;
        if (computerChoice==="Rock") return `You lose! ${computerChoice} beats ${playerChoice}`;
    }

}

function firstCapitalized(str){
    first = str.slice(0,1);
    rest = str.slice(1);
    first = first.toUpperCase();
    rest = rest.toLowerCase();
    return first+rest;
}
console.log(rpsResult('rOck', computerPlay()));