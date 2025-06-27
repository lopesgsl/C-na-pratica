document.addEventListener('DOMContentLoaded', () => {
           // Elementos principais do DOM
           const modal = document.getElementById('modal-feedback');
           const btnAbrirModal = document.getElementById('btn-abrir-modal');
           const feedbackWrapper = document.getElementById('feedback-wrapper');
           // Verifica se os elementos essenciais existem para evitar erros
           if (!modal || !btnAbrirModal || !feedbackWrapper) {
               console.error("Erro: Elementos essenciais do modal não foram encontrados no HTML.");
               return;
           }
           // HTML do formulário
           const formHTML = `
               <div class="modal-header">
                   <h2>Feedback</h2>
                   <span class="fechar-modal">&times;</span>
               </div>
               <form id="form-feedback">
                   <label>Qual seu nível de satisfação?</label>
                   <div class="rating-stars">
                       <input type="radio" id="star5" name="rating" value="5" required/><label for="star5" title="5 estrelas">&#9733;</label>
                       <input type="radio" id="star4" name="rating" value="4"/><label for="star4" title="4 estrelas">&#9733;</label>
                       <input type="radio" id="star3" name="rating" value="3"/><label for="star3" title="3 estrelas">&#9733;</label>
                       <input type="radio" id="star2" name="rating" value="2"/><label for="star2" title="2 estrelas">&#9733;</label>
                       <input type="radio" id="star1" name="rating" value="1"/><label for="star1" title="1 estrela">&#9733;</label>
                   </div>
                   
                   <label for="comentario">Deseja deixar um comentário?</label>
                   <textarea id="comentario" placeholder="add text here..."></textarea>
                   
                   <button type="submit" class="btn-enviar">Enviar</button>
               </form>
           `;
           
           // HTML da mensagem de agradecimento
           const agradecimentoHTML = `
               <div class="modal-header">
                   <h2>Feedback</h2>
                   <span class="fechar-modal">&times;</span>
               </div>
               <div style="text-align: center; padding: 40px 0;">
                   <h3 style="font-size: 24px; color: #00dd77; margin: 0;">Muito obrigado pelo feedback</h3>
               </div>
           `;
           // --- FUNÇÕES ---
           function fecharModal() {
               modal.style.display = 'none';
           }
           function carregarAgradecimento() {
               feedbackWrapper.innerHTML = agradecimentoHTML;
               document.querySelector('.fechar-modal').addEventListener('click', fecharModal);
           }
           function carregarFormulario() {
               feedbackWrapper.innerHTML = formHTML;
               // Adiciona listeners aos elementos que acabaram de ser criados
               document.querySelector('.fechar-modal').addEventListener('click', fecharModal);
               
               const form = document.getElementById('form-feedback');
               form.addEventListener('submit', (e) => {
                   e.preventDefault();
                   carregarAgradecimento();
               });
           }
           // --- EVENT LISTENERS PRINCIPAIS ---
           // Abre o modal
           btnAbrirModal.addEventListener('click', () => {
               carregarFormulario();
               modal.style.display = 'flex';
           });
           // Fecha o modal clicando fora da caixa
           window.addEventListener('click', (event) => {
               if (event.target === modal) {
                   fecharModal();
               }
           });
       });