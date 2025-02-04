const fetchWeather = (latitude, longitude) => {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Current Weather: ", data.current_weather);
    })
    .catch((error) => console.log("Error: ", error));
};
fetchWeather(8.1, -1.2);
