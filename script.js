//zet alle id's om in een variabele
const hamburger = document.getElementById("hamburger");
const colorMenu = document.getElementById("colormenu");
const menu = document.getElementById("menu");
const body = document.getElementById("body");

//zet de kleuren  om in een variabele
const red = document.getElementById("red");
const orange = document.getElementById("orange");
const purple = document.getElementById("purple");
const green = document.getElementById("green");
const home = document.getElementById("home");

// maak een click event en maak een toggle-menu
menu.addEventListener('click', showMenu);
function showMenu() {
    menu.classList.toggle("menu-open");
}

//maak een click event en verander de kleur
red.addEventListener('click', colorRed);
function colorRed() {
    if (body.className == 'background-grey' || 'background-orange' || 'backgroud-green' || 'background-purple') {
        body.className = 'background-red';
        document.getElementById('divResult').innerHTML = 'You choosed Red';
    }
}

orange.addEventListener('click', colorOrange);
function colorOrange() {
    if (body.className == 'background-grey' || 'background-red' || 'backgroud-green' || 'background-purple') {
        body.className = 'background-orange';
        document.getElementById('divResult').innerHTML = 'You choosed Orange';
    }
}

purple.addEventListener('click', colorPurple);
function colorPurple() {
    if (body.className == 'background-grey' || 'background-red' || 'backgroud-green' || 'background-orange') {
        body.className = 'background-purple';
        document.getElementById('divResult').innerHTML = 'You choosed Purple';
    }
}

green.addEventListener('click', colorGreen);
function colorGreen() {
    if (body.className == 'background-grey' || 'background-red' || 'backgroud-purple' || 'background-orange') {
        body.className = 'background-green';
        document.getElementById('divResult').innerHTML = 'You choosed Green';
    }
}

home.addEventListener('click', colorHome);
function colorHome() {
    if (body.className == 'background-green' || 'background-red' || 'backgroud-purple' || 'background-orange') {
        body.className = 'background-grey';
        document.getElementById('divResult').innerHTML = 'You choosed Home';
    }
}







