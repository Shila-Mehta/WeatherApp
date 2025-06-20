import { debounce } from "./Utils/debounce.js";
import { WeatherService } from "./data/WeatherService.js";
import { weatherAppState } from "./data/weatherAppState.js";
import { APICommunicator } from "./Utils/APICommunicator.js";
import { DisplayController } from "./Utils/DisplayController.js";
import  {LoadingController} from "./Utils/LoadingController.js"

export  const  LivePreviewController={
    init:()=>{
        const search=document.querySelector('.user-search');
         const debouncePreview= debounce(LivePreviewController.previewWeather,700);
         search.addEventListener('input',debouncePreview);
    },

    previewWeather:(e)=>{
       const targetElement=WeatherService.targetElement();
       const userInput=e.target.value.trim().toLowerCase();

       if(!userInput){
        targetElement.innerHTML='';
        return;
       }
      

        const apiURL=WeatherService.BuildWeatherURL(userInput);
        LoadingController.show(targetElement);

       APICommunicator.fetchWeatherData(apiURL)
        .then((weatherData)=>{
               LoadingController.hide(targetElement);
               DisplayController.renderWeatherData(weatherData,targetElement);
                weatherAppState.lastaddress=userInput;
             
              
           })
           .catch((err)=>{
                 LoadingController.hide(targetElement);
                 DisplayController.renderErrorMessage('Preview unavailable',targetElement);
                
           })
    }
}