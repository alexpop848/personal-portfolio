const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const boxed = document.querySelectorAll('.project');
const text = document.querySelector(".description");


//Split text animation

const strText = text.textContent;
const splitText = strText.split("");
text.textContent = " ";

for(let i=0; i< splitText.length; i++){
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    if(char === splitText.length) {
        complete();
        return;
    }
}

function complete(){
    clearInterval(timer);
    timer = null;
}

//Hamburger menu toggle

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

//Div scroll transition

window.addEventListener('scroll', addDiv);

addDiv();

function addDiv() {
    const triggerButton = window.innerHeight / 5 * 4;

    boxed.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerButton){
            box.classList.add('show');
        } else{
            box.classList.remove('show');
        }
    });
}

