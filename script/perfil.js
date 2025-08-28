        document.addEventListener('DOMContentLoaded', function() {
            const usuarioAtualString = localStorage.getItem('usuario_atual');

            if (!usuarioAtualString || usuarioAtualString === 'null') {
                alert("Acesso negado. Por favor, faça login para ver o seu perfil.");
                window.location.href = 'login.html';
                return;
            }

            let usuario;
            try {
                usuario = JSON.parse(usuarioAtualString);
            } catch (e) {
                console.error("Erro ao ler os dados do utilizador. A redirecionar para o login.", e);
                logout();
                return;
            }

            // Preenche o HTML com os dados do utilizador
            document.getElementById('nome_perfil').textContent = usuario.nome;
            document.getElementById('email_perfil').textContent = usuario.email;
            // CORREÇÃO: Garante que a senha seja sempre exibida como oculta
            document.getElementById('senha_perfil').textContent = '********';

            // --- Lógica dos Botões ---

            // Função de Logout
            function logout() {
                localStorage.removeItem('usuario_atual');
                console.log('Utilizador deslogado com sucesso.');
                window.location.href = 'index.html';
            }

            // Associa a função de logout aos botões de logout
            const logoutButton = document.getElementById('logout-button');
            if(logoutButton) logoutButton.addEventListener('click', logout);
            
            const headerLogoutButton = document.getElementById('header-logout-button');
            if(headerLogoutButton) headerLogoutButton.addEventListener('click', logout);

            // Lógica do Botão de Excluir Conta
            const deleteButton = document.getElementById('delete-button');
            if(deleteButton) {
                deleteButton.addEventListener('click', async () => {
                    const confirmacao = confirm("Tem a certeza de que deseja excluir a sua conta? Esta ação não pode ser desfeita.");

                    if (confirmacao) {
                        try {
                            const response = await fetch(`http://localhost:3000/usuarios/${usuario.id}`, {
                                method: 'DELETE',
                            });

                            if (!response.ok) {
                                throw new Error('Não foi possível excluir a conta. Tente novamente.');
                            }

                            alert('Conta excluída com sucesso.');
                            logout(); // A função logout já faz o redirecionamento para index.html

                        } catch (error) {
                            console.error("Erro ao excluir a conta:", error);
                            alert(error.message);
                        }
                    }
                });
            }
        });