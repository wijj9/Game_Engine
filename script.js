const toggle_switch = document.getElementById("label");
const container = document.getElementById("container");
const Body = document.getElementById("bd");
const page = document.body

const checkBox = document.getElementById("switch");

let darkMode = localStorage.getItem("dark-mode");






/*Buttons*/
const Search_Button = document.querySelector(".search");
const Random_Button = document.querySelector(".random");

const Search_Field = document.getElementById('user_input');

const Programs_List = [
    { word: "Rock Paper Scissors", url: "./Home/Games/Rock_Paper_Scissors/index.html" },
    { word: "Password Generator", url: "./Home/Games/Password_Generator/index.html" },
    { word: "Signature Creator", url: "./Home/Games/Signature_Generator/index.html" },
    { word: "Toggle Switch", url: "./Home/Games/Custom_Toggle_Switch/index.html" },
    { word: "Task List", url: "./Home/Games/TaskList/index.html" },
    { word: "Darknet Diaries", url: "https://darknetdiaries.com/episode/" },
    { word: "Reddit", url: "https://www.reddit.com/" },
    { word: "Image Resizer", url: "https://imageresizer.com/" },
    // Add more suggestions with their respective URLs
];
/*Variables*/
const RPS_Word_List = ["ROCK", "PAPER","SCISSORS", "ROCKS","PAPERS","SCISSOR"]


const searchInput = document.getElementById("user_input");
const suggestionsList = document.getElementById("suggestions-list");

const suggestions = [
    "Rock Paper Scissors",
    "Password Generator",
    "Signature Creator",
    "Task List",
    "Toggle Switch",
    "Darknet Diaries",
    "Reddit",
    "Image Resizer"
];

function displaySuggestions() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredSuggestions = suggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(searchTerm)
    );

    suggestionsList.innerHTML = "";
    filteredSuggestions.forEach((suggestion) => {
        const suggestionItem = document.createElement("li");
        suggestionItem.classList.add("suggestion-item");
        suggestionItem.textContent = suggestion;
        suggestionItem.addEventListener("click", () => {
            search(suggestion)
            searchInput.value = "";
            suggestionsList.style.display = "none";
        });
        suggestionsList.appendChild(suggestionItem);
    });

    if (filteredSuggestions.length > 0) {
        suggestionsList.style.display = "block";
    } else {
        suggestionsList.style.display = "none";
    }
}


function search(input) {
    const user_input = Search_Field.value.toUpperCase(); // Convert user input to uppercase
    for (const suggestion of Programs_List) {
        if(suggestion.word === input) {
            window.location.href = suggestion.url;
            break;
        }
    }
}

function close_suggestions() {
    suggestionsList.style.display = "none";
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

    document.body.addEventListener('click', function(event) {
        if ( suggestionsList.style.display === "block" && !suggestionsList.contains(event.target)) {
            close_suggestions();
        }
    });

}


window.addEventListener("beforeunload", function () {
    // Reset the checkbox to its initial state (unchecked)
    checkBox.checked = localStorage.getItem("dark-mode") === "enabled";
});


// Event listener for input changes
searchInput.addEventListener("input", displaySuggestions);

start();