const buttonClose = document.querySelector('.close');
const modalArea = document.querySelector('.modal-area'); // mexer no width
const modal = document.querySelector('.modal-open'); // mexer no display
const buttonOrange = document.querySelector('.btn-orange');
const buttonHelp = document.querySelector('.btn-help ');

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

buttonOrange.addEventListener('click', openModal);


console.log(buttonClose);
console.log(modalArea);
console.log(modal);
console.log(buttonOrange);
console.log(buttonOrange);