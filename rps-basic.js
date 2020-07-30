//DOM manipulation portion, not related to the actual rps game
const content = document.querySelector('body');

const info = document.createElement('h1');
info.textContent = 'This game is meant to be played in the console.';
const infoPT2 = document.createElement('h3');
infoPT2.textContent = 'To access the console, do Ctrl+Shift+I (if you are on chrome) and click on the console tab for a better view of the action. To play again, input the function game() in the console.';

content.appendChild(info);
content.appendChild(infoPT2);
//End of DOM manipulation portion

//Turns a string to a capitalized string
function capitalize(aString) {
    if (aString == null){
        return 'You have given me an invalid argument!';
    }else{
        let firstLetter = aString.slice(0,1)
        let remaingLetters = aString.slice(1);
        let newString = firstLetter.toUpperCase() + remaingLetters.toLowerCase();
        return newString;
    }
}

//The computer selects a response for rps
let computerPlay = () =>{
    let aNum = Math.floor(Math.random() * 3) + 1;
    // console.log(aNum);
    if (aNum == 1){
        return 'Rock';
    }else if(aNum ==2){
        return 'Paper';
    }else{
        return 'Scissors';
    }
}

//Turns the user's choice to a capitalized word and goes through every win loss condition for rock, paper, scissors
//If the user inputs an invalid response the browser will alert them that they have entered an invalid response
let playRound = (playerSelection, computerSelection) =>{
    if (capitalize(playerSelection) == 'Rock' && computerSelection =='Rock'){
        return 'Draw';
    }else if (capitalize(playerSelection) == 'Rock' && computerSelection =='Paper'){
        return `You Lose! ${computerSelection} beats ${capitalize(playerSelection)}`;
    }else if (capitalize(playerSelection) == 'Rock' && computerSelection =='Scissors'){
        return `You Win! ${capitalize(playerSelection)} beats ${computerSelection}`;
    }else if (capitalize(playerSelection) == 'Paper' && computerSelection =='Rock'){
        return `You Win! ${capitalize(playerSelection)} beats ${computerSelection}`;
    }else if (capitalize(playerSelection) == 'Paper' && computerSelection =='Paper'){
        return 'Draw';
    }else if (capitalize(playerSelection) == 'Paper' && computerSelection =='Scissors'){
        return `You Lose! ${computerSelection} beats ${capitalize(playerSelection)}`;
    }else if (capitalize(playerSelection) == 'Scissors' && computerSelection =='Rock'){
        return `You Lose! ${computerSelection} beats ${capitalize(playerSelection)}`;
    }else if (capitalize(playerSelection) == 'Scissors' && computerSelection =='Paper'){
        return `You Win! ${capitalize(playerSelection)} beats ${computerSelection}`;
    }else if (capitalize(playerSelection) == 'Scissors' && computerSelection =='Scissors'){
        return 'Draw';
    }else{
        alert('Please provide a valid response if you wish to play rock, paper, scissors with me!!!');
        return 'Something went wrong!';
    }
}

// const playerSelection = prompt('Pick rock, paper, or scissors to play rps with the computer', 'rock');
// const computerSelection = computerPlay()
// console.log(playRound(playerSelection, computerSelection))

//Plays rps with you 5 times, each time you will be prompted for a selection of either rock, paper, or scissors
//Keeps track of how many points the computer and the user each have
//Decides on the final winner based on the total number of points the computer and the user have at the end of five rounds
function game() {
    i = 1;
    let computerWins = 0;
    let humanWins = 0;
    while(i <= 5){
        const playerSelection = prompt('Pick rock, paper, or scissors to play rps with the computer', 'rock');
        const computerSelection = computerPlay()
        const aRound = playRound(playerSelection, computerSelection)
        console.log(aRound)
        if (aRound.includes('Win')){
            humanWins++;
        }else if(aRound.includes('Lose')){
            computerWins++
        }else if(aRound.includes('Something went wrong!')){
            console.log('You did not provide a valid choice!!!')
        }else{
            console.log('Draw, nobody gets a point.')
        }
        console.log(`The computer has ${computerWins} wins and you have ${humanWins} wins.`)
        i++
    }
    if (computerWins > humanWins){
        console.log('The final winner is the computer!');
    }else if (computerWins == humanWins){
        console.log('There is no final winner, it\'s a draw.');
    }else{
        console.log('You are the final winner!!!');
    }
}
game();