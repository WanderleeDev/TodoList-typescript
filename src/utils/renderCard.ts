import CardTask from "../component/CardTask";
import Task from "../interface/Tasks.interface";

function renderTask(tarea:Task[]){
  const patternContainer =  document.querySelector<HTMLDivElement>('#taskContainer');
  
  const listTask = tarea.map((t:Task) => {
    return CardTask(t);
  });

  const tempContainer = document.createRange().createContextualFragment(listTask.join(''));
  patternContainer!.innerHTML = '';
  patternContainer?.append(tempContainer);
}
export default renderTask;