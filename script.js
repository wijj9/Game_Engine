const toggle_switch = document.getElementById("label");
const container = document.getElementById("container");
const Body = document.getElementById("bd");
const page = document.body

const checkBox = document.getElementById("switch");

let darkMode = localStorage.getItem("dark-mode");

const enableDarkMode = () => {
    page.classList.add("checked");
    container.style.backgroundColor = "black";
    container.classList.toggle("night-mode-on");
    localStorage.setItem("dark-mode", "enabled");
};

const disableDarkMode = () => {
    page.classList.remove("checked");
    container.style.backgroundColor = "#dddddd";
    container.classList.toggle("night-mode-off");
    localStorage.setItem("dark-mode", "disabled");
};

if (darkMode === "enabled") {
    enableDarkMode(); // set state of darkMode on page load
}
toggle_switch.addEventListener("click", function () {
    /*dark_mode_on = !dark_mode_on;*/
    darkMode = localStorage.getItem("dark-mode"); // update darkMode when clicked
    if (darkMode === "disabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});




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
window.onload = function () {
    /*container.style.backgroundColor = "#dddddd";*/

    darkMode = localStorage.getItem("dark-mode"); // update darkMode when clicked
    if (darkMode === "enabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
}

window.addEventListener("beforeunload", function () {
    // Reset the checkbox to its initial state (unchecked)
    checkBox.checked = localStorage.getItem("dark-mode") === "enabled";
});


start();