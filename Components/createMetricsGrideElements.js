import { createElement } from "./createElement.js";
import { metricsData } from "../data/metricsData.js";

export  function MetricsGrideElements(metricsGrid,weatherData){
    metricsGrid.innerHTML="";

    metricsData(weatherData).forEach((metricItem,index)=>{
        console.log("metricItem:",metricItem);
        const metric_container=createElement('div','metric-container',null);
        const label=createElement('lable',`${metricItem.Name}-label  metric-label`,null,`${metricItem.Name}`);
        const metric=createElement('div',`${metricItem.Name}`,null,`${metricItem.data}`);
        metric_container.append(label,metric);

        metricsGrid.append(metric_container);
    })

    
   
}