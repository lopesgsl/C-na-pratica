// Seleciona o botão de logout pelo ID ou classe
const logoutButton = document.getElementById('logout');

// Função para realizar o logout
function logout() {
    // Define o 'usuario_atual' como a string "null" no localStorage.
    localStorage.setItem('usuario_atual', 'null');
    console.log('Utilizador deslogado com sucesso.');
    
    // Redireciona para a página de login ou inicial, se necessário
    window.location.href = 'index.html';
}

// Adiciona o evento de clique ao botão de logout
if (logoutButton) {
    logoutButton.addEventListener('click', logout);
}
