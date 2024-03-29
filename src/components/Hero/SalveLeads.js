// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  set,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq1yP0Auw8QgR6NL1IZkXZSTUGd_UKbw0",
  authDomain: "oplan-4e3e6.firebaseapp.com",
  projectId: "oplan-4e3e6",
  storageBucket: "oplan-4e3e6.appspot.com",
  messagingSenderId: "1062637390846",
  appId: "1:1062637390846:web:65928175677f800e588eaf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// PC /////////////////////////////////////////////
let inputNamePc = document.querySelector(".inputNamePc");
const inputTelPc = document.querySelector(".inputTelPc");
const formPc = document.querySelector(".formPc");

inputTelPc.addEventListener("keypress", () => {
  const inputTelLength = inputTelPc.value.length;

  if (inputTelLength === 0) {
    inputTelPc.value += "(";
  } else if (inputTelLength === 3) {
    inputTelPc.value += ") ";
  } else if (inputTelLength === 9) {
    inputTelPc.value += "-";
  }
});

//**** CONTINUAR ******/
// inputNamePc.addEventListener("keypress", () => {
//   const palavras = inputNamePc.value.split(" ")[0][0].toUpperCase()

//   inputNamePc.value = palavras

// })

function enviarFormularioPc(event) {
  event.preventDefault();

  const name = inputNamePc.value;
  const whatsApp = inputTelPc.value;

  const btnEnviar = formPc.querySelector("button");
  btnEnviar.innerHTML = "Enviando...";

  create(name, whatsApp);
}

formPc.addEventListener("submit", enviarFormularioPc);

// MOBILE /////////////////////////////////////////////
const inputNameMob = document.querySelector(".inputNameMob");
const inputTelMob = document.querySelector(".inputTelMob");
const formMobile = document.querySelector(".formMobile");

inputTelMob.addEventListener("keypress", () => {
  const inputTelMobLength = inputTelMob.value.length;

  if (inputTelMobLength === 0) {
    inputTelMob.value += "(";
  } else if (inputTelMobLength === 3) {
    inputTelMob.value += ") ";
  } else if (inputTelMobLength === 9) {
    inputTelMob.value += "-";
  }
});

function enviarFormularioMobile(event) {
  event.preventDefault();

  const name = inputNameMob.value;
  const whatsApp = inputTelMob.value;

  create(name, whatsApp);
}

formMobile.addEventListener("submit", enviarFormularioMobile);

function create(name, whatsApp) {
  const leadsRef = ref(database, "leads");
  const newLeadRef = push(leadsRef);

  const data = {
    name: name,
    whatsApp: whatsApp,
  };

  set(newLeadRef, data)
    .then(() => {
      inputNamePc.value = "";
      inputTelPc.value = "";
      HandlerAbrirModalObrigado(name);
    })
    .catch((error) => {
      console.error("Erro ao salvar os dados:", error);
    });
}

const HandlerAbrirModalObrigado = (nome) => {
  // Abrir modal
  const modalObrigado = document.querySelector("#modalObrigado");
  modalObrigado.classList.remove("hidden");
  modalObrigado.classList.add("flex");

  const primeiroNome = nome.split(" ");

  const displayNomePessoa = document.querySelector("#displayNomePessoa");
  displayNomePessoa.innerHTML = primeiroNome[0];

  // Fechar modal
  const btnOk = document.querySelector("#btnOk");
  btnOk.addEventListener("click", () => {
    modalObrigado.classList.add("hidden");
    modalObrigado.classList.remove("flex");
  });
};

const formatarNumeroCelular = (numero) => {};
