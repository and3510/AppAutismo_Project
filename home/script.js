

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



const menuButton = document.getElementById('toggleThemeButton');
const sidebar = document.getElementById('sidebar');
const bodyElement = document.body;


menuButton.addEventListener('click', function() {
    sidebar.classList.toggle('active'); // Adiciona/remove a classe 'active'

    if (font_sidebar.classList.toggle('active') == true) {
        font_sidebar.classList.toggle('active');
    }

    if (theme_sidebar.classList.toggle('active') == true) {
        theme_sidebar.classList.toggle('active');
    }
});


const button_fontes= document.getElementById('button-fontes')
const font_sidebar = document.getElementById('font-sidebar');

button_fontes.addEventListener('click', function() {
    font_sidebar.classList.toggle('active'); // Adiciona/remove a classe 'active'
});


const button_fontes_20 = document.getElementById('id_20')

button_fontes_20.addEventListener('click', function() {
    if (currentTheme === 'normal') {
        currentTheme = 'font';
        bodyElement.classList.add('fonte1');
        bodyElement.classList.remove('fonte2');
        bodyElement.classList.remove('fonte3');
    } else {
        currentTheme = 'normal';
        bodyElement.classList.remove('fonte1');
    }
});

const button_fontes_25 = document.getElementById('id_25')

button_fontes_25.addEventListener('click', function() {
    if (currentTheme === 'normal' ) {
        currentTheme = 'font';
        bodyElement.classList.add('fonte2');
        bodyElement.classList.remove('fonte1');
        bodyElement.classList.remove('fonte3');
    } else {
        currentTheme = 'normal';
        bodyElement.classList.remove('fonte2');
    }
});

const button_fontes_30 = document.getElementById('id_30')

button_fontes_30.addEventListener('click', function() {
    if (currentTheme === 'normal' ) {
        currentTheme = 'font';
        bodyElement.classList.add('fonte3');
        bodyElement.classList.remove('fonte1');
        bodyElement.classList.remove('fonte2');
    } else {
        currentTheme = 'normal';
        bodyElement.classList.remove('fonte3');
    }
});


const button_themes= document.getElementById('button-themes')
const theme_sidebar = document.getElementById('theme-sidebar');

button_themes.addEventListener('click', function() {
    theme_sidebar.classList.toggle('active'); // Adiciona/remove a classe 'active'
});


const button_theme_black = document.getElementById('id_black')

button_theme_black.addEventListener('click', function() {
    if (currentTheme === 'normal' ) {
        currentTheme = 'theme';
        bodyElement.classList.add('black');
    } else {
        currentTheme = 'normal';
        bodyElement.classList.remove('black');
    }
});

const button_theme_gray = document.getElementById('id_gray')

button_theme_gray.addEventListener('click', function() {
    if (currentTheme === 'normal' ) {
        currentTheme = 'theme';
        bodyElement.classList.add('gray');
    } else {
        currentTheme = 'normal';
        bodyElement.classList.remove('gray');
    }
});


var som = document.getElementById("som");

$(".transition-all header").mouseover(function(){
    som.pause();
    som.currentTime = 0;
    som.play();
});