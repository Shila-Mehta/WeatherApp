import { WeatherService } from "../data/WeatherService.js";
import { weatherAppState } from "../data/weatherAppState.js";
import { showErrorAndEnableSubmit } from "./showErrorandEnableSubmit.js";
import { updateSearchHistory } from "../data/UpdateSearchHistory.js";
import { createPanelElements } from "../Components/createPanelElements.js";
import { createDayCardElements } from "../Components/createDayCardElements.js";
import { ForCastData } from "../data/ForCastData.js";
import { TooltipView } from "../Events/ToolTip-View.js";
import { LoadingController } from "./LoadingController.js";
import { APICommunicator } from "./APICommunicator.js";
import { DisplayController } from "./DisplayController.js";
import { FlipCard_View_init, FlipCard_View_update } from "../Events/FlipCard-View.js";
import {Accordion_view_init, Accordion_view_update} from "../Events/Accordion-view.js"
import { renderHourlyChart } from "../renderHourlyChart.js";

export  function handleWeatherFetch(userInput ,target){
    const apiURL=WeatherService.BuildWeatherURL(userInput);
            LoadingController.show(target);
              APICommunicator.fetchWeatherData(apiURL)
              .then((weatherData)=>{
                    LoadingController.hide(target);
                    DisplayController.renderWeatherData(weatherData,target);
                    createDayCardElements(ForCastData(weatherData,target));
                    weatherAppState.lastaddress=userInput.toLowerCase();
                    updateSearchHistory(userInput.toLowerCase());
                    createPanelElements(weatherAppState.searchHistory);
                     Accordion_view_init();
                     Accordion_view_update(weatherData);
                     TooltipView(weatherData);
                    FlipCard_View_init();
                    FlipCard_View_update(weatherData);
                    console.log("hourly");
                    renderHourlyChart(weatherData);
    
                
              })
                .catch((err)=>{
                            LoadingController.hide(target);
                            showErrorAndEnableSubmit(`Weather data is currently unavailable. ${err}`,target);
                })
    
}