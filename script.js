// Rock Paper Scissors
const WIN_SCORE = 5;
var humanScore = 0;
var computerScore = 0;
var humanChoice = "paper";
var computerChoice = "paper";

// get ui elements - buttons, displays
//      diplay div for results
const displayResult = document.querySelector(".display > .result");
const displayScore = document.querySelector(".display > .score");
const humanHand = document.querySelector("#humanHand");
const computerHand = document.querySelector("#computerHand");

// whichever player reaches WIN_SCORE, declare it the winner             
function checkWinner(humanScore, computerScore) {
    //      returns :
    //          1 - Human
    //          2 - CPU
    //          0 - Nobody won yet     
    if (humanScore === WIN_SCORE) {
        displayResult.textContent = `You win!`;
        return 1;
    } 
    
    else if (computerScore === WIN_SCORE) {
        displayResult.textContent = `You lose!`;
        return 2;
    }
    
    // no winner yet
    else
        return 0;
}

// show hands as per choice
function showHands(humanChoice, computerChoice) {
    humanHand.src = `./images/${humanChoice}-human.png`;
    computerHand.src = `./images/${computerChoice}-cpu.png`;
}

// buttons to choose
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

// function to reset
function resetIfEnded() {
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
}

// begin with 0 score and a begin msg on load
document.addEventListener("DOMContentLoaded", () => {
    displayScore.textContent = `You ${humanScore} - ${computerScore} CPU`;
    displayResult.textContent = `${WIN_SCORE} points to win. Click a button to begin.`;
    showHands(humanChoice, computerChoice);
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
// multiply by 3
// take integer part
// map choice mapped from described choices
// return the mapped value

    const choices = {
        0 : "rock",
        1 : "paper",
        2 : "scissors"
    };

    const randomNumber = Math.floor(Math.random() * 3);

    return choices[randomNumber];

}

// 2 - Get choice from user - use eventListener for buttons in ui
rockButton.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

paperButton.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

scissorsButton.addEventListener("click", () => {    
    playRound("scissors", getComputerChoice());
});


// 3 Play round
function playRound(humanChoice, computerChoice) {
    
    // there are only 3 ways human can win against computer :
    //      HUMAN | COMPUTER
    //       Rock | Scissors
    //      Paper | Rock
    //   Scissors | Paper

    // if any of above 3 conditions is true:
    //      increment humanScore, humanChoice beats computerChoice

    showHands(humanChoice, computerChoice);

    let conditionOne = (humanChoice === "rock" && computerChoice == "scissors");
    let conditionTwo = (humanChoice === "paper" && computerChoice == "rock");
    let conditionThree = (humanChoice === "scissors" && computerChoice == "paper");

    if (conditionOne || conditionTwo || conditionThree) {
        humanScore++;
        displayScore.textContent = `You ${humanScore} - ${computerScore} CPU`;
        displayResult.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    }

    // if not : check if humanChoice === computerChoice:
    //      Its a tie between {humanChoice or computerChoice}!

    else if (humanChoice === computerChoice) {
        displayResult.textContent = `Its a tie! You both chose ${humanChoice}`;
    }

    // if not : computer has won
    //      increment computerScore, computerChoice beats humanChoice

    else {
        computerScore++;
        displayResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        displayScore.textContent = `You ${humanScore} - ${computerScore} CPU`;
    }

    // reset score if someone has won 5 times
    resetIfEnded();

}



