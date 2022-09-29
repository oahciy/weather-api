class Weather {
  constructor(api) {
    this.api = api;
    this.repoData = null;
  }

  fetch(city) {
    this.api.fetchWeatherData(city, (response) => (this.repoData = response));
  }

  getWeatherData() {
    return this.repoData;
  }
}

module.exports = Weather;
