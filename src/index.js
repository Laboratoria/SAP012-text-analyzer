import analyzer from './analyzer.js';

// para contar caracteres, preciso que:
// 1) o código leia a textarea e descubra se seu conteúdo é diferente de 0;
// 2) fazer loop for para verificação de caracteres;
// 2) mostrar a contagem feita pelo analyzer em tempo real;

function metricas() {
    for ( in analyzer) {
        document.querySelectorAll(".counter").innerHTML = 0o0 + "";
        console.log("funcionou");
    }
}
;

let contadores = Object.values(analyzer).map((mostradores) => {

});
// para limpar o texto, preciso que:
//1) o botão funcione; ok
//2) o código descubra se a textarea está preenchida ou não;
//3) desconsidere o comando se a textarea estiver vazia;

document.getElementById("reset-button").addEventListener("click", limparTexto);

function limparTexto() {

    if (caixaTexto.lenght != 0) {

    } else {
        return;
    }
    console.log("executou função");
}

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto 'analyzer'