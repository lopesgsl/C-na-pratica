let usuarios = [];

let nome;
let email;
let senha;
let confirmarSenha;
let usuario_atual;	

function cadastro() {
  nome = document.getElementById("nome_login").value;
  email = document.getElementById("email_login").value;
  senha = document.getElementById("senha_login").value;
  confirmarSenha = document.getElementById("senha_login2").value;

  if (nome === "" || email === "" || senha === "") {
    alert("Preencha todos os campos.");
    return;
  }

  if (senha !== confirmarSenha) {
    alert("As senhas não coincidem.");
    return;
  }

  // verifica se o nome de usuario ja existe
  if (usuarios.some(usuario => usuario.nome === nome)) {
    alert("Nome já cadastrado.");
    return;
  }

  // verifica se o email ja existe
  if (usuarios.some(usuario => usuario.email === email)) {
    alert("Email já cadastrado.");
    return;
  }

  const usuario = {
    nome: nome,
    email: email,
    senha: senha
  };

  usuarios.push(usuario);

  localStorage.setItem("usuarios", JSON.stringify(usuarios));   
  
  alert("Usuário cadastrado com sucesso!");
  window.location.href = "index.html";


  localStorage.setItem("usuario_atual", JSON.stringify(usuario));
  usuario_atual = JSON.parse(localStorage.getItem("usuario_atual"));
  console.log(usuarios);
}
/*document.getElementById("Entra").addEventListener("click", function(e) {
  e.preventDefault();

  nome = document.getElementById("nome_login").value;
  email = document.getElementById("email_login").value;
  senha = document.getElementById("senha_login").value;
  confirmarSenha = document.getElementById("senha_login2").value;

  if (nome === "" || email === "" || senha === "") {
    alert("Preencha todos os campos.");

    if (senha !== confirmarSenha) {
    alert("As senhas não coincidem.");
        
        // verefica se o nome de usuario ja existe
        if (usuarios.some(usuario => usuario.nome === nome)) {
            alert("Nome já cadastrado.");

            if (usuarios.some(usuario => usuario.email === email)) {
                alert("Email já cadastrado.");
                
            }
        }
    }
  }


  const usuario = {
    nome: nome,
    email: email,
    senha: senha
  };

  usuarios.push(usuario);

  localStorage.setItem("usuarios", JSON.stringify(usuarios));   
  
  alert("Usuário cadastrado com sucesso!");
  window.location.href = "index.html";

  localStorage.setItem("usuario_atual", JSON.stringify(usuario));
  usuario_atual = JSON.parse(localStorage.getItem("usuario_atual"));
  console.log(usuarios);
}