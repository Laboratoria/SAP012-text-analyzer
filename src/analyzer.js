
/*for (let i = 0; areaTexto.length >= i; i++) {
  console.log("testou o loop");
  document.querySelectorAll(".counter").innerHTML = i++ + "";
};
*/

const analyzer = {
  getWordCount: (text) => {
    const cortaPalavra = text.split(" ");
    return cortaPalavra.length;
  },
  getCharacterCount: (text) => {
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {


    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) => {
    /*  for (let i = 0; i < cortaPalavra.length; i++) {
        compMedio += cortaPalavra[i].length.parseFloat(text);
      }*/
  },
  getNumberCount: (text) => {
    const number = text.replace(/[^0-9]/g, '');
    for (let i = 0; i >= number./*o quê?? */; i++) {
      return number[i++];
    }

    // if (text === Number) {
    //   return parseInt(number);
    // } else {
    //   return "0";
    // 
    // //;

    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    const somaNum = parseInt(text) + parseFloat(text);
    // reduce(), mas não sei onde

    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};

export default analyzer;