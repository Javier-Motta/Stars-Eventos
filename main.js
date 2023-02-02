const iconMobileMenu = document.querySelector(".header-iconMobileMenu");
const lisElementMobileMenu = document.querySelector (".header__lisElement-mobileMenu");

iconMobileMenu.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu(){
    lisElementMobileMenu.classList.toggle("inactive");
}
/* SLIDER SERVICE */
(function(){
    const sliders = [...document.querySelectorAll(".main__containerSlide-body")];
    const arrowBefore = document.querySelector("#before");
    const arrowAfter = document.querySelector("#after");
    let value;

    arrowBefore.addEventListener("click", ()=>changePosition(-1));
    arrowAfter.addEventListener("click", ()=>changePosition(1));

    function changePosition(change){
        const currentElement =  Number(document.querySelector(".slider__body--show").dataset.id);

        value = currentElement;
        value+= change;

        if (value === 0 || value == sliders.length+1) {
            value = value === 0 ? sliders.length : 1;       
        }
        sliders[currentElement-1].classList.toggle("slider__body--show");
        sliders[value-1].classList.toggle("slider__body--show");
    }

})()

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