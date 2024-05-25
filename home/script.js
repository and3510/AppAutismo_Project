const toggleThemeButton = document.getElementById('toggleThemeButton');
const bodyElement = document.body;

let currentTheme = 'normal'; // Tema inicial definido como claro

toggleThemeButton.addEventListener('click', function() {
    if (currentTheme === 'normal') {
        currentTheme = 'mode';
        bodyElement.classList.add('mode1');
    } else {
        currentTheme = 'normal';
        bodyElement.classList.remove('mode1');
    }
});
