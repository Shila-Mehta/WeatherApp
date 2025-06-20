
import { chartData } from "./data/HourlyChartData.js";

let chartInstance=null;

  export function renderHourlyChart(weatherData) {
  const ctx = document.getElementById("hourly-chart").getContext("2d");

     let  hourlyData=chartData(weatherData);
  //Destroy existing chart instance if exists
  if (chartInstance) {
    chartInstance.destroy();
  }

  // Create and store new chart instance
  chartInstance = new Chart(ctx, {
    type: "line",  
    data: {
      labels: hourlyData.map(h => h.time),
      datasets: [{
        label: "Temperature (°C)",
        data: hourlyData.map(h => h.temp),
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: false,
          title: {
            display: true,
            text: "Temperature (°C)"
          }
        },
        x: {
          title: {
            display: true,
            text: "Time (hourly)"
          },
          ticks: {
            maxTicksLimit: 12  // optional: avoid crowding
          }
        }
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: context => `${context.raw} °C`
          }
        }
      }
    }
  });
}
