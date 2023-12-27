const start = document.getElementById('start');
const stop = document.getElementById('stop');

const changeColor = function() {
    const num = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++) {
        color += num[Math.floor(Math.random() * 16)];
    }
    //console.log(color);
    document.body.style.backgroundColor = color;
}

let interval; 

start.addEventListener('click', function(e) {
    // console.log(e);
    if(!interval) interval = setInterval(changeColor, 1000);
})

stop.addEventListener('click', function(e) {
    console.log(e);
    clearInterval(interval);
    interval = null;
})