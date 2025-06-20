import { handleMetricAreaToggle } from "../Utils/handleMetricAreaToggle.js";
import { handlePanelToggle } from "../Utils/handlePanelToggle.js";
import { handleWeatherDisplayToggle } from "../Utils/handleWeatherDisplayToggle.js";
import { toggleDayCard } from "../Utils/ToggleDayCard.js";
import { controlChartDisplay } from "./controlChartDisplay.js";

export function controlVisiblity(){
               handlePanelToggle();
               handleWeatherDisplayToggle();
               toggleDayCard();
               handleMetricAreaToggle();
               controlChartDisplay();
}