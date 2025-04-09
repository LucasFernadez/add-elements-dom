 // Aquí tu código
const boton = document.getElementById('agregarBtn');
const lista = document.getElementById('lista');

boton.addEventListener('click', () => {

  const nuevoElemento = prompt('Introduce un nuevo elemento:');
  if (nuevoElemento && nuevoElemento.trim() !== '') {
    const li = document.createElement('li');
    li.textContent = nuevoElemento; 
    lista.appendChild(li);
  }
});
