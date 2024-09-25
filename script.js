// Rock Paper Scissors


// get ui elements - buttons, displays
//      diplay div for results
let displayResult = document.querySelector(".display > .result");
let displayScore = document.querySelector(".display > .score");

//      buttons triggering the game
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

// globally declare scores
let humanScore;
let computerScore;

// begin with 0 score and a begin msg on load
document.addEventListener("DOMContentLoaded", () => {
    humanScore = 0;
    computerScore = 0;
    displayScore.textContent = `You ${humanScore} - ${computerScore} CPU`;
    displayResult.textContent = `Click a button to begin`;
})

// 1 - Generate computer choice
// 2 - Get choice from user
// 3 - Play round : compare choices, update score and show result

// 1 - Generate computer choice : 

function getComputerChoice() {
// Denote choices as :
//      0 -> Rock
//      1 -> Paper
//      2 -> Scissors

// generate a num = some random number in (0,1)
// multiply num by 10
// reassign num = floor (integral) part of num (round down to nearest integer)
// get choice = num % 3
// map choice mapped from described choices
// return the mapped value

    let choices = {
        0 : "rock",
        1 : "paper",
        2 : "scissors"
    };

    let randomNumber = Math.floor(Math.random() * 10);
    let randomChoice = choices[randomNumber % 3];

    return randomChoice;

}

// 2 - Get choice from user - use events and buttons in ui

// click plays a round with the choice as per button
rockButton.addEventListener("click", () => {
    playRound("rock", getComputerChoice());

    if (checkWinner(humanScore, computerScore) === 1) {
        humanScore = 0;
        computerScore = 0;
        displayScore.textContent = `You ${humanScore} - ${computerScore} CPU`;
    }
    else if (checkWinner(humanScore, computerScore) === 2) {
        humanScore = 0;
        computerScore = 0;
        displayScore.textContent = `You ${humanScore} - ${computerScore} CPU`;
    }
});

paperButton.addEventListener("click", () => {
    playRound("paper", getComputerChoice());

    if (checkWinner(humanScore, computerScore) === 1) {
        humanScore = 0;
        computerScore = 0;
        displayScore.textContent = `You ${humanScore} - ${computerScore} CPU`;
        
    }
    else if (checkWinner(humanScore, computerScore) === 2) {
        humanScore = 0;
        computerScore = 0;
        displayScore.textContent = `You ${humanScore} - ${computerScore} CPU`;
    }
});

scissorsButton.addEventListener("click", () => {    
    playRound("scissors", getComputerChoice());

    if (checkWinner(humanScore, computerScore) === 1) {
        humanScore = 0;
        computerScore = 0;
        displayScore.textContent = `You ${humanScore} - ${computerScore} CPU`;
    }
    else if (checkWinner(humanScore, computerScore) === 2) {
        humanScore = 0;
        computerScore = 0;
        displayScore.textContent = `You ${humanScore} - ${computerScore} CPU`;
    }
});


// 3 Play round

function playRound(humanChoice, computerChoice) {
    
    // there are only 3 ways human can win against computer :
    //      HUMAN | COMPUTER
    //       Rock | Scissors
    //      Paper | Rock
    //   Scissors | Paper

    // if any of above 3 conditions is true:
    //      increment humanScore, log You Win! humanChoice beats computerChoice

    let conditionOne = (humanChoice === "rock" && computerChoice == "scissors");
    let conditionTwo = (humanChoice === "paper" && computerChoice == "rock");
    let conditionThree = (humanChoice === "scissors" && computerChoice == "paper");

    if (conditionOne || conditionTwo || conditionThree) {
        humanScore++;
        displayScore.textContent = `You ${humanScore} - ${computerScore} CPU`;
        displayResult.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    }

    // if not : check if humanChoice === computerChoice:
    //      log Its a tie between {humanChoice or computerChoice}!

    else if (humanChoice === computerChoice) {
        displayResult.textContent = `Its a tie! You both chose ${humanChoice}`;
    }

    // if not : computer has won
    //  increment computerScore, log You lose! computerChoice beats humanChoice

    else {
        computerScore++;
        displayResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        displayScore.textContent = `You ${humanScore} - ${computerScore} CPU`;
    }

}

// whichever player reaches score 5, declare it the winner

function checkWinner(humanScore, computerScore) {
    if (humanScore === 5) {
        displayResult.textContent = `You win!`;
        return 1;
    } 
    
    else if (computerScore === 5) {
        displayResult.textContent = `You lose!`;
        return 2;
    }
    
    // no winner yet
    else
        return 0;
}

