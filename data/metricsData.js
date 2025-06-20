 
 export function metricsData(weatherData){

     const current=weatherData.currentConditions;
     console.log(current ," current conditions");

 const metricsdata = [
  { Name: "Humidity",      data: `${current.humidity}%`,        icon: "💧" },
  { Name: "Wind Speed",    data: `${current.windspeed} km/h`,   icon: "🌬️" },
  { Name: "Pressure",      data: `${current.pressure} mb`,      icon: "🌡️" },
  { Name: "UV Index",      data: `${current.uvindex}`,          icon: "🔆" },
  { Name: "Visibility",    data: `${current.visibility} km`,    icon: "🌫️" },
  { Name: "Cloud Cover",   data: `${current.cloudcover}%`,      icon: "☁️" },
  { Name: "Dew Point",     data: `${current.dew}°C`,            icon: "💦" },
  { Name: "Sunrise",       data: `${current.sunrise}`,          icon: "🌅" },
  { Name: "Sunset",        data: `${current.sunset}`,           icon: "🌇" },
];





return metricsdata;
 }
 
 