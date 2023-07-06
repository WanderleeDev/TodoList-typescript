import Tasks from "../interface/Tasks.interface";
import renderTask from "./renderCard";

//Maneja el formulario y crea una tarea nueva
function handlerTask() {
  
  const form = document.querySelector<HTMLFormElement>('#tasksFrom');

  form?.addEventListener('submit', e => {
    e.preventDefault();
  
    const listaTareas: Tasks[] =  JSON.parse(localStorage.getItem('tareas') || '[]');

    const tarea = form['task'] as unknown as HTMLInputElement;
    const content = form['description'] as unknown as HTMLTextAreaElement;
    
    //verifica que los input no sean este vacíos o sen espacios en blanco
    if(tarea.value.trim() === '' || content.value.trim() === ''){
      //retorna un alert cortante la ejecución de toda la función
      return alert('Complete todos los campos');
    }

    //agregar los tarea y content como un obj al array listaTareas
    listaTareas.push({
      title: tarea.value,
      description: content.value
    });  

    //guarda el array listaTareas en el local storage  
    localStorage.setItem('tareas', JSON.stringify(listaTareas));
    
    //limpia el formulario
    form.reset();

    //focus a primer input
    tarea.focus();

    //renderiza las tareas en el DOM
    renderTask(listaTareas)
    console.log(listaTareas);
  });
}

export default handlerTask;