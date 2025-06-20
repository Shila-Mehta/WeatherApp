
import { weatherAppState } from "./weatherAppState.js";

export  function updateSearchHistory(item){
  let length=weatherAppState.searchHistory.length;
  let historyList=weatherAppState.searchHistory;
  console.log(historyList);

  if(historyList.includes(item)){
    return ;
  }
 
    
  if(length>=5){
    console.log("History exceeded above 5 limited length");
    historyList.pop();
  }
  

   historyList.unshift(item);
}