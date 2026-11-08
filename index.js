const text = "welcome to"
const heading = document.getElementById("welcome");
const spookybooth = document.getElementById("spookybooth");

let index = 1;

function typeWriter() {
    if (index < text.length) {
        heading.textContent += text[index];
        index++;
        setTimeout(typeWriter, 180);
    } else {
        setTimeout(() => {
            spookybooth.style.opacity = "1";
        }, 500);
    }
}

setTimeout(typeWriter, 500);