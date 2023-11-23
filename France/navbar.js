// navbar.js
// if hamburger-menu is clicked display mobile navbar (.nav-mobile) and console.log("Opened")

console.log("Charged !");

const hamburgerMenu = document.querySelector(".hamburger-menu");

hamburgerMenu.addEventListener("click", () => {
    const navMobile = document.querySelector(".nav-mobile");

    navMobile.classList.toggle("active");

    console.log("Opened");
})