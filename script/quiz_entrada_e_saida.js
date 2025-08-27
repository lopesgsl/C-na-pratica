const perguntas = [
  {
    imagem: "img/c-icon.png",
    questao: "1. Qual função é usada para ler dados do teclado?",
    alternativas: ["gets()", "scanf()", "input()", "readline()"],
    correta: 1
  },
  {
    imagem: "img/c-icon.png",
    questao: "2. O que o código printf(\"Olá Mundo\"); faz?",
    alternativas: ["Imprime uma imagem", "Cria uma variável", "Exibe \"Olá Mundo\" na tela", "Lê algo do teclado"],
    correta: 2
  },
  {
    imagem: "img/c-icon.png",
    questao: "3. Qual é a saída de printf(\"%d\", 3 * 4);?",
    alternativas: ["7", "12", "34", "%d"],
    correta: 1
  },
  {
    imagem: "img/c-icon.png",
    questao: "4. Qual biblioteca é necessária para usar printf() e scanf()?",
    alternativas: ["#include <stdlib.h>", "#include <conio.h>", "#include <math.h>", "#include <stdio.h>"],
    correta: 3
  },
    {
    imagem: "img/c-icon.png",
    questao: "5. Qual biblioteca é necessária para usar getch()",
    alternativas: ["#include <stdio.h>", "#include <math.h>", "#include <conio.h>", "#include <stdlib.h>"],
    correta: 2
  },
    {
    imagem: "img/c-icon.png",
    questao: "6. Qual código calcula corretamente a média aritmética de 3 números inteiros?",
alternativas: ["media = (n1 + n2 + n3);", "media = n1 + n2 + n3 / 3;", "media = (n1 * n2 * n3) / 3;", "media = (n1 + n2 + n3) / 3;"],
correta:3
  },
    {
  imagem: "img/c-icon.png",
  questao: "7. Qual alternativa calcula corretamente a área e o perímetro de um quadrado?",
  alternativas: [
    "imagens/quiz EeS/7alt1EeS.png", 
    "imagens/quiz EeS/7alt2EeS.png", 
    "imagens/quiz EeS/7alt3EeS.png", 
    "imagens/quiz EeS/7alt4EeS.png"
  ],
  correta: 3
  },
    {
    imagem: "img/c-icon.png",
    questao: "8. Qual alternativa lê um número e imprime seu antecessor e sucessor?",
    alternativas: [
    "imagens/quiz EeS/8alt1EeS.png", 
    "imagens/quiz EeS/8alt2EeS.png", 
    "imagens/quiz EeS/8alt3EeS.png", 
    "imagens/quiz EeS/8alt4EeS.png"],
    correta: 1
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
    botao.className = "botao-alternativa"; // Classe para estilização
    
    // Verifica se é uma imagem (caminho termina com .png/.jpg/etc)
    if (alternativa.match(/\.(png|jpg|jpeg|gif)$/i)) {
      const img = document.createElement("img");
      img.src = alternativa;
      img.alt = `Alternativa ${index + 1}`;
      botao.appendChild(img); // Adiciona a imagem DENTRO do botão
    } else {
      botao.textContent = alternativa; // Texto normal
    }

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
      let conteudo = alt;
      
      // Verifica se é uma imagem
      if (alt.match(/\.(png|jpg|jpeg|gif)$/i)) {
        conteudo = `<img src="${alt}" class="imagem-resumo" alt="Alternativa ${i+1}">`;
      }
      
      if (i === resposta.correta) {
        classe = 'correta';
      } else if (i === resposta.escolhida && !acertou) {
        classe = 'errada';
      }
      return `<li class="${classe}">${conteudo}</li>`;
    }).join('');

    const itemHTML = `
      <div class="resposta-item ${acertou ? 'acerto' : 'erro'}">
        <h3>${resposta.pergunta}</h3>
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
