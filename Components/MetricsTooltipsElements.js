import { createElement } from "./createElement.js";
import { metricsData } from "../data/metricsData.js";

export function MetricsTooltipElements(metricsGrid, weatherData) {
  metricsGrid.innerHTML = "";

  metricsData(weatherData).forEach((metricItem) => {

     // Create icon element
    const icon = createElement("span", "metric-icon", null, metricItem.icon || "ℹ️");

    // Create wrapper div
    const wrapper = createElement("div", "metric-tooltip-item", null);

    // Create tooltip element
    const tooltip = createElement("div", "tooltip", null, `${metricItem.Name}: ${metricItem.data}`);

    // Append both
    wrapper.append( tooltip);
    metricsGrid.append(icon,wrapper);
  });

   console.log(metricsGrid);
}
