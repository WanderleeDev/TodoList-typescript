import './style.css'
import retrieveStoredContent from './utils/retrieveStoredContent.ts';
import handlerTask from './utils/handlerTask.ts';
import aObservar from './utils/mutationObserver.ts';
import deleteTasks from './utils/deleteTasks.ts';

//obtiene las tareas del local storage después de cargado el documento
retrieveStoredContent();

//Maneja el formulario y crea una tarea nueva
handlerTask();

//Borra las tareas agregadas tanto del DOM como el localStorage
deleteTasks()

//MutationObserver para observar el taskContainer, si esta   vació reenderiza una plantilla de con un mensaje 
aObservar('#taskContainer');