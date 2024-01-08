import analyzer from './analyzer.js';

const textarea = document.querySelector("[name='user-input']");
const palavras = document.querySelector("[data-testid='word-count']");
const caracteres = document.querySelector("[data-testid='character-count']");
const semEspacos = document.querySelector("[data-testid='character-no-spaces-count']");
const numeros = document.querySelector("[data-testid='number-count']");
const soma = document.querySelector("[data-testid='number-sum']");
const comprimento = document.querySelector("[data-testid='word-length-average']");

textarea.addEventListener('input', function () {
    caracteres.textContent = analyzer.getCharacterCount(textarea.value) + " caractere(s)";
    palavras.textContent = analyzer.getWordCount(textarea.value) + " palavra(s)";
    semEspacos.textContent = analyzer.getCharacterCountExcludingSpaces(textarea.value) + " caracteres sem espaço";
    numeros.textContent = analyzer.getNumberCount(textarea.value) + " números";
    soma.textContent = "Soma total dos números = " + analyzer.getNumberSum(textarea.value);
    comprimento.textContent = "Comprimento médio das palavras = " + analyzer.getAverageWordLength(textarea.value);
})

document.getElementById("reset-button").addEventListener("click", limparTexto);

function limparTexto() {
    if (textarea != 0) {
        location.reload();
    } else {
        return;
    }
}