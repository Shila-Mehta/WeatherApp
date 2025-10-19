🌦️ Weather App

A responsive, user-friendly weather app that allows users to search for real-time weather data by city. Built with JavaScript, HTML, CSS, and a public weather API.

📸  Live Demo / Live Preview

  https://shila-mehta.github.io/WeatherApp/


  Screen Shots

<img width="300" height="500" alt="image" src="https://github.com/user-attachments/assets/42234ebc-a264-4c18-9869-6e38fa7ee36a" />
<img width="300" height="400" alt="image" src="https://github.com/user-attachments/assets/603a1d92-71e4-4025-8755-682d1b5fb7f6" />
<img width="300" height="400" alt="image" src="https://github.com/user-attachments/assets/0c0e351b-7d5d-489f-b8e1-ba4090850823" />



🧩 Features
🔍 Search by city name

🌡️ Display:

Temperature

Humidity

Wind speed

Weather conditions (icons)

🕒 Hourly forecast chart

🎛️ Multiple display modes (tooltip, accordion, flip card)

🛠️ Tech Stack
HTML5

CSS3 (Modularized)

JavaScript (ES6+)

Chart.js – for hourly data visualization

Public Weather API (https://weather.visualcrossing.com)


Project Structure:
```
└── 📁WeatherApp
            └── 📁Components
        ├── createDayCardElements.js
        ├── createElement.js
        ├── createMetricsGrideElements.js
        ├── createPanelElements.js
        ├── createWeatherDisplayCard.js
        ├── matricsFlipElements.js
        ├── MetricsTooltipsElements.js
    └── 📁data
        ├── ForCastData.js
        ├── HourlyChartData.js
        ├── metricsData.js
        ├── UpdateSearchHistory.js
        ├── weatherAppState.js
        ├── WeatherService.js
    └── 📁Events
        ├── Accordion-view.js
        ├── FlipCard-View.js
        ├── FormSubmitHandler.js
        ├── metricsContainersVisiblity.js
        ├── PanelClickevent.js
        ├── ToolTip-View.js
    └── 📁Styles
        ├── Accordion-view.css
        ├── base.css
        ├── day-card.css
        ├── FlipCard.css
        ├── form.css
        ├── HourlyChart.css
        ├── layout.css
        ├── metric-area.css
        ├── panel.css
        ├── Tooltip.css
        ├── weather-dispaly.css
    └── 📁Utils
        ├── APICommunicator.js
        ├── controlChartDisplay.js
        ├── controlVisiblity.js
        ├── debounce.js
        ├── DisplayController.js
        ├── handleMetricAreaToggle.js
        ├── handlePanelToggle.js
        ├── handleWeatherDisplayToggle.js
        ├── handleWeatherFetch.js
        ├── LoadingController.js
        ├── showErrorAndDisableSubmit.js
        ├── showErrorandEnableSubmit.js
        ├── ToggleDayCard.js
    ├── index.html
    ├── LivePreviewController.js
    ├── main.css
    ├── ReadMe.md
    ├── renderHourlyChart.js
    ├── script.js
    └── weatherView.js
```

🔧 Installation

Clone the repository:

git clone https://github.com/Shila-Mehta/WeatherApp.git
