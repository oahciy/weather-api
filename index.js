const Weather = require("./weather");
const WeatherApi = require("./weatherApi");
const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");
const WeatherView = require("./weatherView");

const api = new WeatherApi();
const weather = new Weather(api);

const rl = readline.createInterface({ input, output });

rl.question("To search the weather, enter city name: ", (answer) => {
  setInterval(() => {
    weather.fetch(answer);
    setTimeout(() => {
    const weatherview = new WeatherView(weather);
    weatherview.displayWeather();
  }, 2000);
  }, 5000)

  rl.close();
});
