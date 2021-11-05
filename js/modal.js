// variaveis da primeira tela
const buttonClose = document.querySelector('.close');
const modalArea = document.querySelector('.modal-area');
const modal = document.querySelector('.modal-open');
const buttonOrange = document.querySelector('.btn-orange');
const buttonHelp = document.querySelector('.btn-help ');

// variavei da segunda tela
const pages = document.querySelector('.pages');
const previous = document.querySelector('.anterior');
const next = document.querySelector('.proximo');
const circle = document.querySelectorAll('.circle');

// funções primeira tela
function openModal() {
  if(modal.classList.contains('open') !== true) {
    modal.classList.add('open');
    modalArea.style.width = "100vw";
    modal.style.display = "grid";
    buttonClose.addEventListener('click', closeModal);
  }
}
function closeModal() {
  modal.classList.remove('open');
  modalArea.style.width = "0";
  modal.style.display = "none";
}

function btnHelp() {
  alert("Pedido de ajuda!");
}

// funções segunda tela

buttonOrange.addEventListener('click', openModal);
buttonHelp.addEventListener('click', btnHelp);
/*
pages.addEventListener('click', () => {
  previous.addEventListener('click', () => {
    circle.forEach((item) => {
      if(item.classList.contains('circle-active') !== true) {
        item.classList.add('circle-active');
      } else {
        item.classList.remove('circle-active');
      }
    })
  });

  next.addEventListener('click', () => {
    circle.forEach((item) => {
      if(item.classList.contains('circle-active') !== true) {
        item.classList.add('circle-active');
      } else {
        item.classList.remove('circle-active');
      }
    })
  });
  
})*/

console.log(buttonClose);
console.log(modalArea);
console.log(modal);
console.log(buttonOrange);
console.log(buttonOrange);