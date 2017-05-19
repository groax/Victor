var wood = 10;
var food = 10;
var gold = 0;
var worker = 1;
var farmer = 1;
var sword;
var spear;
var bow;
var hunter;

var timer = setInterval(start, 1000);
var buying;

function start() {
    racecourses();
}

function racecourses() {
    wood += worker * 0.3;
    food += farmer * 0.5;

    food -= worker * 0.2;
    food -= farmer * 0.1;
    if(food <= 0) {
        if(worker > 0)
            worker -= 1;
    }
    show();
}

function buy(what) {
    var list = [] + what;
    // document.getElementById("buy").innerHTML += "<br>"+list;

    var x = document.getElementById(what);
    x = parseInt(x.innerHTML);
    var w = wood - x * 5.5;
    var f = food - x * 2.5;

    if(w > 0 && f > 0) {
        wood = w;
        food = f;
        document.getElementById(what).innerHTML = x+1;
        worker = document.getElementById("worker").innerHTML;
        farmer = document.getElementById("farmer").innerHTML;
        document.getElementById("buy").innerHTML = "";

    } else {
        document.getElementById("buy").innerHTML = "Te weinig voor "+what+"<br><br>Hout: "+ parseInt(w)+"<br>Eten: "+ parseInt(f);
    }
}

function show() {
    if(food > 0) {
        document.getElementById("food").innerHTML = parseInt(food);
    } else {
        food = 0;
        document.getElementById("food").innerHTML = 0;
    }
    document.getElementById("wood").innerHTML = parseInt(wood);
    document.getElementById("gold").innerHTML = parseInt(gold);
    document.getElementById("worker").innerHTML = parseInt(worker);
    document.getElementById("farmer").innerHTML = parseInt(farmer);

    cookie();
}

function cookie() {

    }