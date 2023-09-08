const toggle_switch = document.querySelector("label");
const Body = document.getElementById("bd");
let dark_mode_on = true;
toggle_switch.addEventListener("click", function () {
    dark_mode_on = !dark_mode_on;
    if (dark_mode_on) {
        Body.classList.replace("night-mode-on", "night-mode-off");
    } else {
        Body.classList.replace("night-mode-off", "night-mode-on");
    }
})