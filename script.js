const menuButton = document.getElementById('menuButton');
const sidebar = document.getElementById('sidebar');


menuButton.addEventListener('click', function() {
    sidebar.classList.toggle('active'); // Adiciona/remove a classe 'active'
});
