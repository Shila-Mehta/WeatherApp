import { DisplayController } from "./DisplayController.js";
import { WeatherService } from "../data/WeatherService.js";

export  function showErrorAndEnableSubmit(message ,target,preserve=false){
     DisplayController.renderErrorMessage(message,target,{preserve});
      WeatherService.getSubmitBtn().disabled=false;   //re-enable
}         