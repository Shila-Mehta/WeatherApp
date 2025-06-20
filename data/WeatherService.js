  export const WeatherService={
    getFormElement:()=>document.querySelector('form'),
    getSubmitBtn:()=> WeatherService.getFormElement().querySelector('button'),
    getNormalizedAddress:(rawAddress)=> rawAddress.replaceAll(" ","%20"),
    getAPIKey:()=>  'WQL9CP7SWJW3LHC6RVRQBX543',
    targetElement:()=> document.getElementById('weather-display'),
    getAccordionViewElement:()=>document.querySelector('.Accordion-view'),
    getTooltipViewElement:()=>document.querySelector('.Tooltip-view'),
    getFlipViewElement:()=>document.querySelector('.Flip-view'),
    getCityValue:()=> { 
          const val =document.querySelector(".user-search").value.trim();
         return  val || "RahimYarKhan";
        },
     
    BuildWeatherURL:(address)=>{
      const normalizedAddress=WeatherService.getNormalizedAddress(address);
      const key=WeatherService.getAPIKey();
      return `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${normalizedAddress}?key=${key}`
    }
  }


