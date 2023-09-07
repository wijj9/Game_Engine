const panels = document.querySelectorAll('.panel');

const RPS = document.getElementById("p2");
const Signature = document.getElementById("p3");
const Toggle_Switch = document.getElementById("p5");

function toggleOpen() {
    console.log('Hello');
    this.classList.toggle('open');
}

function toggleActive(e) {
    console.log(e.propertyName);
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

RPS.addEventListener("click", function() {
    if (RPS.classList.contains('open-active')) {
        window.location.href = "../../Games/Rock_Paper_Scissors/index.html";
    }
});

Signature.addEventListener("click", function() {
    if (Signature.classList.contains('open-active')) {
        window.location.href = "../../Games/Signature_Generator/index.html";
    }
});
Toggle_Switch.addEventListener("click", function() {
    if (Toggle_Switch.classList.contains('open-active')) {
        window.location.href = "../../Games/Custom_Toggle_Switch/index.html";
    }
});
