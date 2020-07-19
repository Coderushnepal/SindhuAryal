const btn = document.getElementById('btn');
const box = document.getElementById('box');

const height = box.clientHeight;
const width = box.clientWidth;
const margin = window.innerHeight - height;

btn.onclick = function(e) {
        var dot = document.createElement('div');
        dot.classList.add('circle');
        dot.style.top = margin + Math.random() * height + 'px';
        dot.style.left = Math.random() * width + 'px';
        box.appendChild(dot);

        var direction = 1;

        dot.addEventListener("click" , function() {
          var  interval = setInterval(function(){
                // var currentTop = dot.style.top;
                var nextTop = parseInt(dot.style.top) + 10 * direction;
                dot.style.top = nextTop + "px";
                if( nextTop >= height || nextTop <= 100 ) {
                   direction *= -1;
                }
            }, 10000/60)
        });
    };


//     var ball = document.createElement("div"); // <div></div>
// // div attribute -> class, id, title, style, name, ...
// ball.style.backgroundColor = "red";
// ball.style.position = "absolute";
// ball.style.height = "100px";
// ball.style.width = "100px";
// ball.style.borderRadius = "50%";
// ball.style.top = "200px";
// ball.style.left = "200px";
// var box = document.getElementById("box1");
// box.appendChild(ball);
// var interval;
// var direction = 1;
// ball.addEventListener("click", function () {
//   interval = setInterval(function () {
//     var currentTop = ball.style.top;
//     var nextTop = parseInt(currentTop) + 10 * direction;
//     ball.style.top = nextTop + "px";
//     if (nextTop >= 750 || nextTop <= 100) {
//       direction *= -1;
//     }
//   }, 10000 / 60);
// });
// var btn = document.getElementById("btn");
// btn.addEventListener("click", function () {
//   clearInterval(interval);
// });