import { controlVisiblity } from "../Utils/controlVisiblity.js";

export  const handleFormSubmit={
    getAddressFromUser:({ formElement,submitBtn,  getCityValue,onsubmit})=>{
  
    
        if(!formElement.dataset.listenerAttached){
          formElement.addEventListener('submit',(e)=>{
              e.preventDefault();
               controlVisiblity();
               onsubmit(getCityValue())
                 
          })
         

          formElement.dataset.listenerAttached=true;

        }
    }

   

  }