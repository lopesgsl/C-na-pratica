
document.addEventListener('DOMContentLoaded', function() {

    // 1. Proteger a Página: Verificar se há um utilizador logado
    const usuarioAtualString = localStorage.getItem('usuario_atual');

    // Se não houver nenhum utilizador (ou se for a string "null"), redireciona para o login
    if (!usuarioAtualString || usuarioAtualString === 'null') {
        alert("Acesso negado. Por favor, faça login para ver o seu perfil.");
        window.location.href = 'login.html';
        return; // Para a execução do resto do script
    }

    // 2. Ler e Converter os Dados do Utilizador
    // Usamos um try-catch para garantir que os dados guardados são válidos
    try {
        const usuario = JSON.parse(usuarioAtualString);

        // 3. Encontrar os Elementos no HTML
        const nomePerfilEl = document.getElementById('nome_perfil');
        const senhaPerfilEl = document.getElementById('senha_perfil');
        const emailPerfilEl = document.getElementById('email_perfil');

        // 4. Preencher o HTML com os Dados
        // Verificamos se os elementos existem antes de tentar preenchê-los
        if (nomePerfilEl && senhaPerfilEl && emailPerfilEl) {
            nomePerfilEl.textContent = usuario.nome;
            emailPerfilEl.textContent = usuario.email;
            
            // Por segurança, é uma boa prática não exibir a senha diretamente.
            // Vamos substituí-la por asteriscos.
            senhaPerfilEl.textContent = '********';
        } else {
            console.error("Não foi possível encontrar os elementos do perfil na página.");
        }

    } catch (e) {
        console.error("Erro ao ler os dados do utilizador. A redirecionar para o login.", e);
        // Se os dados estiverem corrompidos, limpa o localStorage e redireciona
        localStorage.removeItem('usuario_atual');
        window.location.href = 'login.html';
    }
});