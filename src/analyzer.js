const analyzer = {
  getWordCount: (text) => {
    const cortaPalavra = text.split(" ").filter((word) => word !== "");
    return cortaPalavra.length;
  },
  getCharacterCount: (text) => {
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    const spaces = text.replace(/[^a-zA-Z0-9]+/g, '').length;
    return spaces;

    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) => {
    const cortaPalavra = text.split(" ").filter((word) => word !== "");
    const totalPalavras = cortaPalavra.join("");
    if (text) {
      return totalPalavras.length / cortaPalavra.length;
    } else {
      return 0;
    }
  },
  getNumberCount: (text) => {
    const numbers = text.replace(/d+/g).split(" ").filter((word) => word !== "");
    if (parseFloat(numbers) >= 0) {
      return numbers.length;
    } else {
      return "0";
    }
  },
  getNumberSum: (text) => {
    let total = 0;
    const regex = text.replace(/d+/g).split(" ").filter((word) => word !== "");
    console.log(regex);
    for (let i = 0; i < regex.length; i++) {
      total += parseFloat(regex[i]);
      console.log(regex[i]);
    }
    return total;
    //precisa retornar a soma dos números;
  },
};
export default analyzer;