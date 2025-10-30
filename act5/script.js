
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.getElementById('closeModal');
const closeBtn = document.getElementById('closeBtn');


openModalBtn.addEventListener('click', () => {
  modal.style.display = 'flex'; 
});


closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none'; 
});


closeBtn.addEventListener('click', () => {
  modal.style.display = 'none'; 
});


window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none'; 
  }
});


document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    modal.style.display = 'none'; 
  }
});
