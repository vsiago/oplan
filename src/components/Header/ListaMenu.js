const menuIcon = document.querySelector("#menuIcon");
const menuLista = document.querySelector("#menuLista");

menuIcon.addEventListener("click", function () {
  menuLista.classList.toggle("mobile-collapse");
});
