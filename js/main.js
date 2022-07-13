// show nav-mobile
let iconoMenu = document.querySelector(".icono-menu");
let navToggle = document.querySelector(".nav-toggle");

iconoMenu.addEventListener("click", function(){
    navToggle.classList.toggle("toggle");
});

// hidden nav-mobile when to click in the item
const toHome = document.querySelector(".to-home");
toHome.addEventListener("click", function() {
    navToggle.classList.toggle("toggle");
})
const toacercademi = document.querySelector(".to-acercademi");
toacercademi.addEventListener("click", function() {
    navToggle.classList.toggle("toggle");
})
const toMishabilidades = document.querySelector(".to-mishabilidades");
toMishabilidades.addEventListener("click", function() {
    navToggle.classList.toggle("toggle");
})
const toExperiencia = document.querySelector(".to-experiencia");
toExperiencia.addEventListener("click", function() {
    navToggle.classList.toggle("toggle");
})
const toPortafolio = document.querySelector(".to-portafolio");
toPortafolio.addEventListener("click", function() {
    navToggle.classList.toggle("toggle");
})
const toContacto = document.querySelector(".to-contacto");
toContacto.addEventListener("click", function() {
    navToggle.classList.toggle("toggle");
})

// change theme
const moon = document.querySelector(".moon");
const moon2 = document.querySelector(".moon2");
const sun = document.querySelector(".sun");
const sun2 = document.querySelector(".sun2");
const body = document.querySelector("body");

load();

moon.addEventListener("click", function(){
    body.classList.toggle("darkmode");
    store(body.classList.contains("darkmode"));
});
// btn desktop
moon.addEventListener("click", function(){
    // body.classList.toggle("darkmode");
    sun.classList.toggle("toggle");
    moon.classList.toggle("toggle");
    store(body.classList.contains("darkmode"));
});
sun.addEventListener("click", function(){
    body.classList.toggle("darkmode");
    sun.classList.toggle("toggle");
    moon.classList.toggle("toggle");
    store(body.classList.contains("darkmode"));
});
moon2.addEventListener("click", function(){
    body.classList.toggle("darkmode");
    sun2.classList.toggle("toggle");
    moon2.classList.toggle("toggle");
    store(body.classList.contains("darkmode"));
});
sun2.addEventListener("click", function(){
    body.classList.toggle("darkmode");
    sun2.classList.toggle("toggle");
    moon2.classList.toggle("toggle");
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