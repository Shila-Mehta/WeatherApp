import { WeatherService } from "../data/WeatherService.js";
import { flipCardElements } from "../Components/matricsFlipElements.js";


let isFlipCardInitialized = false;

 export function  FlipCard_View_init(){

  if(isFlipCardInitialized)  return;

   const FlipCardElement=WeatherService.getFlipViewElement();
   const metrics_grid=FlipCardElement.querySelector(".metrics-grid");
    const Flip_btn=FlipCardElement.querySelector(".Flip-btn");

     metrics_grid.style.display="none";
     Flip_btn.textContent="Show Detailed metrics";

     Flip_btn.addEventListener("click", () => {
    const isHidden = metrics_grid.style.display === "none";

    if (isHidden) {
      metrics_grid.style.display = "grid";
      Flip_btn.textContent = "Hide Detailed Metrics";
    } else {
      metrics_grid.style.display = "none";
      Flip_btn.textContent = "Show Detailed Metrics";
    }
  });

  isFlipCardInitialized=true;
 }


 export  function  FlipCard_View_update(weatherData){
   const FlipCardElement=WeatherService.getFlipViewElement();
   const metrics_grid=FlipCardElement.querySelector(".metrics-grid");

     flipCardElements(metrics_grid,weatherData);
 }