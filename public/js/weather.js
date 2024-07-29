document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const lat = urlParams.get('lat');
    const lon = urlParams.get('lon');

    if (lat && lon) {
      fetch(`/weather/current?lat=${lat}&lon=${lon}`)
        .then(response => response.json())
        .then(weather => {
          document.getElementById('weather').innerHTML = `
            <h2>Current Weather</h2>
            <p>Temperature: ${(weather.main.temp - 273.15).toFixed(1)}°C</p>
            <p>Weather: ${weather.weather[0].description}</p>
            <p>Humidity: ${weather.main.humidity}%</p>
            <p>Wind Speed: ${weather.wind.speed} m/s</p>
          `;
        })
        .catch(error => {
          console.error('Error fetching weather data:', error);
          document.getElementById('weather').innerHTML = `<p>Unable to fetch weather data.</p>`;
        });
    } else {
      document.getElementById('weather').innerHTML = `<p>Location not found.</p>`;
    }
  });
