
const titulo = document.getElementById('titulo');
const boton = document.getElementById('btn-cambiar');


function cambiarTextoYEstilo() {
    
    titulo.textContent = "¡Bienvenido al DOM interactivo!";

   
    titulo.classList.toggle('resaltado');
}


boton.addEventListener('click', cambiarTextoYEstilo);
