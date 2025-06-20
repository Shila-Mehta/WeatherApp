
 export const APICommunicator={
    fetchWeatherData:(url)=>{
      return  fetch(url)
         .then((response)=>{
            if(!response.ok)  throw new Error(`HTTP ${ response.status}`)
             return response.json()

        })
         
        }

    
 }