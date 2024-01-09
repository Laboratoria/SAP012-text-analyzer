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
  },
  getAverageWordLength: (text) => {
    const cortaPalavra = text.split(" ");
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
      return 0;
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

    /*RESOLVER:
    1) PRECISA DEVOLVER NaN COMO 0
    2) PRECISA PEGAR OS NÚMEROS EM STRINGS COMPOSTAS POR OUTROS CARACTERES (ex: 110 bananas e 20 mamões = 2 números)
    3) PRECISA SOMAR NÚMEROS EM STRINGS COMPOSTAS POR OUTROS CARACTERES (ex: 110 bananas e 20 mamões = 130)
    4) HÁ UM ERRO NO COMPRIMENTO MÉDIO DE PALAVRAS
    */
  },
};
export default analyzer;