var container = document.createElement('div');
document.body.appendChild(container);

// to put guessed and wrong words
var guessedWords = new Set();
var wrongWords = new Set();
// let count = 0;

var words = ["Ant", "Banana", "Header", "Cake", "Sindhu", "Monday", "Tuesday", "Blacksheep"];


// random word generate
var randomWord= (words[Math.floor(Math.random()*words.length)]).toLowerCase();
console.log(randomWord);


// div for dash
var dashDiv = document.createElement('div');
dashDiv.classList.add('dashDiv');
container.appendChild(dashDiv);

for (var i = 0; i < randomWord.length; i++) {
    var dash = document.createElement('div');
    dash.classList.add('dash');    
    dashDiv.appendChild(dash);
}

var gameContainer = document.getElementById("game-container");
var wrongDiv = document.getElementById("wrongDiv");

var wrongTitle = document.createElement('h4');
wrongTitle.innerHTML = 'Wrong Letters';
wrongTitle.classList.add('wrongTitle');
wrongDiv.appendChild(wrongTitle);

var letters = document.querySelectorAll('.dash');

// hangman display 
var k = 0;
var figures = document.querySelectorAll(".figure-part");

function displayFigureParts() {
  var part = Array.from(figures);
  part[k].style.display = "block";
    k++;
}

// event listener to guess the letter
document.addEventListener("keydown", function (e) {
    var alreadyGuessed = document.getElementById('already-guessed');
    document.body.appendChild(alreadyGuessed);

    if( Array.from(guessedWords).includes(event.key)) {
        console.log(alreadyGuessed);
        alreadyGuessed.style.display = 'block';
        alreadyGuessed.innerHTML = event.key +" is already guessed";
       setTimeout( function(){ 
        alreadyGuessed.style.display = 'none';
       },2000); 
        
    } 
    else {
        alreadyGuessed.style.display = 'none';
        guessedWords.add(event.key);
        
        if (randomWord.includes(e.key)) {
            for (var j = 0; j < randomWord.length; j++) {
                if (randomWord[j] === e.key) {
                letters[j].innerHTML = e.key;
                checkWin();
                }
            }
        } 
        else {            
            var wrongLetters = document.getElementById("wrongLetters");
            wrongWords.add(event.key);
            wrongLetters.innerHTML = Array.from(wrongWords).join(',');
            wrongDiv.appendChild(wrongLetters);
            
            count = count + 1;
            console.log(count);

            checklost();
            displayFigureParts();  
        } 
    }
});




