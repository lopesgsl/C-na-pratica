        document.addEventListener('DOMContentLoaded', () => {
            const form = document.getElementById('formCadastro');
            const messageDiv = document.getElementById('message');

            if (!form) {
                console.error("ERRO: Formulário com ID 'formCadastro' não foi encontrado na página.");
                return;
            }

            form.addEventListener('submit', async (event) => {
                event.preventDefault(); 
                
                messageDiv.textContent = '';
                messageDiv.className = '';

                const nome = document.getElementById('nome_login').value;
                const email = document.getElementById('email_login').value;
                const senha = document.getElementById('senha_login').value;
                const confirmarSenha = document.getElementById('senha_login2').value;

                if (senha !== confirmarSenha) {
                    messageDiv.textContent = 'As senhas não coincidem.';
                    messageDiv.style.color = 'red';
                    return;
                }

                try {
                    const checkEmailResponse = await fetch(`http://localhost:3000/usuarios?email=${email}`);
                    const existingUsers = await checkEmailResponse.json();

                    if (existingUsers.length > 0) {
                        throw new Error('Este e-mail já está cadastrado.');
                    }

                    const novoUsuario = { nome, email, senha };

                    const registerResponse = await fetch('http://localhost:3000/usuarios', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(novoUsuario),
                    });

                    if (!registerResponse.ok) {
                        throw new Error('Ocorreu um erro no servidor. Tente novamente.');
                    }

                    const usuarioCriado = await registerResponse.json();
                    localStorage.setItem("usuario_atual", JSON.stringify(usuarioCriado));
                    
                    messageDiv.textContent = 'Utilizador registado com sucesso!';
                    messageDiv.style.color = 'green';
                    
                    // MUDANÇA: O redirecionamento agora é imediato, sem o setTimeout.
                    window.location.href = "index.html";

                } catch (error) {
                    console.error('Erro no registo:', error);
                    messageDiv.textContent = error.message;
                    messageDiv.style.color = 'red';
                }
            });
        });
        