const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const successMessage = document.getElementById('successMessage');

nameInput.addEventListener('input', () => {
  if (nameInput.value.length < 3) {
    nameError.textContent = 'El nombre debe tener al menos 3 caracteres';
    nameInput.style.borderColor = 'red';
  } else {
    nameError.textContent = '';
    nameInput.style.borderColor = 'green';
  }
});

emailInput.addEventListener('input', () => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(emailInput.value)) {
    emailError.textContent = 'El email no es válido';
    emailInput.style.borderColor = 'red';
  } else {
    emailError.textContent = '';
    emailInput.style.borderColor = 'green';
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  if (nameInput.value.length >= 3 && /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(emailInput.value)) {
    successMessage.textContent = 'Formulario enviado con éxito';
    successMessage.style.display = 'block';
  } else {
    successMessage.textContent = '';
  }
});
