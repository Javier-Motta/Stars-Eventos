const iconMobileMenu = document.querySelector(".header-iconMobileMenu");
const lisElementMobileMenu = document.querySelector (".header__lisElement-mobileMenu");

iconMobileMenu.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu(){
    lisElementMobileMenu.classList.toggle("inactive");
}
