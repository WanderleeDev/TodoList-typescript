
function aObservar(element:string):void {
  const target = document.querySelector(element) as HTMLDivElement ;
  console.log(element);
  
  function toObserver(entries :IntersectionObserverEntry[]): void {

    entries.forEach(entry => {
      if(entry.isIntersecting) {
        console.log('observado');
        import('../component/TaskEmptyState.ts').then((res) =>{
          const component = res.default;
          
          target.childElementCount === 0 ? target.innerHTML = component : null
        });
      }
    });
  }
  
  //opciones del observer
  const options: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  }
  
  const observer :IntersectionObserver = new IntersectionObserver(toObserver, options);
  observer.observe(target)
}

export default aObservar;

