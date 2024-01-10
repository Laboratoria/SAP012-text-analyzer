# Analisador de Texto

O objetivo deste projeto foi criar um analisador de texto capaz de contabilizar quantidades de palavras e números, caracteres com e sem espaço, comprimento médio das palavras e soma total dos números presentes no texto.

Foram seguidos os critérios mínimos do projeto - situados ao final deste documento -, com incrementações de estilo ao longo do desenvolvimento.

# Etapas

As etapas seguidas para o desenvolvimento do projeto foram, respectivamente:

1) criação de conta no Github e download dos programas necessários para o desenvolvimento do projeto;
2) fork do repositório, criação de chave SSH do projeto e clonagem do repositório;
3) criação de protótipo de baixa fidelidade no <a href="https://www.figma.com/file/NLJHZleLgDKRHXNzFtQ9q7/Prot%C3%B3tipo-P1-Laborat%C3%B3ria?type=whiteboard&node-id=0-1&t=yquOWUvaO06hHkQf-0">Figma</a>;
4) criação de árvore HTML no protótipo supracitado, buscando visualizar a hierarquia do código;
5) desenvolvimento do código HTML;
6) estilização do projeto em CSS;
7) criação de eventos DOM no projeto;
8) codificação as análises de texto e números;
9) testes;
10) publicação no github.


## Índice

