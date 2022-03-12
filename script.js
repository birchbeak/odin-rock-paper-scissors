//script.js

game();

function game(){
    console.log("Ready to play Rock Paper Scissors?");
    let playerScore=0;
    let compScore=0;

    for(let i=0; i<5; i++){
        let choice= prompt("Choose!", "");
        if(choice === null){
            console.log("Cancelled");
            return 1;
        }

        let resultText= rpsResult(choice, computerPlay() );
        let result = resultText.slice(4,5);
        console.log(resultText);
        
        if (result === 'T') ;
        else if(result === 'W') playerScore++;
        else if(result === 'L') compScore++;
        else{
            i--;
            console.log('Please Try Again');
        }
    }
    
    if(playerScore===compScore){
        console.log(`The game tied ${playerScore} to ${compScore}`);
    }
    else if(playerScore>compScore){
        console.log(`You won the game ${playerScore} to ${compScore}!`);
    }
    else{
        console.log(`You lost the game ${playerScore} to ${compScore}`);
    }
}

function computerPlay(){
    rand = Math.random();
    console.log(rand);
    if(rand <=.33) return 'Rock';
    else if (rand >.33 && rand <=.66) return 'Paper';
    else return 'Scissors';
}

function rpsResult(playerChoice, computerChoice){
    if (playerChoice !==null) playerChoice= firstCapitalized(playerChoice);
    else return null;

    if(playerChoice === computerChoice) return `You Tied! ${playerChoice} Ties ${computerChoice}`;
    else if(playerChoice === "Rock"){
        if (computerChoice==="Scissors") return `You Win! ${playerChoice} beats ${computerChoice}`;
        if (computerChoice==="Paper") return `You Lose! ${computerChoice} beats ${playerChoice}`;
    }
    else if(playerChoice === "Paper"){
        if (computerChoice==="Rock") return `You Win! ${playerChoice} beats ${computerChoice}`;
        if (computerChoice==="Scissors") return `You Lose! ${computerChoice} beats ${playerChoice}`;
    }
    else if(playerChoice === "Scissors"){
        if (computerChoice==="Paper") return `You Win! ${playerChoice} beats ${computerChoice}`;
        if (computerChoice==="Rock") return `You Lose! ${computerChoice} beats ${playerChoice}`;
    }
    else{
        return `Choice not recognized.`;
    }

}

function firstCapitalized(str){
    first = str.slice(0,1);
    rest = str.slice(1);
    first = first.toUpperCase();
    rest = rest.toLowerCase();
    return first+rest;
}