const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const tableBody = document.querySelector('#table tbody');

let data = [];

function renderTable() {
  tableBody.innerHTML = '';
  data.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.age}</td>
    `;
    tableBody.appendChild(row);
  });
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = nameInput.value.trim();
  const age = parseInt(ageInput.value.trim());
  
  if (name && age) {
    data.push({ name, age });
    renderTable();
    nameInput.value = '';
    ageInput.value = '';
  }
});

document.getElementById('sortName').addEventListener('click', () => {
  data.sort((a, b) => a.name.localeCompare(b.name));
  renderTable();
});

document.getElementById('sortAge').addEventListener('click', () => {
  data.sort((a, b) => a.age - b.age);
  renderTable();
});
