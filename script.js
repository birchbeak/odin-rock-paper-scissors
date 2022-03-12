//script.js

function computerPlay(){
    rand = Math.random();
    console.log(rand);
    if(rand <=.33) return 'Rock';
    else if (rand >.33 && rand <=.66) return 'Paper';
    else return 'Scissors';
}

console.log(computerPlay());