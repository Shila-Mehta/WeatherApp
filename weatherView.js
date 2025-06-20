  import { WeatherService } from "./data/WeatherService.js";
  import { weatherAppState } from "./data/weatherAppState.js";
  import { handleWeatherFetch } from "./Utils/handleWeatherFetch.js";
  import { showErrorAndDisEnableSubmit } from "./Utils/showErrorAndDisableSubmit.js";
  import { showErrorAndEnableSubmit } from "./Utils/showErrorandEnableSubmit.js";
  import { handleFormSubmit } from "./Events/FormSubmitHandler.js";


export function  initWeatherApp(){

    const target=WeatherService.targetElement();
  
    handleFormSubmit.getAddressFromUser({

        formElement:WeatherService.getFormElement(),
        submitBtn:WeatherService.getSubmitBtn(),
        getCityValue:WeatherService.getCityValue,
        onsubmit:(userInput)=>{
        if(!userInput){
          showErrorAndEnableSubmit('Please enter a valid location',target);
         return null;
        }

        if(userInput.toLowerCase()===weatherAppState.lastaddress){
            console.log("weatherstateinside condition",weatherAppState.lastaddress);
             showErrorAndDisEnableSubmit('Already showing weather for this Location',target, true);
              return null;
        }
       
        console.log("user Input:",userInput,"target:",target);
        handleWeatherFetch(userInput.toLowerCase(),target);

      
    }
})
    
    

 }