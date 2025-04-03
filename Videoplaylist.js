document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
    const videoFrame = document.getElementById("main-video");
    const videoTitle = document.querySelector(".main-vid-title");
    const playlistContainer = document.getElementById("videosList");
    const watchedCountElement = document.getElementById("watchedCount");

    let watchedVideos = new Set(); // Armazena vídeos assistidos

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

    cards.forEach(card => {
        card.addEventListener("click", function () {
            const videoUrl = this.getAttribute("data-video");
            const playlistKey = this.getAttribute("data-playlist");

            if (videoUrl) {
                videoFrame.src = `https://www.youtube.com/embed/${videoUrl}`;
            }

            if (playlistKey && playlists[playlistKey]) {
                playlistContainer.innerHTML = "";

                playlists[playlistKey].forEach(video => {
                    const videoItem = document.createElement("div");
                    videoItem.classList.add("video-item");
                    videoItem.innerHTML = `<p>${video.title}</p>`;

                    videoItem.addEventListener("click", function () {
                        // Remover destaque do vídeo anterior
                        document.querySelectorAll(".video-item").forEach(item => item.classList.remove("active-video"));

                        // Adicionar destaque ao vídeo clicado
                        videoItem.classList.add("active-video");

                        videoFrame.src = `https://www.youtube.com/embed/${video.videoId}`;
                        videoTitle.textContent = video.title;
                        //colocar o botão 'praticar' no titulo
                        videoTitle.innerHTML = ` ${video.title}<a href="https://github.com/lukkjkin/C-na-pratica/blob/b3f79b2768d68d31f46f3b3e60d9a4b2b6133cb0/Lista%20de%20Exercicios.pdf" target="_blank" class="btn-download">Práticar</a>`;

                        

                        // Se o vídeo ainda não foi assistido, adiciona à lista e atualiza o contador
                        if (!watchedVideos.has(video.videoId)) {
                            watchedVideos.add(video.videoId);
                            updateWatchedCount();
                        }
                    });

                    playlistContainer.appendChild(videoItem);
                });
            }
        });
    });

    function updateWatchedCount() {
        watchedCountElement.textContent = `(${watchedVideos.size}) Videos Assistidos`;
    }
});
