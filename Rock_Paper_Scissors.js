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
}


let result = 0;
let score_player = 0;
let score_computer = 0;

let game_over = false;

const playerSelection = document.querySelectorAll("button");

const Player = document.querySelector(".Player");
const Computer = document.querySelector(".Computer");
const Result = document.querySelector(".Result");

const result_list = document.querySelector(".Result_List");

const restart_button = document.createElement("button");


function restart() {
    result_list.removeChild(restart_button);
    Player.textContent = `Player: 0`;
    Computer.textContent = `Computer: 0`;

    playerSelection.forEach(selection => selection.addEventListener("click", handle_selection));

    result = 0;
    score_player = 0;
    score_computer = 0;
    game_over = false;
}

function handle_End_Game(e) {


    if (score_computer === 5) {
        Result.textContent = "You lost :( ,Computer Won!";
        game_over = true;
    } else if (score_player === 5) {
        Result.textContent = "You Won! Congrats";
        game_over = true;
    }

    if(game_over) {

        playerSelection.forEach(selection => selection.removeEventListener("click", handle_selection))

        restart_button.textContent = "Restart Game";
        restart_button.classList.add("restart")
        restart_button.addEventListener("click", restart);
        result_list.appendChild(restart_button);
    }
}


    function handle_selection(event) {

        let selection = event.target.textContent;

        let computerChoice = getComputerChoice();
        if (selection === "Rock") {
            result = playRound("Rock", computerChoice);
        } else if (selection === "Paper") {
            result = playRound("Paper", computerChoice);
        } else if (selection === "Scissors") {
            result = playRound("Scissors", computerChoice);
        }



        if (result === 1) {
            score_player++
            Player.textContent = `Player: ${score_player}`;
        } else if (result === -1) {
            score_computer++
            Computer.textContent = `Computer: ${score_computer}`;
        }

        handle_End_Game();
    }
    playerSelection.forEach(selection => selection.addEventListener("click", handle_selection));


