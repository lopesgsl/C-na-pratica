document.addEventListener('DOMContentLoaded', () => {
            
            // Se o utilizador já estiver logado, redireciona para a página principal
            if (localStorage.getItem('usuario_atual') && localStorage.getItem('usuario_atual') !== 'null') {
                window.location.href = 'index.html';
                return;
            }

            const form = document.getElementById('formLogin');
            const messageDiv = document.getElementById('message');

            if (!form) {
                console.error("ERRO: Formulário com ID 'formLogin' não foi encontrado.");
                return;
            }

            form.addEventListener('submit', async function(e) {
                e.preventDefault(); // Impede o envio padrão do formulário
                
                messageDiv.textContent = '';
                
                const email = document.getElementById('email_login').value;
                const senha = document.getElementById('senha_login').value;

                try {
                    const response = await fetch(`http://localhost:3000/usuarios?email=${email}&senha=${senha}`);
                    
                    if (!response.ok) {
                        throw new Error('Erro ao conectar com o servidor.');
                    }

                    const usuariosEncontrados = await response.json();

                    if (usuariosEncontrados.length > 0) {
                        const usuario = usuariosEncontrados[0];
                        
                        localStorage.setItem("usuario_atual", JSON.stringify(usuario));
                        
                        alert("Login realizado com sucesso!");
                        window.location.href = "index.html";

                    } else {
                        throw new Error('E-mail ou senha incorretos.');
                    }

                } catch (error) {
                    console.error("Erro no login:", error);
                    messageDiv.textContent = error.message;
                    messageDiv.style.color = 'red';
                }
            });
        });