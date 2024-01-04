import analyzer from './analyzer.js';

let areaTexto = document.querySelector("[name='user-input']");
let palavras = document.querySelector("[data-testid='word-count']");
let caracteres = document.querySelector("[data-testid='character-count']");
let semEspacos = document.querySelector("[data-testid='character-no-spaces-count']");
let numeros = document.querySelector("[data-testid='number-count']");
let soma = document.querySelector("[data-testid='number-sum']");
let comprimento = document.querySelector("[data-testid='word-lenght-average']");
let contadores = document.querySelectorAll(".counter");

document.getElementById("reset-button").addEventListener("click", limparTexto);

function limparTexto() {
    if (areaTexto != 0) {
        location.reload();
    } else {
        return;
    }
    console.log("ouvi o clique! ;)");
}

areaTexto.addEventListener("keyup", function () {
    caracteres.textContent = analyzer.getCharacterCount(areaTexto.value) + " caractere(s)";
    palavras.textContent = analyzer.getWordCount(areaTexto.value) + " palavra(s)";
    semEspacos.textContent = analyzer.getCharacterCountExcludingSpaces(areaTexto.value) + " caracteres sem espaço";
    numeros.textContent = analyzer.getNumberCount(areaTexto.value) + " números";
    //soma
    comprimento.textContent = "Comprimento médio das palavras = " + analyzer.getAverageWordLength(areaTexto.value);
})
// para contar caracteres, preciso que:
// selecionar os elementos html a serem alterados;
// o código leia a textarea e descubra se seu conteúdo é diferente de 0;
// fazer loop for para verificação de caracteres;
// mostrar a contagem feita pelo analyzer em tempo real;

/*let mostradores = Object.values(analyzer).map((contadores) => {
});*/

// function metricas() {
//     for (contadores in analyzer) {
//         document.querySelectorAll(".counter").innerHTML = null + "";
//         console.log("funcionou");
//     }
// };

// para limpar o texto, preciso que:
//1) o botão funcione; ok
//2) o código descubra se a textarea está preenchida ou não;
//3) desconsidere o comando se a textarea estiver vazia;



//na função limparTexto, preciso que o botão apague o que está escrito... Tentei "value = "", não funcionou

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto 'analyzer'