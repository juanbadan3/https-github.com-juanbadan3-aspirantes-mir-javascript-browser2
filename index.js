
       
const input = document.getElementById('nuevaTarea');
const botonAgregar = document.getElementById('agregarTarea');
const listaTareas = document.getElementById('listaTareas');

botonAgregar.addEventListener('click', function() {
  
  const nuevaTarea = input.value;

    const nuevaTareaElemento = document.createElement('li');
  const nuevaTareaCheckbox = document.createElement('input');
  nuevaTareaCheckbox.type = 'checkbox';
  
  
  nuevaTareaElemento.textContent = nuevaTarea;
  nuevaTareaElemento.appendChild(nuevaTareaCheckbox);
  
  
  listaTareas.appendChild(nuevaTareaElemento);

    input.value = '';
});

listaTareas.addEventListener('click', function(event) {
  const tareaClickeada = event.target;
    
  if (tareaClickeada.type === 'checkbox') {
   
    const tarea = tareaClickeada.parentNode;
    if (tarea.classList.contains('completada')) {
      tarea.classList.remove('completada');
    } else {
      tarea.classList.add('completada');
    }
  }
});

listaTareas.addEventListener('dblclick', function(event) {
  const tareaClickeada = event.target;
  
    if (tareaClickeada.tagName === 'LI') {
   
    tareaClickeada.remove();
  }
});
       


  
