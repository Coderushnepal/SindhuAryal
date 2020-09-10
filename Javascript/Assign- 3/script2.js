const btn = document.getElementById('btn');
const box = document.getElementById('box');

const height = box.clientHeight;
const width = box.clientWidth;
// const margin = window.innerHeight - height;

btn.addEventListener('click', function(){
    var dot = document.createElement('div');
    dot.classList.add('circle');
    console.log(dot.style.height);
	console.log(dot.style.width);
                //or
    //  dot.style.height = "25px";
    //  dot.style.width = "25px";
    //  dot.style.borderRadius = "50%";
    //  dot.style.backgroundColor = "blue";
    //  dot.style.position = "absolute";

    dot.style.top = Math.random() * (height - 30) + 'px';
    dot.style.left = Math.random() * (width - 30) + 'px';
    // console.log(dot.style.top);

    box.appendChild(dot);
});
