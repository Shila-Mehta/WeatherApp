
export  function ForCastData(weatherData,targetElement){

  if(  !weatherData.days 
          || !Array.isArray(weatherData.days) 
          || weatherData.days.length==0
      ){
        console.log("problem in forCastDataArray fun");
         return;
      }

 console.log(weatherData,targetElement ,"inside ForCastData Array");
 let  forecastData =[       
  { day: "Monday", icon: "☀️", condition: `${weatherData.days[0].conditions}`, min: `${weatherData.days[0].tempmin}`, max: `${weatherData.days[0].tempmax}` },
  { day: "Tuesday", icon: "🌧", condition: `${weatherData.days[0].conditions}`, min: `${weatherData.days[0].tempmin}`, max: `${weatherData.days[0].tempmax}`}  ,
  { day: "Wednesday", icon: "⛅", condition: `${weatherData.days[0].conditions}`, min: `${weatherData.days[0].tempmin}`, max: `${weatherData.days[0].tempmax}`  },
  { day: "Thursday", icon: "☁️", condition: `${weatherData.days[0].conditions}`, min: `${weatherData.days[0].tempmin}`, max: `${weatherData.days[0].tempmax}`},
  { day: "Friday", icon: "🌩",  condition: `${weatherData.days[0].conditions}`, min: `${weatherData.days[0].tempmin}`, max: `${weatherData.days[0].tempmax}` }  ,
  { day: "Saturday", icon: "🌦",  condition: `${weatherData.days[0].conditions}`, min: `${weatherData.days[0].tempmin}`, max: `${weatherData.days[0].tempmax}`  },
  { day: "Sunday", icon: "☀️", condition: `${weatherData.days[0].conditions}`, min: `${weatherData.days[0].tempmin}`, max: `${weatherData.days[0].tempmax}` }  ,
]

return   forecastData;
}