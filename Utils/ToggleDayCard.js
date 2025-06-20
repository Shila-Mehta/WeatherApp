export   function toggleDayCard() {
  const dayCard = document.getElementById("day-card");
   const isHidden=getComputedStyle(dayCard).display==="none";
   if(isHidden){
    dayCard.style.display="block";
   }
}