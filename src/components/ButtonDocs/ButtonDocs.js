const btnDocs = document.querySelector('#btnDocs');
const listaMenu = document.querySelector('#listaMenu')

btnDocs.addEventListener("click", function() {
    listaMenu.classList.toggle('hidden')
})