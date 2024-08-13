function ComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}
console.log(ComputerChoice())
function HumanChoice() {
    let input = prompt("pick rock,paper or scissors")
    return input
}

let humanScore = 0;
let computerScore = 0;
function playRound(HumanChoice, ComputerChoice) {
    if (HumanChoice === 'rock' && ComputerChoice === 'paper') {
        console.log("Computer wins this round!");
        computerScore++;
    } else if (HumanChoice === 'paper' && ComputerChoice === 'rock') {
        console.log("player wins this round!");
        humanScore++;
    } else if (HumanChoice === 'rock' && ComputerChoice === 'scissors') {
        console.log("player wins this round!");
        humanScore++;
    }
    else if (HumanChoice === 'paper' && ComputerChoice === 'scissors') {
        console.log("Computer wins this round!");
        computerScore++;
    } else if (HumanChoice === 'scissors' && ComputerChoice === 'paper') {
        console.log("human wins this round!");
        humanScore++;
    } else if (HumanChoice === 'scissors' && ComputerChoice === 'rock') {
        console.log("computer wins this round!");
        computerScore++;
    }
}


function playGame() {

    for (let i = 0; i <= 5; i++) {
        const humanChoice = HumanChoice();
        const computerChoice = ComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    console.log(`Final Scores - Human: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game.");
    } else if (humanScore < computerScore) {
        console.log("Sorry! You lost the game.");
    } else {
        console.log("It's a tie game!");
    }
}

playGame();