
const yearEl = document.getElementById('year');
const lastModEl = document.getElementById('last-modified');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (lastModEl) {
  lastModEl.textContent = document.lastModified;
}


const temperatureC = 8;    // °C  – matches "8 °C" shown on page
const windSpeedKmh = 20;   // km/h – matches "20 km/h" shown on page

/**
 * calculateWindChill – returns the metric wind chill index (°C)
 * Formula: 13.12 + 0.6215T - 11.37V^0.16 + 0.3965T*V^0.16
 * @param {number} temp  – temperature in °C
 * @param {number} speed – wind speed in km/h
 * @returns {number} wind chill rounded to one decimal
 */
function calculateWindChill(temp, speed) {
  return parseFloat(
    (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1)
  );
}

function getWindChillDisplay(temp, speed) {
  if (temp <= 10 && speed > 4.8) {
    return calculateWindChill(temp, speed) + ' °C';
  }
  return 'N/A';
}

const windChillResult = getWindChillDisplay(temperatureC, windSpeedKmh);

const wcWide   = document.getElementById('wind-chill-display');
const wcMobile = document.getElementById('wind-chill-mobile');

if (wcWide)   wcWide.textContent   = windChillResult;
if (wcMobile) wcMobile.textContent = windChillResult;