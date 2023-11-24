// navbar.js

console.log("Charged !");

const hamburgerMenu = document.querySelector(".hamburger-menu");
const closeMenu = document.querySelector(".close-menu");

hamburgerMenu.addEventListener("click", () => {
    const navMobile = document.querySelector(".nav-mobile");

    navMobile.classList.toggle("active");

    console.log("Opened");
})

closeMenu.addEventListener("click", () => {
    const navMobile = document.querySelector(".nav-mobile");

    navMobile.classList.toggle("active");

    console.log("Closed");
})