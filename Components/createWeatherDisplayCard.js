
import { createElement } from "./createElement.js";

export  function weatherDisplayCard(weatherData,targetElement){
     const resolvedAddress=createElement('div','resolved-address','',weatherData.resolvedAddress);
     const temperature=createElement('div','temp','',`temp : ${weatherData.days[0].temp}`);
     const feelsLike=createElement('div','feels-like','',`feelsLike : ${weatherData.days[0].feelslike}`);
     const condition=createElement('div','condition','',`condition : ${weatherData.days[0].conditions}`);
     console.log(resolvedAddress,temperature,feelsLike,condition);
     targetElement.append(resolvedAddress,temperature,feelsLike,condition);
      }