- [1. Considerações gerais](#1-considerações-gerais)
- [2. Preâmbulo](#2-preâmbulo)
- [3. Resumo do projeto](#3-resumo-do-projeto)
- [4. Funcionalidades](#4-funcionalidades)
- [5. Boilerplate](#5-boilerplate)
- [6. Critérios de aceitação mínimos do projeto](#6-critérios-de-aceitação-mínimos-do-projeto)
- [7. Testes](#7-testes)
- [8. Dicas, sugestões e leituras complementares](#8-dicas-sugestões-e-leituras-complementares)
- [9. Considerações para solicitar seu Feedback de Projeto](#9-considerações-para-solicitar-seu-feedback-de-projeto)
- [10. Objetivos de aprendizagem](#10-objetivos-de-aprendizagem)
- [11. Funcionalidades opcionais](#11-funcionalidades-opcionais)

---

## 1. Considerações gerais

- Este projeto foi desenvolvido de forma individual ao longo de 4 Sprints;
- O foco do projeto foi a criação de um analisador de texto com funcionalidades que aplicassem conceitos de HTML, CSS e Javascript;
- O principal objetivo foi compreender os usos do HTML semântico e diferentes formas de estilização com CSS, além de aprender sobre criação e manipulação de eventos DOM e JS vanilla. 

## 2. Preâmbulo

![Uma lupa sobre texto de livro](https://github.com/Laboratoria/curriculum/assets/92090/2b45f653-69a5-4282-a65c-d34125c36113)

_Créditos: Foto de [ethan](https://unsplash.com/fr/@andallthings?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)_
_em [Unsplash](https://unsplash.com/es/fotos/72NpWZJOskU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)_

Um analisador de texto é uma aplicação para extrair informações úteis de um
texto utilizando diversas técnicas, como o processamento de linguagem natural
(PLN),aprendizado de máquina (ML) e análise estatística. Essas aplicações podem
fornecer uma variedade de métricas que oferecem informações básicas sobre
o comprimento e a estrutura do texto, como contagem de palavras, contagem de
caracteres, contagem de sentenças e contagem de parágrafos. Outras métricas
incluem análise de sentimentos, que utiliza técnicas de PLN para determinar
o tom geral positivo, negativo ou neutro do texto, e análise de legibilidade,
que utiliza algoritmos para avaliar a complexidade e legibilidade do texto.

Em geral, as aplicações de análise de texto fornecem informações valiosas e métricas
sobre os textos que podem ajudar os usuários a tomar decisões informadas e tirar
conclusões significativas. Por meio do uso dessas ferramentas de análise, os usuários
podem obter uma compreensão mais profunda dos textos.

## 3. Resumo do projeto

Neste projeto, foi desenvolvida uma aplicação web a partir de usos do HTML, do CSS e do Javascript, permitindo a análise de um texto no navegador ao exibir uma série de indicadores e métricas específicas sobre caracteres, letras, números, etc.

## 4. Funcionalidades

O projeto possui as seguintes funcionalidades:

1. Permite a inserção de um texto escrevendo-o em uma caixa de texto.

2. Efetua o cálculo das seguintes métricas, atualizando os resultados em tempo real, conforme a usuária escreve o texto:

    - **Contagem de palavras**: a aplicação conta o número de palavras no texto de entrada e mostra essa contagem para a usuária.
    - **Contagem de caracteres**: a aplicação conta o número de caracteres no texto de entrada, incluindo espaços e sinais de pontuação, mostrando essa contagem para a usuária.
    - **Contagem de caracteres excluindo espaços e sinais de pontuação**:
    a aplicação conta o número de caracteres no texto de entrada, excluindo espaços e sinais de pontuação, e apresenta essa contagem para a usuária.
    - **Contagem de números**: a aplicação conta quantos números há no texto de entrada, apresentando a contagem para a usuária.
    - **Soma total dos números**: a aplicação soma todos os números que estão no texto de entrada e mostra o resultado para a usuária.
    - **Comprimento médio das palavras**: a aplicação calcula o comprimento médio das palavras no texto de entrada e mostra esse valor para a usuária.

3. A aplicação permite limpar o conteúdo da caixa de texto ao clicar em um botão.

<img src="src/projeto.gif">

## 5. Boilerplate

A lógica do projeto foi implementada completamente em JavaScript. Neste projeto, não foram utilizadas bibliotecas ou frameworks, apenas JavaScript
puro, também conhecido como Vanilla JavaScript.

Para começar o projeto, você precisará fazer um _fork_ e _clonar_ este
repositório que contém um _boilerplate_ com testes. Um _boilerplate_
é a estrutura básica de um projeto que serve como um ponto de partida com
arquivos e configuração inicial de dependências e testes.

O _boilerplate_ que fornecemos contém a seguinte estrutura:

    ./
    ├── .babelrc
    ├── .editorconfig
    ├── .eslintrc
    ├── .gitignore
    ├── README.md
    ├── package.json
    ├── src
    │   ├── analyzer.js
    │   ├── index.html
    │   ├── index.js
    │   └── style.css
    └── test
        ├── .eslintrc
        └── analyzer.spec.js

### Descrição de scripts / arquivos

- `README.md`: você deve modificá-lo para explicar as informações necessárias para
  o uso da sua aplicação web, bem como uma introdução à aplicação, sua funcionalidade
  e decisões de design que você tomou.
- `.github/workflows`: esta pasta contém a configuração para
a execução do Github Actions.
  Você não deve modificar esta pasta nem seu conteúdo.
- `read-only/`: esta pasta contém os testes dos critérios mínimos de aceitação
e end-to-end. Você não deve modificar esta pasta nem seu conteúdo.
- [`src/index.html`](./src/index.html): este é o ponto de entrada da sua aplicação.
  Este arquivo deve conter o seu HTML.
- [`src/style.css`](./src/style.css): este arquivo deve conter as regras de
estilo. Queremos que você escreva suas próprias regras, portanto, NÃO é
permitido o uso de frameworks de CSS (Bootstrap, Materialize, etc).
- [`src/analyzer.js`](./src/analyzer.js): aqui você deve implementar
o objeto `analyzer`, que já está _exportado_ no _boilerplate_.
Este objeto (`analyzer`) deve conter seis métodos:

  + `analyzer.getWordCount(text)`: esta função deve retornar a contagem de
  palavras que estão no parâmetro `text` do tipo `string`.
  + `analyzer.getCharacterCount(text)`: esta função deve retornar a
  contagem de caracteres que estão no parâmetro `text` do tipo `string`.
  + `analyzer.getCharacterCountExcludingSpaces(text)`: esta função deve
  retornar a contagem de caracteres excluindo espaços e sinais de pontuação
  que estão no parâmetro `text` do tipo `string`.
  + `analyzer.getNumberCount(text)`: esta função deve retornar quantos
  números estão no parâmetro `text` do tipo `string`.
  + `analyzer.getNumberSum(text)`: esta função deve retornar a soma de todos os
  números que estão no parâmetro `text` do tipo `string`.
  + `analyzer.getAverageWordLength(text)`: esta função deve retornar o
  comprimento médio das palavras que estão no parâmetro `text` do tipo
  `string`. Use 2 casas decimais.

  Para exemplos de uso de cada função, recomendamos ver o arquivo
  [`test/analyzer.spec.js`](./test/analyzer.spec.js).

  _Nota: para simplificar as funcionalidades, definiremos palavras como grupos
  de caracteres separados por espaços. Por exemplo, as palavras no texto de
  entrada `Sim, você consegue fazer!` são quatro:_

  + _`Sim,`_
  + _`você`_
  + _`consegue`_
  + _`fazer!`_

- [`src/index.js`](./src/index.js): aqui você deve ouvir eventos do DOM,
invocar os métodos do objeto `analyzer` conforme necessário e atualizar
o resultado na IU (interface de usuária).
- [`test/analyzer.spec.js`](./test/analyzer.spec.js): este arquivo contém os
testes unitários para os métodos do objeto `analyzer`.

---

#### Deploy

Fazer com que os sites sejam publicados (ou _deployed_) para que as usuárias da
web possam acessá-los é algo comum em projetos de desenvolvimento de software.

Neste projeto, usaremos o _Github Pages_ para implantar nosso site.

O comando `npm run deploy` pode ajudá-lo com essa tarefa e você também pode
consultar a [documentação oficial](https://docs.github.com/pt/pages).

## 6. Critérios de Aceitação Mínimos do Projeto

A seguir, você encontrará os critérios de aceitação mínimos do projeto
relacionados a cada objetivo de aprendizado.

### HTML

- **Uso de HTML semântico**

  + [OK] A aplicação possui um cabeçalho composto por um
        [`<header>`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/header)
        que é pai de um
        [`<h1>`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Heading_Elements)
        com o texto `Analisador de texto`. Para que você possa praticar mais, esses
        elementos não podem ter atributos `id`, `name` ou `class`.

  + [OK] A aplicação utiliza um
        [`<textarea>`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/textarea)
        com o atributo `name` com o valor `user-input` para permitir à usuária
        inserir um texto. Para que você possa praticar mais, este elemento não pode
        ter atributos `id` ou `class`.

  + [OK] A aplicação utiliza uma
        [`<ul>`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/ul)
        com 6 filhos [`<li>`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/li),
        um para exibir cada métrica. Para que você possa praticar mais, esses
        elementos não podem ter atributos `id`, `name` ou filhos.

  + [OK] O [`<li>`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/li)
        para exibir a _contagem de palavras_ deve ter um atributo
        `data-testid` com o valor `word-count`.

  + [OK] O [`<li>`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/li)
        para exibir a _contagem de caracteres_ deve ter um atributo
        `data-testid` com o valor `character-count`.

  + [OK] O [`<li>`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/li)
        para exibir a _contagem de caracteres excluindo espaços e sinais de pontuação_
        deve ter um atributo `data-testid` com o valor `character-no-spaces-count`.

  + [OK] O [`<li>`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/li)
        para exibir a _contagem de números_ deve ter um atributo
        `data-testid` com o valor `number-count`.

  + [OK] O [`<li>`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/li)
        para exibir a _soma total de números_ deve ter um atributo
        `data-testid` com o valor `number-sum`.

  + [OK] O [`<li>`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/li)
        para exibir o _comprimento médio das palavras_ deve ter um atributo
        `data-testid` com o valor `word-length-average`.

  + [OK] A aplicação possui um rodapé composto por um
        [`<footer>`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/footer)
        que é pai de um
        [`<p>`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/p)
        que possui o nome da estudante desenvolvedora da aplicação como texto.
        Para que você possa praticar mais, esses elementos não podem
        ter atributos `id`, `name` ou `class`.

  + [OK] A aplicação utiliza um
        [`<button>`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/button)
        com o atributo `id` com o valor `reset-button` para permitir à usuária,
        através de um clique, limpar o conteúdo da caixa de texto.

### CSS

- **Uso de seletores CSS**

  + [OK] A aplicação utiliza
        [`seletores CSS de tipo`](https://developer.mozilla.org/pt-BR/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors#type_selectors)
        para estilizar o
        [`<header>`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/header)
        e o
        [`<footer>`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/footer).

  + [OK] A aplicação utiliza
        [`seletores CSS de classe`](https://developer.mozilla.org/pt-BR/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors#class_selectors)
        para estilizar os
        [`<li>`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/li)
        mencionados anteriormente.

  + [OK] A aplicação utiliza
        [`seletores de atributo`](https://developer.mozilla.org/pt-BR/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors)
        para estilizar o
        [`<textarea>`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/textarea)
        utilizando o atributo `name`.

  + [OK] A aplicação utiliza
        [`seletores CSS de ID`](https://developer.mozilla.org/pt-BR/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors#id_selectors)
        para estilizar o
        [`<button>`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/button)
        com o atributo `id` com o valor `reset-button`.

- **Modelo de caixa (box model): borda, margem, preenchimento**

  + [OK] As
        [`classes CSS`](https://developer.mozilla.org/pt-BR/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors#class_selectors)
        dos
        [`<li>`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/li)
        filhos da
        [`<ul>`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/ul)
        definem um estilo usando as propriedades do
        [modelo de caixa](https://cssreference.io/box-model/),
        ([`background`](https://cssreference.io/backgrounds/),
        `border`,
        [`margin`](https://cssreference.io/property/margin/),
        [`padding`](https://cssreference.io/property/padding/)).

### Web APIs

- **Uso de seletores do DOM**

  + [ ] A aplicação utiliza o
        [`seletor do DOM querySelector`](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/querySelector).

  + [ ] A aplicação utiliza o
        [`seletor do DOM getElementById`](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/getElementById).

- **Manipulação de eventos do DOM (ouvintes, propagação, delegação)**

  + [ ] A aplicação registra um
        [Event Listener](https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener)
        para ouvir o evento `keyup` do `<textarea>` e atualizar as métricas
        quando o texto for digitado na caixa de texto.

  + [OK] A aplicação registra um
        [Event Listener](https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener)
        para ouvir o evento `click` do `<button>` que limpa o conteúdo da caixa
        de texto.

- **Manipulação dinâmica do DOM**

  + [ ] A aplicação atualiza o atributo
        [`textContent`](https://developer.mozilla.org/pt-BR/docs/Web/API/Node/textContent)
        ou
        [`innerHTML`](https://developer.mozilla.org/pt-BR/docs/Web/API/Element/innerHTML)
        dos `<li>` que exibem as métricas do texto.

### JavaScript

- **Tipos de dados primitivos**

  + [ ] A aplicação converte valores do tipo `string` para o tipo `number`.

- **Strings (cadeias de caracteres)**

  + [ ] A aplicação utiliza métodos para manipular strings como
        [`split`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split),
        [`trim`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/trim)
        ou
        [`replace`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace).

- **Variáveis (declaração, atribuição, escopo)**

  + [ ] A aplicação declara variáveis com
        [`let`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/let)
        e
        [`const`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/const).

  + [ ] A aplicação NÃO declara variáveis com `var`.

- **Uso de condicionais (if-else, switch, operador ternário, lógica booleana)**

  + [ ] A aplicação utiliza a estrutura
        [`if..else`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else)
        para avaliar condições.

- **Uso de loops (while, for, for..of)**

  + [ ] A aplicação utiliza a estrutura
        [`for`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for)
        para criar um loop.

- **Funções (parâmetros, argumentos, retorno)**

  + [ ] O objeto `analyzer` contém um método `getWordCount` para calcular a
        contagem de palavras de um texto.

  + [ ] O objeto `analyzer` contém um método `getCharacterCount` para calcular a
        contagem de caracteres de um texto.

  + [ ] O objeto `analyzer` contém um método `getCharacterCountExcludingSpaces`
        para calcular a contagem de caracteres excluindo espaços e pontuações
        de um texto.

  + [ ] O objeto `analyzer` contém um método `getNumbersCount` para contar quantos
        números existem em um texto.

  + [ ] O objeto `analyzer` contém um método `getNumbersSum` para calcular a soma
        dos números em um texto.

  + [ ] O objeto `analyzer` contém um método `getAverageWordLength` para calcular
        o comprimento médio das palavras em um texto.

- **Testes unitários (unit tests)**

  + [ ] Todos os testes unitários passam.

- **Módulos do ECMAScript (ES Modules)**

  + [OK] A aplicação utiliza
        [`import`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/import)
        e
        [`export`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/export)
        para importar e exportar valores de um módulo JavaScript.

- **Uso de linter (ESLINT)**

  + [OK] Ao executar o linter, não são exibidos erros de formato e estilo.

- **Uso de identificadores descritivos (Nomenclatura e Semântica)**

  + [ ] O código utiliza identificadores descritivos para variáveis e funções.

### Controle de Versões (Git e GitHub)

- **GitHub: Criação de conta e repositórios, configuração de chaves SSH**

  + [OK] A estudante criou uma conta no Github.

  + [OK] A estudante configurou sua conta do Github com uma chave SSH.

- **Git: Controle de versões com git (clone, add, commit, push)**

  + [OK] A estudante criou um _fork_ para o projeto.

  + [OK] A estudante clonou seu repositório usando uma chave SSH.

  + [OK] A estudante criou _commits_ e os salvou no Github.

- **GitHub: Implantação com GitHub Pages**

  + [ ] A aplicação está implantada no GitHub Pages.

### Foco na Usuária

- **Projetar e desenvolver um produto ou serviço centrado nas usuárias**

### Design do Produto

- **Projetar em diferentes níveis de fidelidade**

  + [OK] A estudante criou protótipos de baixa fidelidade para a UI (interface gráfica).

- **Seguir os princípios básicos do design visual**

  + [OK] Foram consideradas as regras básicas de
        [design visual](https://coda.io/d/Bootcamp-UX-Contenido_dqkqk2rV9Z2/Reglas-basicas-de-diseno-visual_suVcO)
        para projetar a UI (interface gráfica).

## 7. Testes

Este projeto conta com 3 conjuntos de testes que ajudarão a verificar se
os critérios mínimos de aceitação são cumpridos.

### Testes Unitários

Um teste unitário é uma técnica de teste de software na qual se verifica
que cada componente individual de um programa ou sistema funcione corretamente
isoladamente. Em outras palavras, cada unidade de código é testada separadamente
para garantir que atenda aos requisitos e especificações.

Os testes unitários deste projeto executarão os métodos `getWordCount`,
`getCharacterCount`, `getCharacterCountExcludingSpaces`, `getNumbersCount`,
`getNumbersSum` e `getAverageWordLength` com diferentes argumentos e verificarão
se os valores retornados são os esperados.

Você pode executar esses testes com o comando `npm run test` como mostrado
na imagem a seguir:

![npm run test](https://github-production-user-asset-6210df.s3.amazonaws.com/12631491/240650584-c8267968-d631-4fbb-b05f-458a970544b7.gif "npm run test")

O _boilerplate_ inclui tarefas que executam [eslint](https://eslint.org/) e
[htmlhint](https://github.com/yaniswang/HTMLHint) para verificar o `HTML` e
`JavaScript` em relação a diretrizes de estilo. Ambas as tarefas são executadas
automaticamente antes de executar os testes unitários ao usar o comando
`npm run test`. No caso do `JavaScript`, estamos usando um arquivo de configuração
do `eslint` chamado `.eslintrc`, que contém informações mínimas sobre o parser
a ser usado (qual versão do JavaScript/ECMAScript), o ambiente (navegador neste caso)
e as [regras recomendadas (`eslint:recommended`)](https://eslint.org/docs/rules/).
Em relação às próprias regras/diretrizes de estilo,
vamos seguir as recomendações _padrão_ tanto do `eslint` quanto do `htmlhint`.

### Testes de Critérios Mínimos de Aceitação

Esses testes analisarão seus arquivos
[`index.html`](src/index.html),
[`index.js`](src/index.html),
[`analyzer.js`](src/analyzer.js)
e
[`style.css`](src/style.css)
para verificar se você cumpre os
[critérios mínimos de aceitação](#6-critérios-de-aceitação-mínimos-do-projeto).
Cada critério está relacionado a um objetivo de aprendizado.

Você pode executar todos esses testes com o comando `npm run test:oas`
como mostrado na imagem a seguir:

![npm run test oas](https://github-production-user-asset-6210df.s3.amazonaws.com/12631491/240650602-f0ca9170-7563-4edc-9e78-874fa012c4fd.gif "npm run test oas")

Você também pode executar os testes de cada grupo de objetivos de aprendizado
individualmente com os seguintes comandos:

- `npm run test:oas-html`
- `npm run test:oas-css`
- `npm run test:oas-web-api`
- `npm run test:oas-js`

#### Testes End-to-End

Um teste end-to-end (E2E) é uma técnica de teste de software na qual se verifica
o funcionamento de todo o sistema, do início ao fim. Em outras palavras, é testado
o fluxo completo do software, simulando a interação da usuária com a aplicação,
para garantir que todas as partes do sistema funcionem corretamente em conjunto.

Você pode executar esses testes com o comando `npm run test:e2e` como mostrado
na imagem a seguir:

![npm run test e2e](https://github-production-user-asset-6210df.s3.amazonaws.com/12631491/240650622-a4da630e-8d39-4dd8-9fde-1a38c31a53e2.gif "npm run test e2e")

### GitHub Actions

Este repositório usa o GitHub Actions para executar automaticamente
os testes unitários, testes de critérios mínimos de aceitação e
testes end-to-end toda vez que você fizer um _push_ no ramo
_main_ do seu repositório.

Você pode verificar o resultado desta GitHub Action
na aba _Actions_ do seu repositório no GitHub,
como mostrado na seguinte imagem:

![GitHub Action](https://github-production-user-asset-6210df.s3.amazonaws.com/12631491/240650640-a8a8ed26-6f48-4053-8b3b-7dec7e35a9f8.gif "GitHub Action")

## 8. Dicas, sugestões e leituras complementares

### Prepare o seu PC para trabalhar

Antes de começar, instale o seguinte:

1. [Node.js](https://nodejs.org/pt-br/)
2. [git](https://git-scm.com/download/) Se você estiver no Linux, é provável
que já esteja instalado 👀.
Para aprender mais sobre o git, visite este [link](https://curriculum.laboratoria.la/pt/topics/scm/git)
3. Um editor de código, recomendamos o [Visual Studio Code](https://code.visualstudio.com/)

Depois, no [GitHub](https://github.com/):

1. Crie uma conta. Saiba mais sobre o GitHub neste [link](https://curriculum.laboratoria.la/pt/topics/scm/github/github)
2. Faça um _fork_ deste projeto
3. Configure sua chave SSH no GitHub. Você pode conferir este
[vídeo](https://www.youtube.com/watch?v=7YVQLZp1jb0), este
[artigo](https://docs.github.com/pt/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
ou [esse](https://www.freecodecamp.org/portuguese/news/como-obter-e-configurar-suas-chaves-ssh-do-git-e-do-github/)

Depois, em um [shell](https://curriculum.laboratoria.la/pt/topics/shell),
execute o seguinte. Se você estiver no Windows, pode usar o Git Bash:

1. Clone o _fork_ para o seu PC
2. Navegue até o diretório do projeto clonado no seu shell
3. Instale as dependências do projeto com `npm install`
4. Instale o `playwright` com `npx playwright install chromium --with-deps`
5. Para iniciar o servidor web, execute `npm start` e vá para
   `http://localhost:3000` no seu navegador.
6. Agora é só codar! :rocket:

### Recursos e tópicos relacionados

Junte-se ao canal do Slack [#project-text-analyzer-pt](https://claseslaboratoria.slack.com/archives/C067QN2GFCM)

## 9. Considerações para solicitar seu Feedback de Projeto

Antes de agendar seu Feedback de Projeto com um coach, certifique-se de que seu projeto:

- [ ] Atende a todos os critérios mínimos de aceitação ao executar `npm run test:oas`
- [ ] Atende a todos os testes unitários ao executar `npm run test`
- [ ] Atende a todos os testes _end to end_ ao executar `npm run test:e2e`
- [ ] Está livre de _erros_ do `eslint` ao executar `npm run test`
- [ ] Está hospedado no GitHub.
- [ ] Está implantado no GitHub Pages.
- [ ] Possui um README com a definição do produto.

Lembre-se de que você deve fazer uma autoavaliação dos
_objetivos de aprendizado_ e _habilidades para a vida_ em seu painel do aluno.

Se você não concluiu tudo o que foi mencionado acima, consideramos que você
não está pronta para sua sessão de Feedback de Projeto.

## 10. Objetivos de aprendizagem

Reflita e depois enumere os objetivos que quer alcançar e aplique no seu projeto. Pense nisso para decidir sua estratégia de trabalho.

### HTML

- [ ] **Uso de HTML semântico**

  <details><summary>Links</summary><p>

  * [HTML semântico](https://curriculum.laboratoria.la/pt/topics/html/html5/semantic-html)
  * [Semantics in HTML - MDN](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
</p></details>

### CSS

- [ ] **Uso de seletores de CSS**

  <details><summary>Links</summary><p>

  * [Intro a CSS](https://curriculum.laboratoria.la/pt/topics/css/css/intro-css)
  * [CSS Selectors - MDN](https://developer.mozilla.org/pt_BR/docs/Web/CSS/CSS_Selectors)
</p></details>

- [ ] **Modelo de caixa (box model): borda, margem, preenchimento**

  <details><summary>Links</summary><p>

  * [Modelo de Caixa e Display](https://curriculum.laboratoria.la/pt/topics/css/css/boxmodel-and-display)
  * [The box model - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
  * [Introduction to the CSS box model - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  * [CSS display - MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/display)
  * [display - CSS Tricks](https://css-tricks.com/almanac/properties/d/display/)
</p></details>

### Web APIs

- [ ] **Uso de seletores de DOM**

  <details><summary>Links</summary><p>

  * [Modificando o DOM](https://curriculum.laboratoria.la/pt/topics/browser/dom/1-dom-methods-selection)
  * [Introdução ao DOM - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model/Introduction)
  * [Locating DOM elements using selectors - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
</p></details>

- [ ] **Manipulação de eventos de DOM (listeners, propagação, delegação)**

  <details><summary>Links</summary><p>

  * [Introdução a eventos - MDN](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/Events)
  * [EventTarget.addEventListener() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener)
  * [EventTarget.removeEventListener() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/removeEventListener)
  * [Objeto Event](https://developer.mozilla.org/pt-BR/docs/Web/API/Event)
</p></details>

- [ ] **Manipulação dinâmica de DOM**

  <details><summary>Links</summary><p>

  * [Introdução ao DOM](https://developer.mozilla.org/pt-BR/docs/DOM/Referencia_do_DOM/Introdu%C3%A7%C3%A3o)
  * [Node.appendChild() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Node/appendChild)
  * [Document.createElement() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/createElement)
  * [Document.createTextNode()](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/createTextNode)
  * [Element.innerHTML - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Element/innerHTML)
  * [Node.textContent - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Node/textContent)
</p></details>

### JavaScript

- [ ] **Tipos de dados primitivos**

  <details><summary>Links</summary><p>

  * [Valores Primitivos - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Data_structures#valores_primitivos)
</p></details>

- [ ] **Strings (cadeias de caracteres)**

  <details><summary>Links</summary><p>

  * [Strings](https://curriculum.laboratoria.la/pt/topics/javascript/strings)
  * [String — Cadeia de caracteres - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String)
</p></details>

- [ ] **Variáveis (declaração, atribuição, escopo)**

  <details><summary>Links</summary><p>

  * [Valores, tipos de dados e operadores](https://curriculum.laboratoria.la/pt/topics/javascript/basics/values-variables-and-types)
  * [Variáveis](https://curriculum.laboratoria.la/pt/topics/javascript/basics/variables)
</p></details>

- [ ] **Uso de condicionais (if-else, switch, operador ternário, lógica booleana)**

  <details><summary>Links</summary><p>

  * [Estruturas condicionais e repetitivas](https://curriculum.laboratoria.la/pt/topics/javascript/flow-control/conditionals-and-loops)
  * [Tomando decisões no seu código — condicionais - MDN](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/conditionals)
</p></details>

- [ ] **Uso de laços (while, for, for..of)**

  <details><summary>Links</summary><p>

  * [Laços (Loops)](https://curriculum.laboratoria.la/pt/topics/javascript/flow-control/loops)
  * [Laços e iterações - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Loops_and_iteration)
</p></details>

- [ ] **Funções (params, args, return)**

  <details><summary>Links</summary><p>

  * [Funções (controle de fluxo)](https://curriculum.laboratoria.la/pt/topics/javascript/flow-control/functions)
  * [Funções clássicas](https://curriculum.laboratoria.la/pt/topics/javascript/functions/classic)
  * [Arrow Functions](https://curriculum.laboratoria.la/pt/topics/javascript/functions/arrow)
  * [Funções — blocos reutilizáveis de código - MDN](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/Functions)
</p></details>

- [ ] **Testes unitários (unit tests)**

  <details><summary>Links</summary><p>

  * [Introdução ao Jest - Documentação oficial](https://jestjs.io/docs/pt-BR/getting-started)
</p></details>

- [ ] **Módulos de ECMAScript (ES modules)**

  <details><summary>Links</summary><p>

  * [import - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/import)
  * [export - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/export)
</p></details>

- [ ] **Uso de linter (ESLINT)**

- [ ] **Uso de identificadores descritivos (Nomenclatura e Semântica)**

### Controle de Versões (Git e GitHub)

- [ ] **Git: Instalação e configuração**

- [ ] **Git: Controle de versão com git (init, clone, add, commit, status, push, pull, remote)**

- [ ] **GitHub: Criação de contas e repositórios, configuração de chave SSH**

- [ ] **GitHub: Implantação com GitHub Pages**

  <details><summary>Links</summary><p>

  * [Site oficial do GitHub Pages](https://pages.github.com/)
</p></details>

### Centrado no usuário

- [ ] **Desenhar e desenvolver um produto ou serviço colocando as usuárias no centro**

### Design de produto

- [ ] **Design em diferentes níveis de fidelidade**

- [ ] **Aplicar os princípios de desenho visual (contraste, alinhamento, hierarquia)**

## 11. Funcionalidades opcionais

Se você terminou com todas as [funcionalidades requeridas](#4-funcionalidades),
tente implementar as seguintes funcionalidades opcionais para aprofundar nos
objetivos de aprendizado do projeto:

- Faça com que a contagem de palavras e caracteres seja 0 para uma entrada de
texto vazia.
- Faça com que a contagem de palavras e caracteres seja 0 para uma entrada de
texto contendo apenas espaços.
- Faça com que a contagem de palavras e caracteres seja 0 para uma entrada de
texto contendo apenas caracteres de pontuação.

Você pode habilitar os testes unitários e _end-to-end_ para esses casos nos
arquivos [test/analyzer.spec.js](test/analyzer.spec.js) e
[read-only/test/e2e/app.spec.js](read-only/test/e2e/app.spec.js).
Você também precisará ajustar os testes existentes para as funcionalidades requeridas.


[<img src="src/projeto.gif">]: <img src="src/projeto.gif">"Demonstração do analisador de texto"