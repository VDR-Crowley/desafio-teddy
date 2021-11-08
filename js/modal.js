import { structureTr } from "./resq.js";

// variaveis da primeira tela
const buttonClose = document.querySelector('.close');
const modalArea = document.querySelector('.modal-area');
const modal = document.querySelector('.modal-open');
const buttonOrange = document.querySelector('.btn-orange');
const buttonHelp = document.querySelector('.btn-help ');

// variaveis da segunda tela
const pages = document.querySelectorAll('.pages a');


// funções primeira tela
function openModal() {
  if(modal.classList.contains('open') !== true) {
    modal.classList.add('open');
    modalArea.style.width = "100vw";
    modal.style.display = "grid";
    buttonClose.addEventListener('click', closeModal);
    //document.body.style.overflow = 'hidden';
  }
}
function closeModal() {
  modal.classList.remove('open');
  modalArea.style.width = "0";
  modal.style.display = "none";
  //document.body.style.overflow = 'auto';
}

function btnHelp() {
  alert("Pedido de ajuda!");
}

buttonOrange.addEventListener('click', openModal);
buttonHelp.addEventListener('click', btnHelp);

// carrega o json assim que a pagina é carregada
window.addEventListener('load', () => {
  let tbody = document.querySelector('.search-result tbody');

  fetch("./json/bancos.json")
  .then(response => response.text())
  .then(json => {
    console.log("clicou no input");
    let jsonDados = JSON.parse(json);
    jsonDados.forEach(item => {
      tbody.innerHTML += structureTr(item);
    })
  });
})



// paginação segunda tela
pages.forEach((page) => {
  page.addEventListener('click', () => {


    if(page.classList.contains('active') !== true) {

      if(page.classList.contains("proximo")) {
        page.classList.add('active');
        page.previousElementSibling.classList.remove('active');
        page.previousElementSibling.querySelector('div').classList.remove('circle-active');
        page.querySelector('div').classList.add('circle-active');
      }
      else if(page.classList.contains('anterior')) {
        page.classList.add('active');
        page.nextElementSibling.classList.remove('active');
        page.nextElementSibling.querySelector('div').classList.remove('circle-active');
        page.querySelector('div').classList.add('circle-active');
      }

    }

  });
});