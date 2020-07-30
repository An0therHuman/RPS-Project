//DOM manipulation portion, not related to the actual rps game
const content = document.querySelector('body');

const info = document.createElement('h1');
info.textContent = 'This is the improved version of my rps project. It now has a basic UI.';
const infoPT2 = document.createElement('h3');
infoPT2.textContent = `Please select rock, paper, or scissors to start a game with the computer:`;

//Styling for the buttons
const styling = 'padding: 10px 15px;margin: 0px 5px ;border-radius: 5px;color: black;';

//Creation of the buttons
const btn1 = document.createElement('button');
btn1.setAttribute('id','Rock');
btn1.textContent = "Rock"
btn1.setAttribute('style', styling)
const btn2 = document.createElement('button');
btn2.textContent = "Paper"
btn2.setAttribute('style', styling)
const btn3 = document.createElement('button');
btn3.textContent = "Scissors"
btn3.setAttribute('style', styling)

//Creation of the result output div
const newLine = document.createElement('br');
const newLine2 = document.createElement('br');
const div1 = document.createElement('div');
div1.textContent = 'Results will be shown here';
// This allows for \n to show up in the html
div1.setAttribute('style', 'white-space: pre-wrap;')


content.appendChild(info);
content.appendChild(infoPT2);
content.appendChild(btn1);
content.appendChild(btn2);
content.appendChild(btn3);
content.appendChild(newLine);
content.appendChild(newLine2);
content.appendChild(div1);
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
        // alert('Please provide a valid response if you wish to play rock, paper, scissors with me!!!');
        return 'Something went wrong!';
    }
}


// const playerSelection = prompt('Pick rock, paper, or scissors to play rps with the computer', 'rock');
// const computerSelection = computerPlay()
// console.log(playRound(playerSelection, computerSelection))


const buttons = document.querySelectorAll('button');

// Adds an event listener to each button
// Each time the button is pressed and a round is player the round number and who won is tracked
// After 5 rounds a winner will be declared and all the counters will be reset
buttons.forEach((button) => {
    i = 1;
    let computerWins = 0;
    let humanWins = 0;
    button.addEventListener('click', () => {
        const computerSelection = computerPlay()
        aRound = playRound(button.textContent, computerSelection);
        div1.textContent = aRound;
        if (aRound.includes('Win')){
            humanWins++;
        }else if(aRound.includes('Lose')){
            computerWins++
        }else if(aRound.includes('Something went wrong!')){
            div1.textContent +=('You did not provide a valid choice!!!')
        }else{
            div1.textContent +=('\nNobody gets a point.')
        }
        div1.textContent +=(`\nThe computer has ${computerWins} wins and you have ${humanWins} wins.`)
        if (i == 5){
            if (computerWins > humanWins){
                div1.textContent +=('\n5 Rounds have been played. The final winner is the computer!');
            }else if (computerWins == humanWins){
                div1.textContent +=('\n5 Rounds have been played. There is no final winner, it\'s a draw.');
            }else{
                div1.textContent +=('\n5 Rounds have been played. You are the final winner!!!');
            }
            computerWins = 0;
            humanWins = 0;
            i = 1;
            return;
        }
        i++;
    });
  });
