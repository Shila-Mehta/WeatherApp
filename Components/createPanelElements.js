import { createElement } from "./createElement.js";

export function createPanelElements(history){
   const panelElement= document.querySelector(".panel");
   console.log(panelElement);

   const ulElement= createElement('ul','ul-list');
    

   history.forEach((historyItem,index)=>{
    const liElement=createElement('li',`li-${index}`,'',historyItem);
    liElement.dataset.city=historyItem;
    // const line=createElement('hr');
    ulElement.append(liElement);
    console.log(ulElement);
   })

   panelElement.innerHTML='';

   panelElement.append(ulElement);
     console.log(panelElement);

}