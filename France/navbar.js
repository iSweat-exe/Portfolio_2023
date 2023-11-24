const navMobile = document.querySelector(".nav-mobile");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const closeMenu = document.querySelector(".close-menu");
const html = document.documentElement;
const body = document.body;

console.log("Chargé !");

function toggleMenu() {
    navMobile.classList.toggle("active");

    // Ajouter ou supprimer la classe 'no-scroll' sur html et body
    html.classList.toggle("no-scroll");
    body.classList.toggle("no-scroll");
}

hamburgerMenu.addEventListener("click", () => {
    toggleMenu();
    console.log("Ouvert");
});

closeMenu.addEventListener("click", () => {
    toggleMenu();
    console.log("Fermé");
});
