const analyzer = {
  getWordCount: (text) => {
    const cortaPalavra = text.split(' ').filter((word) => word !== '');
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
    const cortaPalavra = text.split(' ');
    const totalPalavras = cortaPalavra.join('');
    const calcPalavra = totalPalavras.length / cortaPalavra.length;
    if (calcPalavra >= 0) {
      return parseFloat(calcPalavra.toFixed(2));
    } else {
      return 0;
    }
  },
  getNumberCount: (text) => {
    const numbers = text.replace(/.$/gm, '').split(' ').filter((word) => isNaN(word) === false && word !== '');
    console.log(numbers);
    if (parseFloat(numbers) >= 0) {
      return numbers.length;
    } else {
      return 0;
    }
  },
  getNumberSum: (text) => {
    let total = 0;
    const regex = text.replace(/.$/gm, '').split(' ').filter((word) => isNaN(word) === false && word !== '');
    console.log(regex);
    for (let i = 0; i < regex.length; i++) {
      total += parseFloat(regex[i]);
    }
    return total;
  },
};
export default analyzer;