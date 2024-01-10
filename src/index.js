import analyzer from './analyzer.js';

const areaTexto = document.querySelector("[name='user-input']");
const palavras = document.querySelector("[data-testid='word-count']");
const caracteres = document.querySelector("[data-testid='character-count']");
const semEspacos = document.querySelector("[data-testid='character-no-spaces-count']");
const numeros = document.querySelector("[data-testid='number-count']");
const soma = document.querySelector("[data-testid='number-sum']");
const comprimento = document.querySelector("[data-testid='word-length-average']");

document.getElementById("reset-button").addEventListener("click", limparTexto);

function limparTexto() {
    if (areaTexto != 0) {
        location.reload();
    } else {
        return;
    }
}

areaTexto.addEventListener("input", function () {
    caracteres.textContent = analyzer.getCharacterCount(areaTexto.value) + " caractere(s)";
    palavras.textContent = analyzer.getWordCount(areaTexto.value) + " palavra(s)";
    semEspacos.textContent = analyzer.getCharacterCountExcludingSpaces(areaTexto.value) + " caracteres sem espaço";
    numeros.textContent = analyzer.getNumberCount(areaTexto.value) + " números";
    soma.textContent = "Soma total dos números = " + analyzer.getNumberSum(areaTexto.value);
    comprimento.textContent = "Comprimento médio das palavras = " + analyzer.getAverageWordLength(areaTexto.value);
})