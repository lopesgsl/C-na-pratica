document.addEventListener('DOMContentLoaded', function() {
    let usuarios = [];

    const formLogin = document.getElementById("formLogin");
    
    // Se não encontrar o formulário, para a execução para evitar erros.
    if (!formLogin) {
        console.error("Elemento #formLogin não encontrado na página.");
        return;
    }

    // --- VERIFICAÇÃO DE LOGIN CORRIGIDA ---
    const usuarioAtual = localStorage.getItem('usuario_atual');
    
    // Verifica se o item existe E se o seu valor não é a string "null".
    if (usuarioAtual && usuarioAtual !== 'null') {
        alert("Você já está logado.");
        window.location.href = 'index.html';
        return; // Para a execução do resto do script.
    }

    // --- CARREGAMENTO DE UTILIZADORES CORRIGIDO ---
    // Corrigido o erro de digitação de "usarios" para "usuarios".
    const usuariosSalvos = localStorage.getItem("usuarios");
    if (usuariosSalvos) {
        // Usamos um try-catch para garantir que o JSON é válido
        try {
            usuarios = JSON.parse(usuariosSalvos);
        } catch (e) {
            console.error("Erro ao ler os dados dos utilizadores do localStorage:", e);
            usuarios = [];
        }
    }

    // --- LÓGICA DE SUBMISSÃO DO FORMULÁRIO ---
    formLogin.addEventListener("submit", function(e){
        e.preventDefault(); // Impede o recarregamento da página
    
        const nome = document.getElementById("nome_login").value;
        const senha = document.getElementById("senha_login").value;
    
        if (nome === "" || senha === "") {
            alert("Preencha todos os campos de texto.");
            return;
        }
    
        // Procura pelo utilizador na lista carregada
        const usuarioEncontrado = usuarios.find(usuario => usuario.nome === nome && usuario.senha === senha);
    
        if (usuarioEncontrado) {
            // Guarda o objeto do utilizador como uma string JSON
            localStorage.setItem("usuario_atual", JSON.stringify(usuarioEncontrado));

            alert("Login realizado com sucesso!");
            
            // CORREÇÃO: Limpa o formulário de login, não o de cadastro.
            formLogin.reset();
            window.location.href = "index.html";
        } else {
            alert("Utilizador ou senha incorretos.");
        }
    });
});
