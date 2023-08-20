function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3) + 1;
    if(randomNumber === 1) {
        return "Rock"
    }
    else if(randomNumber === 2) {
        return "Paper"
    }
    else if(randomNumber === 3) {
        return "Scissors"
    }
}


function playRound(playerSelection, computerSelection) {
    if(playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        return 0
    }
    else if(playerSelection.toUpperCase() ==="ROCK" && computerSelection.toUpperCase() ==="PAPER") {
        return -1
    }
    else if(playerSelection.toUpperCase() ==="ROCK" && computerSelection.toUpperCase() ==="SCISSORS") {
        return 1
    }
    else if(playerSelection.toUpperCase() ==="SCISSORS" && computerSelection.toUpperCase() ==="PAPER") {
        return 1
    }
    else if(playerSelection.toUpperCase() ==="SCISSORS" && computerSelection.toUpperCase() ==="ROCK") {
        return -1
    }
    else if(playerSelection.toUpperCase() ==="PAPER" && computerSelection.toUpperCase() ==="SCISSORS") {
        return -1
    }
    else if(playerSelection.toUpperCase() ==="PAPER" && computerSelection.toUpperCase() ==="ROCK") {
        return 1
    }
    else {
        return -2
    }
}




function game() {
    let score_player = 0
    let score_computer = 0
    for(let i = 0; i<5; i++) {
        let playerSelection = prompt("Enter your play:")
        let computerSelection = getComputerChoice()
        console.log("Computers Choice: ",computerSelection)
        console.log("Players Choice: ",playerSelection)
        let result = playRound(playerSelection, computerSelection)
        if(result === 1) {
            score_player++
        }
        else if(result === -1) {
            score_computer++
        }
        else if(result === -2){
            console.log("Not a valid option!")
        }
    }
    console.log("Player Score: ",score_player)
    console.log("Computer Score: ",score_computer)

    if(score_computer > score_player) {
        console.log("You Lost!")
    }
    else if(score_computer < score_player) {
        console.log("You Won!")
    }
    else {
        return console.log("Draw ")
    }
}
 game()

