import {MetricsGrideElements} from "../Components/createMetricsGrideElements.js";

let isAccordionInitialized = false;

export function Accordion_view_init() {
  if (isAccordionInitialized) return;

  const accordionBtn = document.querySelector(".Accordion-btn");
  console.log("Accordiaon Btn",accordionBtn);
  const metricsGrid = document.querySelector(".Accordion-view .metrics-grid"); 
  console.log("Accordion-grid",metricsGrid);

  accordionBtn.addEventListener("click", () => {
    const isHidden = getComputedStyle(metricsGrid).display === "none";

    if (isHidden) {
      metricsGrid.style.display = "grid";
      accordionBtn.textContent = "hide detailed metrics";
    } else {
      metricsGrid.style.display = "none";
      accordionBtn.textContent = "show detailed metrics";
    }
  });

  isAccordionInitialized = true;
}

export function Accordion_view_update(weatherData) {
  const metricsGrid = document.querySelector(".Accordion-view .metrics-grid");
  MetricsGrideElements(metricsGrid, weatherData);
}
