import { DisplayController } from "./DisplayController.js";
import { WeatherService } from "../data/WeatherService.js";

export  function showErrorAndDisEnableSubmit(message ,target,preserve=false){
     DisplayController.renderErrorMessage(message,target,{preserve});

      let timeoutId=setTimeout(()=>{
          WeatherService.getSubmitBtn().disabled=true;  
      },5000)



    //   setInterval(()=>{
    //      clearTimeout(timeoutId);
    //   },5000)
     
    
}      