export  function controlChartDisplay(){
    const chart_container=document.querySelector(".chart-container");

    const isHidden=getComputedStyle(chart_container).display==="none";
     if(isHidden){
        chart_container.style.display="block";
     }
}