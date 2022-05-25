//Variables
const leftButton = document.getElementById('arrow-left');
const rightButton = document.getElementById('arrow-right');
const robotImg = document.getElementById('imagem-robo');

const colors = ['', '-amarelo', '-azul', '-branco', '-preto', '-rosa', '-vermelho'];

let idx = 0;

//Functions
function leftChangeColor() {
    if (idx === 0) {
        idx = colors.length-1;
        robotImg.src = `../img/robotron${colors[idx]}.png`;
    } else {
        robotImg.src = `../img/robotron${colors[--idx]}.png`;
    }
}

function rightChangeColor() {
    if (idx === colors.length-1) {
        idx = 0;
        robotImg.src = `../img/robotron${colors[idx]}.png`;
    } else {
        robotImg.src = `../img/robotron${colors[++idx]}.png`;
    }
}

//Events
leftButton.addEventListener('click', () => {leftChangeColor()})
rightButton.addEventListener('click', () => {rightChangeColor()})