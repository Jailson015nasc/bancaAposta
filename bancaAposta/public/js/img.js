let count = 1
document.getElementById('radio1').checked = true

setInterval(function () {
    nextImage()
}, 5000)

function nextImage() {
    count++
    if (count > 4) {
        count = 1
    }
    document.getElementById('radio' + count).checked = true
}

let novidades = [
    { titulo: 'Em alta'},
    { titulo: 'tame pank'},
]

let suiteAtual = 0;
let suiteElement = document.querySelector('.caixa-naveLr');
let tituloElement = suiteElement.querySelector('.naveLr a');

function atualizarSuite() {
    tituloElement.textContent = novidades[suiteAtual].titulo;
}

atualizarSuite();

document.querySelector('.ant').addEventListener('click', function () {
    suiteAtual--;
    if (suiteAtual < 0) {
        suiteAtual = novidades.length - 1;
    }
    atualizarSuite();
});
document.querySelector('.pro').addEventListener('click', function () {
    suiteAtual++;
    if (suiteAtual >= novidades.length) {
        suiteAtual = 0;
    }
    atualizarSuite();
});

