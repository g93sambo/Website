



function playRound(HumanChoice) {
    let humanScore = 0;
    let computerScore = 0;
    let result = "";
    const choices = ['rock', 'paper', 'scissors'];
    const ComputerChoice = choices[Math.floor(Math.random() * choices.length)];
    if (HumanChoice === ComputerChoice) {
        result = "Its a tie"
    } else if ((HumanChoice === 'paper' && ComputerChoice === 'rock') ||
        (HumanChoice === 'rock' && ComputerChoice === 'scissors') ||
        (HumanChoice === 'scissors' && ComputerChoice === 'paper')) {
        result = "player wins this round!";
        humanScore++;
    } else {
        result = "computer wins this round!";
        computerScore++;
    }
    const div = document.querySelector("div");
    div.innerText = result;
    document.getElementById('pop').innerText = `humanScore: ${humanScore}, computerScore: ${computerScore}`;
}

