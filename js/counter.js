var counterDiv = document.getElementById("counter");
var counter = 0;
var int;

function count() {
    counter += 1;
    counterDiv.innerHTML = counter;

    if(counter === 100) {
        counterDiv.style.backgroundColor = 'black';
        clearInterval(int);
    }
}

function start() {
    clearInterval(int);
    counter = 0;
    counterDiv.innerHTML = counter;
    counterDiv.style.backgroundColor = 'green';
    int = setInterval(count, 100);
}