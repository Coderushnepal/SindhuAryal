const btn = document.getElementById('btn');
const box = document.getElementById('box');

// const height = box.clientHeight;
// const width = box.clientWidth;
// const margin = window.innerHeight - height;
var direction = 1;

btn.addEventListener('click', function(){
    var dot = document.createElement('div');
    // dot.classList.add('circle');
                //or
     dot.style.height = "25px";
     dot.style.width = "25px";
     dot.style.borderRadius = "50%";
     dot.style.backgroundColor = "blue";
     dot.style.position = "absolute";

    dot.style.top = Math.random()* (box.clientHeight - 30) + 'px';
    dot.style.left = Math.random()* (box.clientWidth - 30) + 'px';

    box.appendChild(dot);
});