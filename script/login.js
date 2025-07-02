document.addEventListener('DOMContentLoaded', function() {
    let usuarios = [];

    let nome;
    let senha;

    const formLogin = document.getElementById("formLogin"); // Pega o formulário de login
    const entraButton = document.getElementById("entrar");

    if (localStorage.getItem('usuario_atual') !== 'null') {
        alert("Você já está logado.");
        window.location.href = 'index.html';
    }

    if  (localStorage.getItem("usarios") !== 'null') {
        usuarios = JSON.parse(localStorage.getItem("usuarios"));

    }

    if (entraButton && formLogin) {
        entraButton.addEventListener("click", function(e){
            e.preventDefault(); // Impede o envio padrão do formulário
        
            nome = document.getElementById("nome_login").value;
            senha = document.getElementById("senha_login").value;
        
            if (nome === "" || senha === "") {
                alert("Preencha todos os campos de texto.");
                return;
            }
        
            const usuarioEncontrado = usuarios.find(usuario => usuario.nome === nome && usuario.senha === senha);
        
            if (usuarioEncontrado) {
                localStorage.setItem("usuario_atual", JSON.stringify(usuarioEncontrado));
                alert("Login realizado com sucesso!");
                window.location.href = "index.html";
                formCadastro.reset();
        
            } else {
                alert("Usuário ou senha incorretos.");
            }
        });
    }
});