document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");
  const videoFrame = document.getElementById("main-video");
  const videoTitle = document.querySelector(".main-vid-title");
  const playlistContainer = document.getElementById("videosList");
  const watchedCountElement = document.getElementById("watchedCount");

  const totalVideosPorPlaylist = {
    playlist1: 7,
    playlist2: 7,
    playlist3: 6,
    playlist4: 8,
    playlist5: 14,
    playlist6: 4,
  };

  const playlists = {
        "playlist1": [
            //introdução
            { title: "Algoritmos", videoId: "E5g8_FApAiA?si=2N12aPIseMmoS-pP" },
            { title: "Lógica", videoId: "a_VeysH5UZY?si=uFyeya2edAXJ5QWW" },
            { title: "Elementos de Algoritmos", videoId: "9VzUGADaZhg?si=k6ykg9Qonw85DPTk" },
            { title: "Representação de Algoritmos", videoId: "7cdFSiOdQsg?si=aVxilHvrXEnh6qc_" },
            { title: "Introdução à Programação", videoId: "gtQG1UY5mrk?si=5N2qxwyLloGUJY9T" },
            { title: "Componentes de um Compilador", videoId: "hEi-xDyIBHg?si=KPc3Qr_NWCLdoIJs" },
            { title: "Dicas Importantes", videoId: "UXWpudh5BxU?si=8scEsCKRrHmHGed8" }, 
        ],
        "playlist2": [
            //entrada e saída
            { title: "Exemplo 1", videoId: "AAJviAw91Jk?si=Lm_1Xr7QzYQrVE-F" },
            { title: "Exemplo 2", videoId: "KvkTvEvHZ8c?si=VHOB0cfRPSkVSqrt" },
            { title: "Exemplo 3", videoId: "r0LWya81Wzk?si=TyEn_8GM9Fs2NARr" },
            { title: "Exemplo 4", videoId: "bSHKlPY0JHA?si=jVQPqs9SJ7UeCEER" },
            { title: "Exemplo 5", videoId: "cmNhQ_xNnek?si=Tog-oRAb0KfG6qKG" },
            { title: "Tipos de Váriaveis e Operadores", videoId: "6kGdDnRCmFI?si=ujCOkQU0ZUuw6I3C" },
            { title: "Void main ou int main?", videoId: "VzMZrWJ5Gso?si=s2nCpQv9MhknGMFW" },
            
            
        ],
        "playlist3": [
            //strings
            { title: "Lendo Strings", videoId: "HZBe5g7npQI?si=EKH2E_TXkgK_0ZhY" },
            { title: "Calculando o tamanho de uma String", videoId: "wlbgQZ_alBg?si=wr89oZEHX2th6cSm" },
            { title: "Caractere de uma posição específica", videoId: "Ewh3e7xstaA?si=t04A6vvAhVzERFfj" },
            { title: "Cópia de Strings", videoId: "ZJRrCqh4yRk?si=Xh8f_8_JI37362-6" },
            { title: "Concatenação", videoId: "aYQeVPfFqSg?si=65WvkjgJl71T4YnV" },
            { title: "Comparação", videoId: "W402yHF2a7Q?si=-EkM2Qw27tGKxhZ-" }
        ],
        "playlist4": [
            //Desvios condicionais
            { title: "Média", videoId: "a77WBD89W2I?si=9dHvqUhV1k-uT-9L" },
            { title: "Desvios Condicionais", videoId: "-QW1EZUkpks?si=-2vXiTxCLItQsTuD" },
            { title: "Par ou Ímpar", videoId: "xzpeSJL1L78?si=cqQbVyUfGrcLQYpi" },
            { title: "Positivo,Negativo ou Neutro", videoId: "n2lHsvVXYyk?si=lp0TjV0lQcOo7LHf" },
            { title: "Triangulo", videoId: "Z_3k7PKpkNc?si=40LDTzD48XDH5Ebf" },
            { title: "Calculadora", videoId: "iveVc3GV44Q?si=b0ipOKbx0rpkCay5" },
            { title: "Numero por Extenso", videoId: "T_0Pl1S0RJQ?si=RnoVENIDL7vtisJV" },
            { title: "Estado Civil", videoId: "dKH2X3FOm4s?si=cxwz0XJqQln4Q02m" }
        ],
        "playlist5": [
            // comandos de repetição
            { title: "For - Calcular Soma Intervalo", videoId: "rcLdxPUXaIk?si=5Z18eW_GjfplsDHH" },
            { title: "For - Fatorial", videoId: "1Tv2EZxJyEc?si=Nf-ms9mIhE2Dp_MA" },
            { title: "For - Divisores Exatos", videoId: "jV_OWMyqnxc?si=YBYUXrFiaagbsN0-" },
            { title: "For - Ordem Decendente", videoId: "9ZbHX5zQ__Y?si=1v-2eSFkkv6E2hdd" },
            { title: "For - Ordem Ascendente", videoId: "lHg1MczmVEw?si=K_pWo_UxBfnKBANi" },
            { title: "For - Pares Ordenados", videoId: "auVYDJKvWn0?si=inI_QTcsvMnJXg43" },

            //while
            { title: "While - Div e Mod", videoId: "71uJ1wXPpvs?si=0ZmJkrg52IMcOX-I" },
            { title: "While - Fibonacci", videoId: "HaR-tA9kUW8?si=qsy41S1RJ5EAeimV" },
            { title: "While - Raiz Quadrada", videoId: "gwYkyZ0_-yM?si=vjcIesyKjhzfOLj_" },
            { title: "While - Média Aritmética", videoId: "QsR9BQwz9-8?si=vuoAzmWolS3ZAH-X" },

            //Do/while
            { title: "Do/While - Quantidade de Algarismos", videoId: "dNdx7tFeoo0?si=aYopsFjbU3De6M58" },
            { title: "Do/While - Raiz Quadrada", videoId: "JGlZmBUdZiQ?si=CDOXDUsBETtrxU1w" },
            { title: "Do/While - Média Aritmética", videoId: "YtrpPlCWIW8?si=JhXwG3cdlpRgxVnK" },
            { title: "Do/While - Tamanho das Palavras", videoId: "SMs5zXztbHM?si=MxLDf6rmy4xdgFbS" },
        ],

        "playlist6": [
            //entrada e saída
            { title: "Números na mesma ordem", videoId: "Jwgni6okZWY?si=48n-EesGo8D_fm83" },
            { title: "Números na ordem inversa", videoId: "47M1vlLEMLw?si=b9Kxa6ice0S3142G" },
            { title: "Enésimo número", videoId: "wtUvGQ8xSPI?si=i3cM-Zd1HiL2LF5R" },
            { title: "Inverter posições", videoId: "Bge2s0KXTN4?si=aslZegZlTATD-XVk" },    
        ], 
  };

  // Carrega dados do localStorage ou inicia com Sets vazios
  const assistidos = carregarAssistidosDoStorage();

  cards.forEach(card => {
    card.addEventListener("click", function () {
      const playlistKey = this.getAttribute("data-playlist");
      const videoUrl = this.getAttribute("data-video");

      if (videoUrl) {
        videoFrame.src = `https://www.youtube.com/embed/${videoUrl}`;
      }

      if (playlistKey && playlists[playlistKey]) {
        playlistContainer.innerHTML = "";

        // Criar container da playlist com barra de progresso e texto
        const playlistDiv = document.createElement("div");
        playlistDiv.id = playlistKey;
        playlistDiv.classList.add("playlist-wrapper");

        const progressoContainer = document.createElement("div");
        progressoContainer.className = "progresso-container";
        progressoContainer.innerHTML = `
          <div class="progress-bar" style="width: 0%; height: 10px; background-color: green; margin-bottom: 5px;"></div>
          <div class="progress-text"></div>
          <div class="status-text"></div>
        `;
        playlistDiv.appendChild(progressoContainer);

        playlistContainer.appendChild(playlistDiv);

        playlists[playlistKey].forEach(video => {
          const videoItem = document.createElement("div");
          videoItem.classList.add("video-item");
          videoItem.innerHTML = `<p>${video.title}</p>`;

          // Marcar como ativo se já assistido
          if (assistidos[playlistKey].has(video.videoId)) {
            videoItem.classList.add("watched");
          }

          videoItem.addEventListener("click", function () {
            // Remove destaque anterior
            document.querySelectorAll(".video-item").forEach(item => item.classList.remove("active-video"));
            videoItem.classList.add("active-video");

            videoFrame.src = `https://www.youtube.com/embed/${video.videoId}`;
            videoTitle.innerHTML = `${video.title} <a href="Lista de Exercicios.pdf" target="_blank" class="btn-download">Práticar</a>`;

            // Marcar vídeo como assistido
            marcarComoAssistido(playlistKey, video.videoId);

            // Marcar visualmente
            videoItem.classList.add("watched");

            updateWatchedCount();
          });

          playlistDiv.appendChild(videoItem);
        });

        atualizarBarra(playlistKey);
        updateWatchedCount();
      }
    });
  });

  function updateWatchedCount() {
    // Contar total vídeos assistidos em todas as playlists
    let totalAssistidos = 0;
    for (const p in assistidos) {
      totalAssistidos += assistidos[p].size;
    }
    watchedCountElement.textContent = `(${totalAssistidos}) Vídeos Assistidos`;
  }

  // Marca um vídeo como assistido
  function marcarComoAssistido(playlistId, videoId) {
    if (!assistidos[playlistId].has(videoId)) {
      assistidos[playlistId].add(videoId);
      salvarAssistidosNoStorage();
      atualizarBarra(playlistId);
      atualizarStatusCards();
    }
  }

  // Atualiza visualmente a barra de progresso da playlist
  function atualizarBarra(playlistId) {
    const total = totalVideosPorPlaylist[playlistId] || playlists[playlistId].length;
    const assistidosCount = assistidos[playlistId].size;

    const playlistDiv = document.getElementById(playlistId);
    if (!playlistDiv) return;

    const progressBar = playlistDiv.querySelector('.progress-bar');
    const progressText = playlistDiv.querySelector('.progress-text');
    const statusText = playlistDiv.querySelector('.status-text');

    const porcentagem = (assistidosCount / total) * 100;

    if (progressBar) progressBar.style.width = `${porcentagem}%`;
    if (progressText) progressText.textContent = `${assistidosCount} de ${total} vídeos assistidos`;
    
  }

  // Salva os dados no localStorage como objeto de arrays
  function salvarAssistidosNoStorage() {
    const obj = {};
    for (const playlistId in assistidos) {
      obj[playlistId] = Array.from(assistidos[playlistId]);
    }
    localStorage.setItem('videosAssistidos', JSON.stringify(obj));
  }



  // Carrega os dados do localStorage e reconstrói os Sets
  function carregarAssistidosDoStorage() {
    const dados = localStorage.getItem('videosAssistidos');
    const obj = {};

    for (const playlistId in totalVideosPorPlaylist) {
      obj[playlistId] = new Set();
    }

    if (dados) {
      const salvo = JSON.parse(dados);
      for (const playlistId in salvo) {
        obj[playlistId] = new Set(salvo[playlistId]);
      }
    }

    return obj;
  }
});




