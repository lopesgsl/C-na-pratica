let usuario = document.getElementById("nome_login");
let senha = document.getElementById("senha_login");
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

//buscando se ha usuarios cadastrados
if (usuarios.length === 0) {
    alert("Nenhum usuário cadastrado.");
    window.location.href = "cadastro.html";
    return;
}

document.getElementById("Entrar").addEventListener("click", function(e) {
    e.preventDefault();
    let usuarioEncontrado = usuarios.find(u => u.email === usuario.value && u.senha === senha.value);
    if (usuarioEncontrado) {
        alert("Login realizado com sucesso!");
        localStorage.setItem("usuario_atual", JSON.stringify(usuarioEncontrado));
        window.location.href = "index.html";
    } else {
        alert("Usuário ou senha incorretos.");
    }
});