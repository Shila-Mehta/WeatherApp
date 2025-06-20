import { createElement } from "../Components/createElement.js";
import { weatherDisplayCard } from "../Components/createWeatherDisplayCard.js";

   export const  DisplayController={
   renderWeatherData:(weatherData,targetElement)=>{

    if(  !weatherData.days 
        || !Array.isArray(weatherData.days) 
        || weatherData.days.length==0
    ){
       DisplayController.renderErrorMessage("weather data is currently unavailable.",targetElement);
       return;
    }
     targetElement.innerHTML='';

      weatherDisplayCard(weatherData,targetElement);
    
   },

   renderErrorMessage:(message,targetElement,{preserve=false}={})=>{


      const errMsg=createElement('div','error-message','',message);

      if(!preserve){
        targetElement.innerHTML='';
        targetElement.append(errMsg);
      }
      else{
          targetElement.prepend(errMsg); 
      }
    
      // automatically  remove the error after 5 seconds 
        setTimeout(()=>  errMsg.remove(),3000)
   

       
   }


}