let contador = 0;
const contadorDisplay = document.getElementById('contador');
const btnSumar = document.getElementById('sumar');
const btnRestar = document.getElementById('restar');
const btnReset = document.getElementById('reset');

btnSumar.addEventListener('click', () => {
    contador++;
    actualizarContador();
});

btnRestar.addEventListener('click', () => {
    if (contador > 0) {
        contador--;
    }
    actualizarContador();
});

btnReset.addEventListener('click', () => {
    contador = 0;
    actualizarContador();
});

function actualizarContador() {
    contadorDisplay.textContent = contador;
    btnRestar.disabled = contador === 0;
}

