
var errors = 0;
var accepts = 0;
var cardList = [
    "gato",
    "ovelha",
    "porco"
]


var cardSet;
var board = [];
var rows = 3;
var columns =2;

var card1Selected;
var card2Selected;

window.onload = function() {
    shuffleCards();
    startGame();
}

function shuffleCards() {
    cardSet = cardList.concat(cardList); //two of each card
    console.log(cardSet);
    //shuffle
    for (let i = 0; i < cardSet.length; i++) {
        let j = Math.floor(Math.random() * cardSet.length); //get random index
        //swap
        let temp = cardSet[i];
        cardSet[i] = cardSet[j];
        cardSet[j] = temp;
    }
    console.log(cardSet);
}

function startGame() {
    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            let cardImg = cardSet.pop();
            row.push(cardImg); //JS

            // <img id="0-0" class="card" src="water.jpg">
            let card = document.createElement("img");
            card.id = r.toString() + "-" + c.toString();
            card.src = cardImg + ".png";
            card.classList.add("card");
            card.addEventListener("click", selectCard);
            document.getElementById("board").append(card);

        }
        board.push(row);
    }

    console.log(board);
    setTimeout(hideCards, 2000);
}

function hideCards() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let card = document.getElementById(r.toString() + "-" + c.toString());
            card.src = "back.jpg";
        }
    }
}

function selectCard() {

    if (this.src.includes("back")) {
        if (!card1Selected) {
            card1Selected = this;

            let coords = card1Selected.id.split("-"); //"0-1" -> ["0", "1"]
            let r = parseInt(coords[0]);
            let c = parseInt(coords[1]);

            card1Selected.src = board[r][c] + ".png";
        }
        else if (!card2Selected && this != card1Selected) {
            card2Selected = this;

            let coords = card2Selected.id.split("-"); //"0-1" -> ["0", "1"]
            let r = parseInt(coords[0]);
            let c = parseInt(coords[1]);

            card2Selected.src = board[r][c] + ".png";
            setTimeout(update, 1000);
        }
    }

}

function update() {
    //if cards aren't the same, flip both back
    if (card1Selected.src != card2Selected.src) {

        mostrarEsconderImagem();



        playMusicError();

        card1Selected.src = "back.jpg";
        card2Selected.src = "back.jpg";

        errors += 1;

    }

    else {
        accepts +=1;
        document.getElementById("accepts").innerText = accepts;

        mostrarEsconderImagem();
        playMusicCorrect();

        aumentarEstrelas();

    }

    if (accepts == 3) {
        playMusicCorrect();

        setTimeout(finalizarGame, 2000)

    }

    card1Selected = null;
    card2Selected = null;
}

function mostrarEsconderImagem() {

    if (card1Selected.src != card2Selected.src) {
        const imagem_mistake = document.querySelector('.imagem_mistake');

        
        imagem_mistake.classList.toggle('mostrar_mistake');
        setTimeout(() => {
            imagem_mistake.classList.toggle('mostrar_mistake');
        }, 2000); // Tempo em milissegundos (1000ms = 1 segundo)

        
    }

    else {
        const imagem_correct = document.querySelector('.imagem_correct');

        setTimeout(() => {
            imagem_correct.classList.toggle('mostrar_correct');
        }, 2000); // Tempo em milissegundos (1000ms = 1 segundo)

        imagem_correct.classList.toggle('mostrar_correct');
    }

}

function playMusicError() {
    const conditionMet = true; 
  
    if (conditionMet) {
      const music = document.getElementById('myMusicError'); 

      music.volume = 0.4;
      music.play();
    }
  }


function playMusicCorrect() {
    const conditionMet = true;

    if (conditionMet) {
        const music = document.getElementById('myMusicCorrect'); 

        music.volume = 0.3;
        music.play();
    }
}




function aumentarEstrelas() {
    const containerEstrelas = document.getElementById('base_star');
    const EstrelasVoid = document.getElementById('void_star');

    let numeroStar = 1;
    
    const novaImagem = document.createElement('img');
    novaImagem.src = `star.webp`; 
    novaImagem.alt = `Imagem ${numeroStar}`;
    containerEstrelas.appendChild(novaImagem);

    containerEstrelas.removeChild(EstrelasVoid);

    containerEstrelas.insertBefore(novaImagem, containerEstrelas.firstChild);
    

    numeroStar++;
};


function finalizarGame() {
    const novaTelaURL = 'finish.html'; // Substitua por URL da nova tela

    
    fetch(novaTelaURL)
        .then(response => response.text())
        .then(html => {
          const novaTelaDiv = document.createElement('div');
          novaTelaDiv.innerHTML = html;

          document.documentElement.innerHTML = novaTelaDiv.innerHTML;
          history.pushState({}, null, novaTelaURL);
        });
    
}

var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();

