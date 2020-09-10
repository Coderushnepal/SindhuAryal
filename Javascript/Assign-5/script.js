var btn = document.getElementById('btn');
var box = document.getElementById('box');

    var direction = 1;
btn.addEventListener('click', function(){
    var  dot = document.createElement('div');
    dot.classList.add('circle');
                //or
    // dot.style.height = "25px";
    // dot.style.width = "25px";
    // dot.style.borderRadius = "50%";
    // dot.style.backgroundColor = "blue";
    // dot.style.position = "absolute";


    dot.style.top = Math.random() * (box.clientHeight - 30) + "px";
    dot.style.left = Math.random() * (box.clientWidth - 30) + "px";
   
    var direction = 1;

    setInterval(
        (function(){
            var myDot = dot;
            return function(){
                var currentTop = myDot.style.top;
                // console.log(currentTop);
                var nextTop = parseInt(currentTop) + 10 * direction;
                myDot.style.top = nextTop + "px";
                // console.log(nextTop);
                var clientHeight = box.clientHeight;
                if(nextTop >= (clientHeight-25) || nextTop <= 0 ){
                    direction *= -1;
                }
            };
        }) (),
    1000/60, );

    // dot.addEventListener('click', function(){
    //     // var direction = 1;
    //     setInterval(
    //         (function(){
    //             var myDot = dot;
    //             return function(){
    //                 var currentTop = myDot.style.top;
    //                 // console.log(currentTop);
    //                 var nextTop = parseInt(currentTop) + 10 * direction;
    //                 myDot.style.top = nextTop + "px";
    //                 // console.log(nextTop);
    //                 var clientHeight = box.clientHeight;
    //                 if(nextTop >= (clientHeight-25) || nextTop <= 0 ){
    //                     direction *= -1;
    //                 }
    //             };
    //         }) (),
    //     1000/60, );
    // });

    box.appendChild(dot);
});
    
