// navnar.js

const navMobile = document.querySelector(".nav-mobile");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const closeMenu = document.querySelector(".close-menu");

console.log("Chargé !");

function toggleMenu() {
    navMobile.classList.toggle("active");
}

hamburgerMenu.addEventListener("click", () => {
    toggleMenu();
    console.log("Ouvert");
});

closeMenu.addEventListener("click", () => {
    toggleMenu();
    console.log("Fermé");
});