/*"playlist1": [
            //introdução
            { title: "Algoritmos", videoId: "E5g8_FApAiA?si=2N12aPIseMmoS-pP" },
            { title: "Lógica", videoId: "a_VeysH5UZY?si=uFyeya2edAXJ5QWW" },
            { title: "Elementos de Algoritmos", videoId: "9VzUGADaZhg?si=k6ykg9Qonw85DPTk" },
            { title: "Representação de Algoritmos", videoId: "7cdFSiOdQsg?si=aVxilHvrXEnh6qc_" },
            { title: "Introdução à Programação", videoId: "gtQG1UY5mrk?si=5N2qxwyLloGUJY9T" },
            { title: "Componentes de um Compilador", videoId: "hEi-xDyIBHg?si=KPc3Qr_NWCLdoIJs" },
            { title: "Dicas Importantes", videoId: "UXWpudh5BxU?si=8scEsCKRrHmHGed8" }, 
        ],
        "playlist2": [
            //entrada e saída
            { title: "Exemplo 1", videoId: "AAJviAw91Jk?si=Lm_1Xr7QzYQrVE-F" },
            { title: "Exemplo 2", videoId: "KvkTvEvHZ8c?si=VHOB0cfRPSkVSqrt" },
            { title: "Exemplo 3", videoId: "r0LWya81Wzk?si=TyEn_8GM9Fs2NARr" },
            { title: "Exemplo 4", videoId: "bSHKlPY0JHA?si=jVQPqs9SJ7UeCEER" },
            { title: "Exemplo 5", videoId: "cmNhQ_xNnek?si=Tog-oRAb0KfG6qKG" },
            { title: "Tipos de Váriaveis e Operadores", videoId: "6kGdDnRCmFI?si=ujCOkQU0ZUuw6I3C" },
            { title: "Void main ou int main?", videoId: "VzMZrWJ5Gso?si=s2nCpQv9MhknGMFW" },
            
            
        ],
        "playlist3": [
            //strings
            { title: "Lendo Strings", videoId: "HZBe5g7npQI?si=EKH2E_TXkgK_0ZhY" },
            { title: "Calculando o tamanho de uma String", videoId: "wlbgQZ_alBg?si=wr89oZEHX2th6cSm" },
            { title: "Caractere de uma posição específica", videoId: "Ewh3e7xstaA?si=t04A6vvAhVzERFfj" },
            { title: "Cópia de Strings", videoId: "ZJRrCqh4yRk?si=Xh8f_8_JI37362-6" },
            { title: "Concatenação", videoId: "aYQeVPfFqSg?si=65WvkjgJl71T4YnV" },
            { title: "Comparação", videoId: "W402yHF2a7Q?si=-EkM2Qw27tGKxhZ-" }
        ],
        "playlist4": [
            //Desvios condicionais
            { title: "Média", videoId: "a77WBD89W2I?si=9dHvqUhV1k-uT-9L" },
            { title: "Desvios Condicionais", videoId: "-QW1EZUkpks?si=-2vXiTxCLItQsTuD" },
            { title: "Par ou Ímpar", videoId: "xzpeSJL1L78?si=cqQbVyUfGrcLQYpi" },
            { title: "Positivo,Negativo ou Neutro", videoId: "n2lHsvVXYyk?si=lp0TjV0lQcOo7LHf" },
            { title: "Triangulo", videoId: "Z_3k7PKpkNc?si=40LDTzD48XDH5Ebf" },
            { title: "Calculadora", videoId: "iveVc3GV44Q?si=b0ipOKbx0rpkCay5" },
            { title: "Numero por Extenso", videoId: "T_0Pl1S0RJQ?si=RnoVENIDL7vtisJV" },
            { title: "Estado Civil", videoId: "dKH2X3FOm4s?si=cxwz0XJqQln4Q02m" }
        ],
        "playlist5": [
            // comandos de repetição
            { title: "For - Calcular Soma Intervalo", videoId: "rcLdxPUXaIk?si=5Z18eW_GjfplsDHH" },
            { title: "For - Fatorial", videoId: "1Tv2EZxJyEc?si=Nf-ms9mIhE2Dp_MA" },
            { title: "For - Divisores Exatos", videoId: "jV_OWMyqnxc?si=YBYUXrFiaagbsN0-" },
            { title: "For - Ordem Decendente", videoId: "9ZbHX5zQ__Y?si=1v-2eSFkkv6E2hdd" },
            { title: "For - Ordem Ascendente", videoId: "lHg1MczmVEw?si=K_pWo_UxBfnKBANi" },
            { title: "For - Pares Ordenados", videoId: "auVYDJKvWn0?si=inI_QTcsvMnJXg43" },

            //while
            { title: "While - Div e Mod", videoId: "71uJ1wXPpvs?si=0ZmJkrg52IMcOX-I" },
            { title: "While - Fibonacci", videoId: "HaR-tA9kUW8?si=qsy41S1RJ5EAeimV" },
            { title: "While - Raiz Quadrada", videoId: "gwYkyZ0_-yM?si=vjcIesyKjhzfOLj_" },
            { title: "While - Média Aritmética", videoId: "QsR9BQwz9-8?si=vuoAzmWolS3ZAH-X" },

            //Do/while
            { title: "Do/While - Quantidade de Algarismos", videoId: "dNdx7tFeoo0?si=aYopsFjbU3De6M58" },
            { title: "Do/While - Raiz Quadrada", videoId: "JGlZmBUdZiQ?si=CDOXDUsBETtrxU1w" },
            { title: "Do/While - Média Aritmética", videoId: "YtrpPlCWIW8?si=JhXwG3cdlpRgxVnK" },
            { title: "Do/While - Tamanho das Palavras", videoId: "SMs5zXztbHM?si=MxLDf6rmy4xdgFbS" },
        ],

        "playlist6": [
            //entrada e saída
            { title: "Números na mesma ordem", videoId: "Jwgni6okZWY?si=48n-EesGo8D_fm83" },
            { title: "Números na ordem inversa", videoId: "47M1vlLEMLw?si=b9Kxa6ice0S3142G" },
            { title: "Enésimo número", videoId: "wtUvGQ8xSPI?si=i3cM-Zd1HiL2LF5R" },
            { title: "Inverter posições", videoId: "Bge2s0KXTN4?si=aslZegZlTATD-XVk" },    
        ],   */