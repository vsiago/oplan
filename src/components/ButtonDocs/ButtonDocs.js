const btnDocs = document.querySelector('#btnDocs');
const listaMenu = document.querySelector('#listaMenu');


btnDocs.addEventListener("mouseover", function() {
    listaMenu.style.display = "block";
})

listaMenu.addEventListener("mouseout", function () {
    listaMenu.style.display = "none";
});


const subMenu = document.querySelectorAll('.animar-sub-menu')
const listaSubMenu = document.querySelector('#listaSubMenu')

subMenu.forEach((e) => {
    e.addEventListener("click", function () {
        listaSubMenu.classList.toggle('hidden');
    })
})

