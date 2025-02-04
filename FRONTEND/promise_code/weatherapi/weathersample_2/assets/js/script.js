const weatherIcons = {
  clear: "https://cdn-icons-png.flaticon.com/512/869/869869.png", // Example sunny icon
  cloudy: "https://cdn-icons-png.flaticon.com/512/414/414927.png", // Example cloudy icon
  rain: "https://cdn-icons-png.flaticon.com/512/1163/1163624.png", // Example rain icon
  snow: "https://cdn-icons-png.flaticon.com/512/642/642102.png", // Example snow icon
  default: "https://cdn-icons-png.flaticon.com/512/3313/3313998.png", // Default icon
};

const getWeather = async () => {
  const city = document.getElementById("city").value;
  if (!city) {
    alert("Please select a city");
    return;
  }
  try {
    // fetch coordinates of the city from open meteo,s geocoding api\
    const geoResponse = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
    );
    if (!geoResponse.ok) {
      throw new Error("Failed to fetch city coordinates");
    }
    const geoData = await geoResponse.json();
    // console.log(geoData);
    if (!geoData.results || geoData.results.length === 0) {
      alert("City not found");
      return;
    }
    // console.log(geoData.results[0]);
    const { latitude, longitude, name } = geoData.results[0];
    console.log(latitude, longitude, name);

    // fetch weather data from open meteo,s weather api
    const weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );
    if (!weatherResponse.ok) {
      throw new Error("Failed to fetch weather data");
    }
    const weatherData = await weatherResponse.json();
    const temperature = weatherData.current_weather.temperature;
    const weatherCode = weatherData.current_weather.weathercode;

    // determine the appropriate weather icon from temperature
    let icon = weatherIcons.default;
    if (weatherCode === 0) {
      icon = weatherIcons.clear;
    } else if ([1, 2, 3].includes(weatherCode)) {
      icon = weatherIcons.cloudy;
    } else if ([51, 53, 61, 63].includes(weatherCode)) {
      icon = weatherIcons.rain;
    } else if ([71, 73, 75].includes(weatherCode)) {
      icon = weatherIcons.snow;
    }

    // display result
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
    <div class="city">${name}</div>
    <div class="temp">
    <img src="${icon}" alt="${weatherCode}">
    <span>${temperature}&deg;</span>
    </div>
    `;
  } catch (error) {
    console.log(error);
    alert("error");
  }
};
