const got = require("got");
const apiKey = require("./apiKey");

class WeatherApi {
  fetchWeatherData(city, callback) {
    const url = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
    got(url).then((response) => {
      callback(JSON.parse(response.body));
    })
  }
}

module.exports = WeatherApi;