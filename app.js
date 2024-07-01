//Selecciones para barra de navegación burguer
const burguer = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");


burguer.addEventListener("click", () => {
    ul.classList.toggle("show");
});

//Cerrar el menu de burger
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
    link.addEventListener("click", () => {
        ul.classList.remove("show");
    })
);

//Selección de desplazar hacia arriba
const scrollUp = document.querySelector("#scroll-up");

//Funcionalidad de desplazar hacia arriba 
scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});