import Tasks from "../interface/Tasks.interface";

function deleteTasks():void {
  
  const tasksContainer: HTMLDivElement | null = document.querySelector('#taskContainer');
  
  //Comprobación del tipo de variable
  //uso del operador de fusión ?? si evalúa la expresión de la izquierda y si es nul o undefined otorga el valor de la expresión derecha
  //devuelve una excepción de ser null
  tasksContainer ?? (() => { throw new Error("Es de tipo null"); })();
  
  tasksContainer.addEventListener('click', (event:Event):void => {
    if(event.target instanceof HTMLButtonElement){
      event.target.parentElement!.remove()
      const b = event.target as HTMLButtonElement

      const dataStorage :Tasks[] = JSON.parse(localStorage.getItem('tareas') ?? '[]');

      const newDataStorage = dataStorage.filter(storage => storage.title !== b.getAttribute('data-id'))   
      
      //Actualiza el local Storage
      localStorage.setItem('tareas', JSON.stringify(newDataStorage));
      
    }
  })
}

export default deleteTasks















/*
//Comprobación del tipo de variable
tasksContainer !== null ?
  console.log(' no es null') :
  console.error('es tipo null');
  */