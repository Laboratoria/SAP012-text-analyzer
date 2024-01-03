
/*const counter = document.querySelectorAll(".counter");

areaTexto.addEventListener("keyup", () => {
  const total = areaTexto.value.length;
  document.querySelector("li character-count").innerHTML = total;
})

for (let i = 0; areaTexto.length >= i; i++) {
  console.log("testou o loop");
  document.querySelectorAll(".counter").innerHTML = i++ + "";
};
*/

const analyzer = {
  getWordCount: (text) => {
    const words = text.split(" ");
    return words.length;
   // ;

   /*for (let palavras = 0; areaTexto.length >= palavras; palavras++) {
      console.log(areaTexto[palavras])
    }
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  */},
  getCharacterCount: (text) => {
    return text.length;
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) => {
    let compMedio = 0;
    for (let i = 0; i < words.length; i++) {
      compMedio += words[i].lenght;
    }
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {

    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};

export default analyzer;