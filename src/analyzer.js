const analyzer = {
  getWordCount: (text) => {
    const cortaPalavra = text.split(" ");
    return cortaPalavra.length;
  },
  //o que eu queria fazer: o contador não pode contar os espaços como palavras e não pode iniciar em 1;
  getCharacterCount: (text) => {
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    const espacos = text.replaceAll(" ", "").length;
    return espacos;

    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) => {
    //   const apenasPalavras = text.split(" ");
    //   if (apenasPalavras.length > 0) {
    //     return parseFloat(apenasPalavras);
    //   } else {
    //     return "0";
    //   }
  },

  // compMedio += cortaPalavra[i].length.parseFloat(text);
  // return compMedio.valueOf(text);
  getNumberCount: (text) => {
    const numbers = text.replace(/[^0-9]/g, '');
    if (parseInt(numbers) >= 0) {
      return numbers.length;
    } else {
      return "0";
    }
  },
  //},
  //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  getNumberSum: (text) => {
    const somaNum = parseInt(text) + parseFloat(text);
    // reduce(), mas não sei onde
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};

export default analyzer;