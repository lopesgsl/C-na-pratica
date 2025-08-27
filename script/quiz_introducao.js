const perguntas = [
  {
    imagem: "img/c-icon.png",
    questao: "1. Qual é a função principal obrigatória em todo programa em C?",
    alternativas: ["inicio()", "programa()", "main()", "start()"],
    correta: 2
  },
  {
    imagem: "img/c-icon.png",
    questao: "2. Qual tipo usamos para números inteiros?",
    alternativas: ["float", "char", "int", "string"],
    correta: 2
  },
  {
    imagem: "img/c-icon.png",
    questao: "3. Como se declara uma variável inteira chamada idade?",
    alternativas: ["int idade;", "idade int;", "inter idade;", "var idade;"],
    correta: 0
  },
  {
    imagem: "img/c-icon.png",
    questao: "4. Qual das opções representa um tipo de dado real (decimal) em C?",
    alternativas: ["char", "int", "float", "bool"],
    correta: 2
  },
    {
    imagem: "img/c-icon.png",
    questao: "5. Qual dos operadores é usado para atribuição?",
    alternativas: ["==", "=", ":=", "=>"],
    correta: 1
  },
    {
    imagem: "img/c-icon.png",
    questao: "6. Qual símbolo indica fim de uma instrução em C?",
    alternativas: [":", ";", ".", ","],
    correta: 1
  },
    {
    imagem: "img/c-icon.png",
    questao: "7. Qual das alternativas representa uma constante?",
    alternativas: ["int valor;", "const int x = 10;", "float constante();", "char nome[10];"],
    correta: 1
  },
    {
    imagem: "img/c-icon.png",
    questao: "8. Qual ferramenta é usada para traduzir código C em linguagem de máquina?",
    alternativas: ["Interpretador", "Emulador", "Navegador", "Compilador"],
    correta: 3
  },
  {
    imagem: "img/c-icon.png",
    questao: "9. O que o código int x = 10 / 2; faz?",
    alternativas: ["Atribui 5 a x", "Gera erro de sintaxe", "Cria uma string", "Faz um loop"],
    correta: 0
  },
    {
    imagem: "img/c-icon.png",
    questao: "10. Qual comando é usado para declarar uma variável do tipo caractere?",
    alternativas: ["caracter letra;", "int letra;", "string letra;", "char letra;"],
    correta: 3
  }

 
];

let indiceAtual = 0;
let pontos = 0;
let respostasUsuario = [];

const perguntaEl = document.getElementById("pergunta");
const opcoesEl = document.getElementById("opcoes");
const imagemEl = document.getElementById("imagem-pergunta");
const quizContainer = document.querySelector(".quiz-container");

function carregarPergunta() {
  const pergunta = perguntas[indiceAtual];

  perguntaEl.textContent = pergunta.questao;
  imagemEl.src = pergunta.imagem;

  opcoesEl.innerHTML = "";

  pergunta.alternativas.forEach((alternativa, index) => {
    const botao = document.createElement("button");
    botao.textContent = alternativa;
    botao.addEventListener("click", () => verificarResposta(index));
    opcoesEl.appendChild(botao);
  });
}

function verificarResposta(indiceSelecionado) {
  const pergunta = perguntas[indiceAtual];

  const correta = pergunta.correta;
  const acertou = indiceSelecionado === correta;

  if (acertou) pontos++;

  respostasUsuario.push({
    pergunta: pergunta.questao,
    alternativas: pergunta.alternativas,
    correta: correta,
    escolhida: indiceSelecionado
  });

  indiceAtual++;

  if (indiceAtual < perguntas.length) {
    carregarPergunta();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  quizContainer.innerHTML = `
    <h2>Fim do Quiz!</h2>
    <p>Você acertou ${pontos} de ${perguntas.length} perguntas.</p>
    <div class="resumo-respostas"></div>
  `;

  const resumo = document.querySelector(".resumo-respostas");

  respostasUsuario.forEach((resposta, index) => {
    const acertou = resposta.correta === resposta.escolhida;

    let alternativasHTML = resposta.alternativas.map((alt, i) => {
      let classe = '';
      if (i === resposta.correta) {
        classe = 'correta';
      } else if (i === resposta.escolhida && !acertou) {
        classe = 'errada';
      }
      return `<li class="${classe}">${alt}</li>`;
    }).join('');

    const itemHTML = `
      <div class="resposta-item ${acertou ? 'acerto' : 'erro'}">
        <h3>Questão ${resposta.pergunta}</h3>
        <ul class="lista-alternativas">
          ${alternativasHTML}
        </ul>
      </div>
    `;
    resumo.innerHTML += itemHTML;
  });
}

// Inicia o quiz
carregarPergunta();
