import { WeatherService } from "../data/WeatherService.js";

export function metricsContainersVisiblity(){
  
document.getElementById('metric-design').addEventListener('change',(e)=>{

          let current=e.target.value;

         const AccordionView=WeatherService.getAccordionViewElement();
         const TooltipView=WeatherService.getTooltipViewElement();
          const FlipView=WeatherService.getFlipViewElement();

            AccordionView.style.display="none";
            TooltipView.style.display="none";
            FlipView.style.display="none";

            if(current==="Accordion"){
              console.log("Accordion-view if block run")
              AccordionView.style.display="flex"; 
            }
            else if(current==="Tooltip"){
              console.log("Tooltip-view  if block run")
              TooltipView.style.display="flex";
              
              
              
            }
            else if(current==="Flip "){
              console.log("Flip-view  if  block run")
              FlipView.style.display="flex";
              

              }
      })
             

}