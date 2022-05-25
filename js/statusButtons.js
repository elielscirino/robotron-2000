//Variables
const bracos = document.getElementById('bracos');
const botaoAumentaBracos = document.getElementById('aumenta-bracos');
const botaoDiminuiBracos = document.getElementById('diminui-bracos');

const blindagem = document.getElementById('blindagem');
const botaoAumentaBlindagem = document.getElementById('aumenta-blindagem');
const botaoDiminuiBlindagem = document.getElementById('diminui-blindagem');

const nucleos = document.getElementById('nucleos');
const botaoAumentaNucleos = document.getElementById('aumenta-nucleos');
const botaoDiminuiNucleos = document.getElementById('diminui-nucleos');

const pernas = document.getElementById('pernas');
const botaoAumentaPernas = document.getElementById('aumenta-pernas');
const botaoDiminuiPernas = document.getElementById('diminui-pernas');

const foguetes = document.getElementById('foguetes');
const botaoAumentaFoguetes = document.getElementById('aumenta-foguetes');
const botaoDiminuiFoguetes = document.getElementById('diminui-foguetes');

//Functions
function aumentar(tag) {
    let cont;
    if (parseInt(tag.value) < 10) {
        cont = parseInt(tag.value);
        if (cont === 9) {
            tag.value = String(++cont);
        } else {
            tag.value = '0' + String(++cont)
        }
    }
}

function diminuir(tag) {
    let cont;
    if (parseInt(tag.value) > 0) {
        cont = parseInt(tag.value);
        tag.value = '0' + String(--cont)
    }
}

//Events
botaoAumentaBracos.addEventListener('click', () => {aumentar(bracos)});
botaoDiminuiBracos.addEventListener('click', () => {diminuir(bracos)})

botaoAumentaBlindagem.addEventListener('click', () => {aumentar(blindagem)});
botaoDiminuiBlindagem.addEventListener('click', () => {diminuir(blindagem)})

botaoAumentaNucleos.addEventListener('click', () => {aumentar(nucleos)});
botaoDiminuiNucleos.addEventListener('click', () => {diminuir(nucleos)})

botaoAumentaPernas.addEventListener('click', () => {aumentar(pernas)});
botaoDiminuiPernas.addEventListener('click', () => {diminuir(pernas)})

botaoAumentaFoguetes.addEventListener('click', () => {aumentar(foguetes)});
botaoDiminuiFoguetes.addEventListener('click', () => {diminuir(foguetes)})