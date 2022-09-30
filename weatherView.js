class WeatherView {
  constructor(weather) {
    this.repoData = weather.repoData;
  }
  displayWeather() {
    console.log(
      `City: ${this.repoData.name}\nWeather: ${this.repoData.weather[0].main}\nTemperature: ${this.repoData.main.temp}\nFeels like: ${this.repoData.main.feels_like}\nHumidity: ${this.repoData.main.humidity}%`
    );
  }
}

module.exports = WeatherView;

// const WeatherApi = require('./weatherApi');
// const Weather = require('./weather');
// const WeatherView = require('./weatherView');
// const api = new WeatherApi();
// const weather = new Weather(api);
// weather.fetch('Oxford');
// const weatherview = new WeatherView(weather);
// weatherview.displayWeather();
