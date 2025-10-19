 import { initWeatherApp } from "./weatherView.js";
  import { PanelClick } from "./Events/PanelClickevent.js";
  import {metricsContainersVisiblity} from "./Events/metricsContainersVisiblity.js"

  
 // start the application
 document.addEventListener('DOMContentLoaded',()=>{
            // LivePreviewController.init();
            initWeatherApp();
            PanelClick();
            metricsContainersVisiblity();

           
            

       
           
 })
 









