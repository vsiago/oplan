const btnDocs = document.querySelector('#btnDocs');
const listaMenu = document.querySelector('#listaMenu');


btnDocs.addEventListener("mouseover", function() {
    listaMenu.style.display = "block";
})

listaMenu.addEventListener("mouseout", function () {
    listaMenu.style.display = "none";
});


const subMenu = document.querySelector('#animar-sub-menu')
const listaSubMenu = document.querySelector('#listaSubMenu')


subMenu.addEventListener("click", function () {
    listaSubMenu.classList.toggle('hidden');
})