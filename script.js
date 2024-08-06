// Rock Paper Scissors


// 1 - Generate computer choice
// 2 - Get choice from user
// 3 - Play Round : Compare choices, update score and show result

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
// map choice mapped from descriped choices
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

// 2 - Get choice from user

function getHumanChoice() {

// prompt user for string input
// convert the input string to lower-case
// check if the string is a valid response, if yes return it
// if not keep prompting until a valid response is received
// return the string
    
    let choice = prompt(`Enter your choice:
        Rock, Paper or Scissors?`);
    
    choice = choice.toLocaleLowerCase();

    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        choice = prompt(`Invalid response. Re-enter choice:
            Rock, Paper or Scissors?`);
    }

    return choice;


}

// 3 Play round



function playGame() {

    // Scores keeping track of human and CPU scores, initialised as 0
    let humanScore = 0;
    let computerScore = 0;

    // game is to be played in rounds 

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
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        }
    
        // if not : check if humanChoice === computerChoice:
        //      log Its a tie between {humanChoice or computerChoice}!
    
        else if (humanChoice === computerChoice) {
            console.log(`Its a tie! You both chose ${humanChoice}`);
        }
    
        // if not : computer has won
        //  increment computerScore, log You lose! computerChoice beats humanChoice
    
        else {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        }
    
    }

    // choice variables declarations
    let humanChoice;
    let computerChoice;

    // play is 5 rounds
    
    // play n round :
    //    repeat n times (i = 0, i++) :
    for (let i = 0; i < 5; i++) {

        // log : i+1th round
        console.log(`Round ${i+1}`);
        
        // get human and cpu choice, better make the variables outside the loop
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();

        // call playRound(human choice, cpu choice)
        playRound(humanChoice, computerChoice);
    }
    
    // declare final score and winner
    if (humanScore > computerScore)
        alert(`Game over. You win! ${humanScore} - ${computerScore}`);
    else if (humanScore < computerScore)
        alert(`Game over. You lose! ${humanScore} - ${computerScore}`);
    else
        alert("Rare sight! A tie!");

}