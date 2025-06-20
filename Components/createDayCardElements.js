import  {createElement} from './createElement.js'

export  function createDayCardElements(ForcastArray){
    
    const daycards=document.getElementById('day-card');
    daycards.innerHTML='';
    const dayCardTitle=createElement("h3","day-card-title","","7 day  Forcast");
    daycards.append(dayCardTitle);

    const dayCardContainer=createElement('div',"day-card-container","");


    ForcastArray.forEach((forcastItem,index)=>{
    const dayCard=createElement('div',`dayCard-${index}  dayCard`)
    const dayName=createElement('h2','day-name',null,forcastItem.day);
    const condition=createElement('div','condition',null,forcastItem.condition);
    const min=createElement('div','min',null,forcastItem.min);
    const max=createElement('div','max',null,forcastItem.max);
     dayCard.append(dayName,condition,min,max);
     dayCardContainer.append(dayCard);
    })

       daycards.append(dayCardTitle,dayCardContainer);

     
   

}