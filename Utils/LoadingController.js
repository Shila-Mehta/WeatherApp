  import { createElement } from "../Components/createElement.js";
  
  export const LoadingController={
    show:(targetElement)=>{
         const loadingElement=createElement('div','show','','Loading...');
         targetElement.append(loadingElement);
    } ,
    hide:(targetElement)=> {
        const show=targetElement.querySelector('.show');
        if(show){
            targetElement.removeChild(show);
        }
    }
  }