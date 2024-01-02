let caixaTexto = document.getElementsByName(".user-input" /*ou "textarea"?*/);
let palavras = document.querySelector(".word-count");
let caracteres = document.querySelector(".character-count");
let espacos = document.querySelector(".character-no-spaces-count");
let numeros = document.querySelector(".number-count");
let soma = document.querySelector(".number-sum");
let comprimento = document.querySelector(".word-lenght-average");

// ou crio uma variável contendo todos os li a partir da classe? (querySelectorAll(".counter"))

caixaTexto.onkeyup = function () {
  caracteres.innerHTML = caixaTexto.value.length;

}

// escrevo assim ou uso caixaTexto.addEventListener("keyup", contador1()) e defino a função para cada contador?


/*const counter = document.querySelectorAll(".counter");

caixaTexto.addEventListener("keyup", () => {
  const total = caixaTexto.value.length;
  document.querySelector("li character-count").innerHTML = total;
})


for (let i = 0; caixaTexto.length >= i; i++) {
  console.log("testou o loop");
  document.querySelectorAll(".counter").innerHTML = i++ + "";
};
*/

const analyzer = {
  getWordCount: (text) => {

    caixaTexto.length.trim.split;

    /*for (let palavras = 0; caixaTexto.length >= palavras; palavras++) {
      console.log(caixaTexto[palavras])
    }
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  }, */,
  getCharacterCount: (text) => {
    let contador1 = caixaTexto.value;

    caixaTexto.addEventListener("keyon", () => {
      contador1 = ++contador1;
    })

    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};
  * /
export default analyzer;