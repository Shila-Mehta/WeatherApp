export function handleMetricAreaToggle(){
         const metric_area=document.querySelector(".metric-area");
       const isHidden=getComputedStyle(metric_area).display==="none";
       if(isHidden){
        metric_area.style.display="block";
       }
       }