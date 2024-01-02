import analyzer from './analyzer.js';

document.getElementById("reset-button").addEventListener("click", limparTexto());

function limparTexto() {
    caixaTexto.input = "";
    console.log("ouvi o clique");
}
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