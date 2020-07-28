const words = ["apple", "banana", "header", "cake", "Sindhu", "Monday", "Tuesday"];
let index = Math.floor(Math.random() * words.length);
// console.log(index);
const randomWord = words[index];
console.log(randomWord);

var gameContainer = document.getElementById("game-container");
// var dashContainer = document.getElementById("dash-container");

for( let i=0; i < randomWord.length; i++) {
    // console.log(randomWord.length);
    var newDiv = document.createElement('div');
    newDiv.classList.add('dash');
    newDiv.setAttribute("id","dash")
    
    var dashContainer = document.getElementById('dash-container');
    gameContainer.appendChild(dashContainer);
    dashContainer.appendChild(newDiv);
}

var word = document.querySelectorAll("#dash");
var wrongContainer = document.getElementById("wrong-container");
var span = document.createElement("span");
span.innerHTML= "Wrong";

wrongContainer.appendChild(span);

document.addEventListener("keydown", (e) => {
    // console.log(e.key); 
    let doesItmatches = randomWord.includes(e.key);
    // console.log(doesItmatches);

    if(doesItmatches)  {
        for (var i = 0; i < randomWord.length; i++)
        {
            if(randomWord[i] === e.key)
            {
                word[i].innerHTML = e.key;
            }      
        }
    }
    else
    {
       // console.log("Milena");
       var wrongLetter = document.createElement("p");
       wrongLetter.innerHTML = e.key;
       span.appendChild(wrongLetter);
    }
 })