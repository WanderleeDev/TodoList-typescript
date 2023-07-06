import Tasks from "../interface/Tasks.interface";
import renderTask from "./renderCard";

//obtiene las tareas del local storage después de cargado el documento
function retrieveStoredContent():void {
  document.addEventListener('DOMContentLoaded', () => {
    /*
    Obtiene las tareas del localStorage y la convierte en un objeto js(Array es un tipo especial de obj)
    Si no tiene contenido el localStorage se un valor por defecto de un Array vació 
    */
    const tasks: Tasks[] = JSON.parse(localStorage.getItem('tareas') || '[]');
    
    tasks.length ? renderTask(tasks) : console.log('Sin contenido previo en localStorage');
  });
}

export default retrieveStoredContent;