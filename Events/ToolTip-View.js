import { WeatherService } from "../data/WeatherService.js";
import { MetricsTooltipElements } from "../Components/MetricsTooltipsElements.js";

export function TooltipView(weatherData) {
  const tooltipContainer = WeatherService.getTooltipViewElement(); 
  MetricsTooltipElements(tooltipContainer, weatherData);

  function showTooltip(e) {
    if (e.target.classList.contains("metric-icon")) {
      const tooltipWrapper = e.target.nextElementSibling;
      if (tooltipWrapper?.classList.contains("metric-tooltip-item")) {
        const tooltip = tooltipWrapper.querySelector(".tooltip");
        tooltip.style.opacity = "1";
        tooltip.style.visibility = "visible";
      }
    }
  }

  function hideTooltip(e) {
    if (e.target.classList.contains("metric-icon")) {
      const tooltipWrapper = e.target.nextElementSibling;
      if (tooltipWrapper?.classList.contains("metric-tooltip-item")) {
        const tooltip = tooltipWrapper.querySelector(".tooltip");
        tooltip.style.opacity = "0";
        tooltip.style.visibility = "hidden";
      }
    }
  }

  // Add event listeners using delegation
  tooltipContainer.addEventListener("mouseenter", showTooltip, true);
  tooltipContainer.addEventListener("mouseleave", hideTooltip, true);
}
