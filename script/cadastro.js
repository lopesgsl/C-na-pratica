document.addEventListener('DOMContentLoaded', function() {
    const formCadastro = document.getElementById("formCadastro"); // Pega o formulário
    const entraButton = document.getElementById("Entra");

    // Carrega usuários e usuário atual do localStorage no início
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    let usuario_atual = localStorage.getItem("usuario_atual") ? JSON.parse(localStorage.getItem("usuario_atual")) : null;

    console.log("Usuários carregados na inicialização:", usuarios);
    if (usuario_atual) {
        console.log("Usuário atual carregado da sessão anterior:", usuario_atual);
    }

    if (entraButton && formCadastro) { // Verifica se o botão e o formulário existem
        entraButton.addEventListener("click", function(event) {
            event.preventDefault(); // Impede o envio padrão do formulário

            // Pega os valores dos campos DENTRO do evento de clique
            const nome = document.getElementById("nome_login").value;
            const email = document.getElementById("email_login").value;
            const senha = document.getElementById("senha_login").value;
            const confirmarSenha = document.getElementById("senha_login2").value;
            const policPriv = document.getElementById("polic_priv").checked;
            const termCondition = document.getElementById("term_condition").checked;
            
            if (nome === "" || email === "" || senha === "" || confirmarSenha === "") {
                alert("Preencha todos os campos de texto.");
                return;
            }

            if (!policPriv || !termCondition) {
                alert("Você deve aceitar a política de privacidade e os termos de uso.");
                return;
            }
            if (senha.length < 8) {
                alert("A senha deve ter pelo menos 8 caracteres.");
                return;
            }
            if (senha !== confirmarSenha) {
                alert("As senhas não coincidem.");
                return;
            }
            
            // Usa o array 'usuarios' que foi carregado no escopo do DOMContentLoaded
            if (usuarios.some(usuario => usuario.nome === nome)) {
                alert("Nome já cadastrado.");
                return;
            }
        
            if (usuarios.some(usuario => usuario.email === email)) {
                alert("Email já cadastrado.");
                return;
            }
        
            const novoUsuario = {
                nome: nome,
                email: email,
                senha: senha // Lembre-se: NUNCA armazene senhas em texto puro em produção!
            };
        
            usuarios.push(novoUsuario); // Adiciona ao array 'usuarios'
    
            localStorage.setItem("usuarios", JSON.stringify(usuarios));   
            localStorage.setItem("usuario_atual", JSON.stringify(novoUsuario)); 
            usuario_atual = novoUsuario; // Atualiza a variável no escopo
            
            alert("Usuário cadastrado com sucesso!");
            
            formCadastro.reset(); // Reseta o formulário para limpar os campos

            console.log("Usuários cadastrados:", usuarios);
            console.log("Usuário atual:", usuario_atual);

             window.location.href = "index.html"; // Descomente se quiser redirecionar
          });
    } else {
        if (!formCadastro) console.error("Formulário com ID 'formCadastro' não encontrado!");
        if (!entraButton) console.error("Botão com ID 'Entra' não encontrado!");
    }
});