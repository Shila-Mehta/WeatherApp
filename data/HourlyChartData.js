export function chartData( weatherData){

 const hourlyData = weatherData.days[0].hours.map(hour => ({
  time: hour.datetime,    // like "01:00"
  temp: hour.temp         // numeric temperature
}));

return hourlyData;

}