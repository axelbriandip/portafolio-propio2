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
// const toExperiencia = document.querySelector(".to-experiencia");
// toExperiencia.addEventListener("click", function() {
//     navToggle.classList.toggle("toggle");
// })
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
const btn_theme = document.querySelector(".btn-theme");
const btn_theme1 = document.querySelector(".btn-theme1");

load();

btn_theme.addEventListener("click", function(){
    body.classList.toggle("darkmode");
    store(body.classList.contains("darkmode"));
});
// btn desktop
btn_theme1.addEventListener("click", function(){
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