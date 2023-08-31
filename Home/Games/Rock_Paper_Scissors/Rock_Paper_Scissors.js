let result = 0;
let score_player = 0;
let score_computer = 0;
let Result = "";
let game_over = false;

const playerSelection = document.querySelectorAll('.choice-container');


const Player = document.querySelector(".player_score");
const Computer = document.querySelector(".computer_score");


const Image_To_Change_C = document.getElementById('computer_image')

const Image_To_Change_P = document.getElementById('player_image')

let currentSelection = null;


const Restart_Win = document.querySelector("#popup-container_win .restart");
const Return_Win = document.querySelector("#popup-container_win .return");
const X_Win = document.querySelector("#popup-container_win .close-button");

const Restart_Lost = document.querySelector("#popup-container_lost .restart");
const Return_Lost = document.querySelector("#popup-container_lost .return");
const X_Lost = document.querySelector("#popup-container_lost .close-button");



function getHome() {
    window.location.href = "../../../index.html";
}


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

function showPopup_Win() {
    document.getElementById('popup-container_win').style.display = 'flex';
    Restart_Win.addEventListener("click", restart);
    X_Win.addEventListener("click",restart);
    Return_Win.addEventListener("click",getHome);
}

function showPopup_Lost() {
    document.getElementById('popup-container_lost').style.display = 'flex';
    Restart_Lost.addEventListener("click", restart);
    X_Lost.addEventListener("click",restart);
    Return_Lost.addEventListener("click",getHome);
}


function hidePopup() {
    document.getElementById('popup-container_lost').style.display = 'none';
    document.getElementById('popup-container_win').style.display = 'none';
}


function restart() {
    Result = "";
    location.reload();
}

function handle_End_Game() {

    if (score_computer === 5) {
        Result = "Lost";
        game_over = true;
    } else if (score_player === 5) {
        Result = "Win";
        game_over = true;
    }

    if(game_over) {
        playerSelection.forEach(selection => selection.removeEventListener("click", handle_selection));
        if (Result === "Win") {
            showPopup_Win();
        }
        else {
            showPopup_Lost()
        }

    }
}


    function handle_selection(event) {

        let selection = event.target.closest(".game_selection");

        if (currentSelection){
            currentSelection.classList.remove('clicked')
        }

        selection.classList.toggle('clicked');
        currentSelection = selection;

        if(selection) {
            const choice = selection.querySelector('.game_selection_text').textContent.toLowerCase();
            const computerChoice = getComputerChoice().toLowerCase();


            Image_To_Change_P.src = "./images/" + choice + ".png";
            Image_To_Change_C.src = "./images/" + computerChoice + ".png";


            if (choice === "rock") {
                result = playRound("Rock", computerChoice);
            } else if (choice === "paper") {
                result = playRound("Paper", computerChoice);
            } else if (choice === "scissors") {
                result = playRound("Scissors", computerChoice);
            }


            if (result === 1) {
                score_player++;
                Player.innerHTML = `SCORE: <br> <br>${score_player}`;
            } else if (result === -1) {
                score_computer++;
                Computer.innerHTML = `SCORE: <br> <br> ${score_computer}`;
            }
        }

        handle_End_Game();
    }


    playerSelection.forEach(selection => selection.addEventListener("click", handle_selection));


