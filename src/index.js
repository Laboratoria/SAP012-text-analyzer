import analyzer from './analyzer.js';

function listaContadores() {
    const metricas = document.getElementsByName("user-input");
    metricas.querySelector(".user-input").addEventListener("count")
}
// para limpar o texto, preciso:



document.getElementById("reset-button").addEventListener("click", limparTexto);

function limparTexto() {
    console.log("executou função")


}
//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`