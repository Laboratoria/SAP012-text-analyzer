import { clean } from 'gh-pages';
import analyzer from './analyzer.js';

document.getElementById("reset-button").addEventListener("click", limpaTexto);

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`