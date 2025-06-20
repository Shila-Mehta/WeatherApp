export  function handleWeatherDisplayToggle(){
     const weatherDisplay=document.getElementById("weather-display");
      const isHidden=getComputedStyle(weatherDisplay).display==="none";
      if(isHidden){
        console.log(isHidden);
        weatherDisplay.style.display="flex";

      }
      }