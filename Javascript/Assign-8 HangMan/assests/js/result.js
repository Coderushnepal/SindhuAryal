// message popup
var messageDisplay = document.getElementById('pop-up');
var popUpMsg = document.getElementById('pop-up-message');

let count = 0;

function checklost() {    
    if (count === 6) {
        console.log(count)
		popUpMsg.innerHTML = 'Sorry, you lost!';
        messageDisplay.style.display = 'block';
        tryButton.addEventListener('click' , function(){
            window.location.reload();
        });
    }
}


function checkWin() {
	var dash = document.getElementsByClassName('dash');
	var win = Array.from(dash).every((value) => {
		return value.innerHTML ? true : false;
	});
	console.log(win);
	if (win) {
		popUpMsg.innerHTML = 'Congrats, You Won!';
        messageDisplay.style.display = 'block';
        tryButton.addEventListener('click' , function(){
            window.location.reload();
        });
	}
}