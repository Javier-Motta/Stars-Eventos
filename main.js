const iconMobileMenu = document.querySelector(".header-iconMobileMenu");
const lisElementMobileMenu = document.querySelector (".header__lisElement-mobileMenu");

iconMobileMenu.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu(){
    lisElementMobileMenu.classList.toggle("inactive");
}

const recreationServiceList = [];

recreationServiceList.push({
    name: "ANIMACIÓN INFANTIL - A",
    contens: "Recreación, Pintacaritas, Juegos dinámicos, Show de payaso (pedagógico o Familiar), Globoflexia, Concursos, Sonido",
    price: 160000,
    time: 3 + " horas",
    image: s,
});
recreationServiceList.push({
    name: "ANIMACIÓN INFANTIL - B",
    contens: "Recreación, Pintacaritas, Juegos dinámicos, Show de payaso (pedagógico o Familiar), Globoflexia, Concursos",
    price: 130000,
    time: "2:30" + " horas",
    image: s,
});
recreationServiceList.push({
    name: "ANIMACIÓN INFANTIL - C",
    contens: "Recreación, Pintacaritas, Juegos dinámicos, Recreador(a), Concursos",
    price: 100000,
    time: "2" + " horas",
    image: s,
})