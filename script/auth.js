document.addEventListener('DOMContentLoaded', () => {

    // Seleciona TODOS os elementos que têm a classe 'requer-login'
    const linksProtegidos = document.querySelectorAll('.requer-login');

    // Para cada link protegido encontrado...
    linksProtegidos.forEach(link => {
        
        // Adiciona um "ouvinte" de evento de clique
        link.addEventListener('click', function(event) {
            
            // 1. Impede a ação padrão do link (que é navegar para a outra página)
            event.preventDefault();

            // 2. Verifica se o utilizador está logado
            const usuarioAtual = localStorage.getItem('usuario_atual');

            if (usuarioAtual && usuarioAtual !== 'null') {
                // Se estiver logado, permite a navegação para o destino do link
                window.location.href = link.href;
            } else {
                // Se NÃO estiver logado, avisa e redireciona para a página de login
                alert('Você precisa estar logado para aceder a esta página.');
                window.location.href = 'login.html';
            }
        });
    });

    // --- AQUI ENTRARIA O RESTO DO SEU CÓDIGO, COMO A LÓGICA DO MODAL DE FEEDBACK ---
    // (O código do modal que já fizemos continua a funcionar normalmente)

});