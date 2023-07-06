import Task from "../interface/Tasks.interface";

const CardTask = (t:Task) => {

  const tempContainer:string =`
  <div class="relative border-stone-400 min-w-[19rem]  max-w-full h-40 shadow-md bg-slate-200 rounded-tl-lg rounded-tr-lg">
    <h2 class="bg-emerald-400 text-white text-center py-2 text-xl font-medium tracking-wider rounded-tl-lg rounded-tr-lg max-h-14  overflow-y-hidden   min-h-[40px]">${t.title} </h2>
    <p class=" p-2 text-sm overflow-y-auto h-28 break-words">
    ${t.description}
    </p>
    <button data-id="${t.title}"  aria-label="delete task" title="delete task" class="p-2 bg-emerald-50 w-10 h-10 rounded-md hover:bg-emerald-100 absolute right-2 bottom-2 z-10">
      &#128465;
    </button>
  </div>
  `;

  return tempContainer.trim();
}

export default CardTask;