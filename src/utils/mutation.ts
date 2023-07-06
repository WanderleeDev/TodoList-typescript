function mutationObserve(target :string):void {
  //elemento a observar
  const targetElement = document.querySelector(target) as HTMLDivElement;
  
  //opciones de observador
  const options :MutationObserverInit = {
    childList: true,
    subtree: true,
    attributes: true
  }

  //Instanciamiento del observador  y función a realizar
  const observer = new MutationObserver(() =>{
    if(targetElement.childElementCount ===  0){
      import('../component/TaskEmptyState.ts').then((res => {
        targetElement.innerHTML= res.default
      }))
    }  
  });

  //observar el elemento
  observer.observe(targetElement, options);
}

export default mutationObserve;