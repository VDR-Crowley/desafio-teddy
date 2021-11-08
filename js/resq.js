// let researchField = document.querySelector('.research-field');
let input = document.getElementById("name");
const cancelInput = document.querySelector('.cancelInput');

cancelInput.addEventListener('click', () => {
  input.value = ''
  input.disabled = false;
})

function search(json) {
  json.forEach(item => {
    let word = input.value;
    let upperWord = fisrtLetterToUpperCase(word);
      
    let validWordJson  = upperWord == item.title ?? false;
    if(validWordJson) {

      let tbody = document.querySelector('.search-result tbody');
      tbody.innerHTML = structureTr(item);

    }

  })
}

function fisrtLetterToUpperCase(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
} 

function monitorInput() {
  fetch("./json/bancos.json")
  .then(response => response.text())
  .then(json => {
    console.log("clicou no input");
    let jsonDados = JSON.parse(json);
    search(jsonDados);
  })
}

input.addEventListener("keydown", monitorInput);



/* Exportando estrutura TR */
export function structureTr(json) {
  return `
  <tr class="list-item d-flex align-items-center">
    <td class="d-flex align-items-center recente-item">
      <img src="${json.image}" class="finance-img">
      <span>${json.title}</span>
    </td>

    <td>
      <span>${json.destination}</span>
    </td>

    <td>${json.date}</td>

    <td>
      <a
        href="#"
        class="
          btn-status
          text-light
          bg-success bg-opacity-50
          border border-success
        "
      >
        <i
          class="far fa-check-circle text-success"
        ></i>
        Atualizando
      </a>
    </td>

    <td class="acao-item">
      <i class="far fa-check-circle"></i>
    </td>
  </tr>`
}
