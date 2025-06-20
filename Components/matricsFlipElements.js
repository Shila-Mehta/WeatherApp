import { metricsData } from "../data/metricsData.js";
import { createElement } from "./createElement.js";

export  function flipCardElements(metricsGrid,weatherData){
metricsGrid.innerHTML='';

metricsData(weatherData).forEach((metricItem,index)=>{
    const card=createElement('div',"flip-card");
    const inner=createElement('div',"flip-card-inner");
    const front=createElement('div','flip-card-front','',`${metricItem.icon || "ℹ️"}\n${metricItem.Name}`);
    const back=createElement('div','flip-card-back','',metricItem.data);
    inner.append(front,back);
    card.append(inner);

    metricsGrid.append(card);
})

console.log(metricsGrid);
}