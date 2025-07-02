function auth_login(){
    
    if (localStorage.getItem('usuario_atual') == null) {
        // Se o usuário não estiver logado, redireciona para a página de login
        window.location.href = 'login.html';
    }
}