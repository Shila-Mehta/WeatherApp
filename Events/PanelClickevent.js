import { handleWeatherFetch } from "../Utils/handleWeatherFetch.js";
import { weatherAppState } from "../data/weatherAppState.js";
import { WeatherService } from "../data/WeatherService.js";

export  function PanelClick(){
    document.querySelector('.panel').addEventListener('click',(e)=>{
         const city=e.target.dataset.city;

         if(!city)  return;


         const target=WeatherService.targetElement();

         if(city===weatherAppState.lastaddress)  return;

         handleWeatherFetch(city,target);

    })
}