let iconoMenu = document.querySelector(".icono-menu");
let navToggle = document.querySelector(".nav-toggle");

iconoMenu.addEventListener("click", function(){
    navToggle.classList.toggle("toggle");
});

const moon = document.querySelector(".moon");
const moon2 = document.querySelector(".moon2");
const body = document.querySelector("body");

load();

moon.addEventListener("click", function(){
    body.classList.toggle("darkmode");
    store(body.classList.contains("darkmode"));
});
moon2.addEventListener("click", function(){
    body.classList.toggle("darkmode");
    store(body.classList.contains("darkmode"));
});

function load() {
    const darkmode = localStorage.getItem('darkmode');
    if(!darkmode) {
        store('false');
    } else if(darkmode == 'true') {
        body.classList.add("darkmode");
    }
}

function store(value) {
    localStorage.setItem('darkmode', value)
}