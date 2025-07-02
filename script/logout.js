// Seleciona o botão de logout pelo ID ou classe
const logoutButton = document.getElementById('logout');

// Função para realizar o logout
function logout() {
    // Define o usuario_atual como null (pode ser em localStorage, sessionStorage ou variável global)
    localStorage.removeItem('usuario_atual');
    let usuario_atual = localStorage.getItem("usuario_atual") ? JSON.parse(localStorage.getItem("usuario_atual")) : null;
 // Remove o usuário atual do localStorage
    console.log('Usuário deslogado com sucesso.');
    // Redireciona para a página de login ou inicial, se necessário
    window.location.href = 'index.html';
}

// Adiciona o evento de clique ao botão de logout
if (logoutButton) {
    logoutButton.addEventListener('click', logout);
}