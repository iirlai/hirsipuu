
const input = document.querySelector('input');
const output = document.querySelector('.output');
const guessCountSpan = document.querySelector('#guessCount');
const hiddenWordElement = document.querySelector('#hiddenWord');


const words = [
    "programming", "javascript", "database", "markup", "framework", 
    "variable", "stylesheet", "library", "asynchronous", "hypertext"
];

let secretWord;
let guessedWord;
let guesses;


function newGame() {
    
    const randomIndex = Math.floor(Math.random() * words.length);
    secretWord = words[randomIndex];

 
    guessedWord = "*".repeat(secretWord.length).split('');

   
    hiddenWordElement.textContent = guessedWord.join('');
    guessCountSpan.textContent = 0;
    guesses = 0;

    
    console.log("Oikea sana:", secretWord);
}


function guessLetter(letter) {
    let correctGuess = false;

   
    for (let i = 0; i < secretWord.length; i++) {
        if (secretWord[i] === letter) {
            guessedWord[i] = letter;
            correctGuess = true;
        }
    }

    hiddenWordElement.textContent = guessedWord.join('');


    if (guessedWord.join('') === secretWord) {
        alert(`Onneksi olkoon! Oikea sana oli ${secretWord}. Tarvitsit ${guesses} arvausta.`);
        newGame(); 
    }

 
    guessCountSpan.textContent = guesses;
}
function guessWord(word) {
    guesses++;

    if (word === secretWord) {
        alert(`Onneksi olkoon! Oikea sana oli ${secretWord}. Tarvitsit ${guesses} arvausta.`);
        newGame();
    }

    guessCountSpan.textContent = guesses;
}
document.getElementById('hangmanForm').addEventListener('submit', function (e) {
    e.preventDefault(); 

    const guess = input.value.toLowerCase();
    input.value = ''; 
    guesses++;

   
    if (guess.length === 1) {
        guessLetter(guess);
    } else if (guess.length > 1) {
        guessWord(guess); 
    } else {
     
    }

    guessCountSpan.textContent = guesses; 
});

newGame();
