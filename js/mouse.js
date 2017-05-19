var circle = document.getElementById('circle');
var db = false;
var x;
var y;

function start() {
    document.addEventListener("mousemove", move, false);
}

function stop() {
    document.removeEventListener("mousemove", move, false);
    circle.style.display = "none";
}

function move(event) {
    document.addEventListener('dblclick', dblclick, false);
    if(db === false) {
        x = event.pageX - 20;
        y = event.pageY - 20;
    } else {
        x = event.pageX - 45;
        y = event.pageY - 45;
    }
    circle.style.left = x + "px";
    circle.style.top = y + "px";
    circle.style.display = "block";
}

function dblclick() {

    if(db === false) {
        circle.style.backgroundColor = 'green';
        circle.style.height = 100 + 'px';
        circle.style.width = 100 + 'px';
        db = true;
    } else {
        circle.style.backgroundColor = 'red';
        circle.style.height = 50 + 'px';
        circle.style.width = 50 + 'px';
        db = false;
    }
}