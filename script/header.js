document.addEventListener('DOMContentLoaded', function () {
    let nav_perfil = document.querySelector('#nav_perfil');
    let nav_login = document.querySelector('#nav_login');
    let usuario_atual = JSON.parse(localStorage.getItem('usuario_atual'));

    if (usuario_atual != null) {
        nav_login.style.display = 'none';
        nav_perfil.style.display = 'flex';
    }
    else {
        nav_login.style.display = 'flex';
        nav_perfil.style.display = 'none';
    }
});