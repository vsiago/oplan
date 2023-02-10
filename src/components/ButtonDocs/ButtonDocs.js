// Animar Menu Hover
const btnDocs = document.querySelector('#btnDocs');
const listaMenuHover = document.querySelector('#listaMenuHover');


btnDocs.addEventListener("mouseover", function() {
    listaMenuHover.style.display = "block";
})

listaMenuHover.addEventListener("mouseout", function () {
    listaMenuHover.style.display = "none";
});


// SubMenu Regulamentações ANS

const btnRegAns = document.querySelector('.btnRegAns')
const regAns = document.querySelector('#regAns')

btnRegAns.addEventListener("click", function () {
    regAns.classList.toggle('hidden');
})

// SubMenu Qualificações de Operadoras qualiOpe

const btnQualiOpe = document.querySelector('.btnQualiOpe')
const qualiOpe = document.querySelector('#qualiOpe')

btnQualiOpe.addEventListener("click", function () {
    qualiOpe.classList.toggle('hidden');
})