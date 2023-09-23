const addTask = document.getElementById('add_task');

const overlay = document.getElementById('overlay');
const popup_container = document.getElementById('popup-container');
const close = document.getElementById('close');
const inputElements = document.querySelectorAll('.input');


const tasks_grid = document.getElementById("tasksGrid");

const taskInput = document.querySelector('.input[data-siid="si_input_0"]');
const categoryInput = document.querySelector('.input[data-siid="si_input_1"]');
const descriptionInput = document.querySelector('.input[data-siid="si_input_2"]');

const taskForm = document.getElementById('task-form');

let task = "";
let category = "";
let description =  0;
let input;


let myTasks = [];
const test_task = new Task("Sample Title", "Sample Author", 200, true);
function Task(task, category, description, done) {
    this.task = task;
    this.category = category;
    this.description = description;
    this.done = done;
}

function clearInputFields() {
    taskInput.value = '';
    categoryInput.value = '';
    descriptionInput.value = '';
}

function addTaskToLibrary() {
    clearInputFields();
    overlay.classList.toggle('active');
    popup_container.style.display = 'flex';
    setTimeout(() => {
        popup_container.classList.add('active');
    }, 2);
}

function task_done() {
    this.style.backgroundColor = "#79e079";
    this.textContent = "Done";
}

function remove_task() {
    const task_card = event.target.closest(".task-card");
    const taskToRemove = task_card.firstElementChild.textContent.split(":")[1];

    myTasks = myTasks.filter(task => task.task !== taskToRemove);

    task_card.remove();
}

function close_popup() {
    overlay.classList.remove('active');
    setTimeout(() => {
        popup_container.classList.remove('active');
    }, 10);
    setTimeout(() => {
        popup_container.style.display = 'none';
    }, 200);
}


function extractInput() {
    inputElements.forEach((input) => {
        const siidValue = input.getAttribute('data-siid');

        if (siidValue === 'si_input_0') {
            task = input.value;
        } else if (siidValue === 'si_input_1') {
            category = input.value;
        } else if (siidValue === 'si_input_2') {
            description = input.value;
        }
    });

    input = new Task(task,category,description);
    myTasks.push(input);
    console.log(myTasks);
}



function start() {
    addTask.addEventListener('click', addTaskToLibrary);
    close.addEventListener('click', close_popup);

    document.addEventListener('DOMContentLoaded', function () {
        taskForm.addEventListener('submit', function (event) {
            event.preventDefault();
            displayTasks();
        });
    });

    overlay.addEventListener('click', function(event) {
        if (popup_container.classList.contains('active') && !popup_container.contains(event.target)) {
            close_popup();
        }
    });


}

function displayTasks() {
    extractInput();
    const tasks = document.createElement("div");
    const buttons = document.createElement("div");
    tasks.className = "task-card";
    buttons.className = "button-group";
    const task = document.createElement("p");
    const category = document.createElement("p");
    const description = document.createElement("p");
    task.classList.add("task-info");
    category.classList.add("task-info");
    description.classList.add("task-info");


    task.innerHTML = "<b>Task:</b>"+"<span style='color: red; text-decoration: underline'>"+ input.task+"</span>";
    category.innerHTML = "<b>Category:</b>"+"<span style=\"color: darkblue\">"+ input.category+"</span>";
    const descriptionWrapper = document.createElement("div");
    descriptionWrapper.style.whiteSpace = "pre-line";

    descriptionWrapper.innerHTML = `<b>Description: </b>${input.description}`;


    const b1 = document.createElement("button");
    const b2 = document.createElement("button");

    b1.className = "btn btn-light-red";
    b2.className = "btn";
    b2.id = "remove_btn";

    b1.onclick = task_done;
    b2.onclick = remove_task;

    b1.textContent = "Not Done";
    b2.textContent = "Remove";

    buttons.appendChild(b1);
    buttons.appendChild(b2);
    tasks.appendChild(task);
    tasks.appendChild(category);
    tasks.appendChild(descriptionWrapper);
    tasks.appendChild(buttons);

    tasks_grid.appendChild(tasks);
    close_popup();

}

start()
