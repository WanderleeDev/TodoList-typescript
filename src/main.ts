import './style.css'
import retrieveStoredContent from './utils/retrieveStoredContent.ts';
import handlerTask from './utils/handlerTask.ts';
import deleteTasks from './utils/deleteTasks.ts';
import mutationObserve from './utils/mutation.ts';

//obtiene las tareas del local storage después de cargado el documento
retrieveStoredContent();

//Maneja el formulario y crea una tarea nueva
handlerTask();

//Borra las tareas agregadas tanto del DOM como el localStorage
deleteTasks()

//MutationObserver para observar el taskContainer, si esta   vació reenderiza una plantilla de con un mensaje 
mutationObserve('#taskContainer');