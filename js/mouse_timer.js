var circle = document.getElementById('circle');
var saveX=[];
var saveY=[];
var counter = 0;
var i;

function start() {
    document.addEventListener("mousemove", savemove, false);
}

function stop() {
    document.removeEventListener("mousemove", savemove, false);
    document.removeEventListener("click", move, false);
    circle.style.display = "none";
    empty();
}

function savemove(event) {
    saveX.push(event.pageX - 20);
    saveY.push(event.pageY - 20);
    document.addEventListener("click", move, false);
}

function move(event) {
    circle.style.display = "block";
    i = setInterval(function(){
        counter += 1;
        circle.style.left = saveX[counter] + "px";
        circle.style.top = saveY[counter] + "px";

        if (saveY.length <= counter) {
            empty();
        }
    }, 10);
}

function empty() {
    saveX=[];
    saveY=[];
    counter = 0;
    clearInterval(i);
}