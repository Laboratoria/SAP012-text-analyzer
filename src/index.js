import { clean } from 'gh-pages';
import analyzer from './analyzer.js';

const caixa = document.querySelector("textarea");
const conteudo = document.querySelector("p");

document.getElementById("reset-button").addEventListener("click", limparTexto);

function limparTexto() {
    console.log("executou função");
    if{
        document.querySelector("p").value != "",
        //executar limpeza de texto e mostrar caixa de texto atualizada
        caixa.textContent = "Digite seu texto aqui";
    } else {
        // não fazer nada ou atualizar página
    }
}
// para limpar o texto, preciso que:
//1) o botão funcione; ok
//2) o código descubra se a textarea está preenchida ou não;
//3) desconsidere o comando se a textarea estiver vazia;
//4) substitua o texto pela mensagem "Digite seu texto aqui"

// para contar caracteres, preciso que:
// 1) o código leia a textarea e descubra se seu conteúdo é diferente de 0;
// 2)
//TODO: escuchar eventos del DOM e invocar  los métodos del objeto 'analyzer'