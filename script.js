
/*Buttons*/
const Search_Button = document.querySelector(".search");
const Random_Button = document.querySelector(".random");

const Search_Field = document.getElementById('user_input');


/*Variables*/
const RPS_Word_List = ["ROCK", "PAPER","SCISSORS", "ROCKS","PAPERS","SCISSOR"]


function search() {
    const user_input = Search_Field.value;
    console.log("starting...")
    for (const word of RPS_Word_List) {
        console.log(user_input);
        if(user_input.toUpperCase().includes(word)) {
            console.log("if == true...")
            window.location.href = "./Home/Games/Rock_Paper_Scissors/index.html"
            break;
        }
    }
}

function start() {
    Search_Button.addEventListener('click', function () {
        Search_Button.classList.toggle('clicked');
        search();
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === "Enter") {
            search()
        }
    });
}

start();